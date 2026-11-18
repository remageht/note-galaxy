import { GraphLink, GraphNode } from "./graph";

export interface LayoutOptions {
	iterations?: number;
	minRadius?: number;
	maxRadius?: number;
	cellSize?: number;
	/** 0..1 — how strongly stale notes are pushed out to the shell. */
	activityBias?: number;
}

/** Small deterministic PRNG so the galaxy looks the same between reloads. */
function mulberry32(seed: number): () => number {
	let a = seed >>> 0;
	return () => {
		a = (a + 0x6d2b79f5) | 0;
		let t = Math.imul(a ^ (a >>> 15), 1 | a);
		t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
		return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
	};
}

const hash3 = (x: number, y: number, z: number): number =>
	(Math.imul(x, 73856093) ^ Math.imul(y, 19349663) ^ Math.imul(z, 83492791)) | 0;

/**
 * Simple 3D force layout: repulsion through a spatial hash, springs along
 * links, a soft shell constraint and a gentle pull to the center.
 * Runs once at load and then freezes; per-frame motion is done by the view.
 */
export function layout3d(nodes: GraphNode[], links: GraphLink[], options: LayoutOptions = {}): void {
	const n = nodes.length;
	if (n === 0) return;

	const iterations = options.iterations ?? 180;
	const rMin = options.minRadius ?? 12;
	const rMax = options.maxRadius ?? 38;
	const cell = options.cellSize ?? 6;
	const activityBias = options.activityBias ?? 0;

	const rnd = mulberry32(0x1f2e3d4c);
	const golden = Math.PI * (3 - Math.sqrt(5));

	for (let i = 0; i < n; i++) {
		const node = nodes[i];
		const y = 1 - 2 * ((i + 0.5) / n);
		const ring = Math.sqrt(Math.max(0, 1 - y * y));
		const phi = i * golden;
		const stale = activityBias > 0 ? (1 - (node.recency || 0)) * 9 * activityBias : 0;
		const base = (node.kind === "project" ? rMin : rMin + 5) + stale;
		const radius = Math.min(rMax - 2, base + rnd() * Math.max(2, rMax - base - 4));
		node.x = Math.cos(phi) * ring * radius;
		node.y = y * radius * 0.75;
		node.z = Math.sin(phi) * ring * radius;
	}

	const vx = new Float32Array(n);
	const vy = new Float32Array(n);
	const vz = new Float32Array(n);

	const grid = new Map<number, number[]>();

	for (let iter = 0; iter < iterations; iter++) {
		grid.clear();
		for (let i = 0; i < n; i++) {
			const node = nodes[i];
			const ix = Math.floor(node.x / cell);
			const iy = Math.floor(node.y / cell);
			const iz = Math.floor(node.z / cell);
			const key = hash3(ix, iy, iz);
			const bucket = grid.get(key);
			if (bucket) bucket.push(i);
			else grid.set(key, [i]);
		}

		// Repulsion between neighbours in adjacent cells.
		for (let i = 0; i < n; i++) {
			const a = nodes[i];
			const ix = Math.floor(a.x / cell);
			const iy = Math.floor(a.y / cell);
			const iz = Math.floor(a.z / cell);
			for (let dx = -1; dx <= 1; dx++) {
				for (let dy = -1; dy <= 1; dy++) {
					for (let dz = -1; dz <= 1; dz++) {
						const bucket = grid.get(hash3(ix + dx, iy + dy, iz + dz));
						if (!bucket) continue;
						for (let b = 0; b < bucket.length; b++) {
							const j = bucket[b];
							if (j <= i) continue;
							const other = nodes[j];
							let ox = other.x - a.x;
							let oy = other.y - a.y;
							let oz = other.z - a.z;
							let d2 = ox * ox + oy * oy + oz * oz;
							if (d2 > cell * cell * 4) continue;
							if (d2 < 0.05) {
								ox = rnd() - 0.5;
								oy = rnd() - 0.5;
								oz = rnd() - 0.5;
								d2 = 0.05;
							}
							const inv = 1 / Math.sqrt(d2);
							const force = (9 + 4 * (a.size + other.size)) / (d2 + 2);
							const fx = ox * inv * force;
							const fy = oy * inv * force;
							const fz = oz * inv * force;
							vx[i] -= fx;
							vy[i] -= fy;
							vz[i] -= fz;
							vx[j] += fx;
							vy[j] += fy;
							vz[j] += fz;
						}
					}
				}
			}
		}

		// Springs along links.
		for (const link of links) {
			const a = nodes[link.source];
			const b = nodes[link.target];
			if (!a || !b) continue;
			const ox = b.x - a.x;
			const oy = b.y - a.y;
			const oz = b.z - a.z;
			const dist = Math.sqrt(ox * ox + oy * oy + oz * oz) || 0.001;
			const target = 5.5 + a.size + b.size;
			const force = (dist - target) * 0.022;
			const inv = 1 / dist;
			const fx = ox * inv * force;
			const fy = oy * inv * force;
			const fz = oz * inv * force;
			vx[link.source] += fx;
			vy[link.source] += fy;
			vz[link.source] += fz;
			vx[link.target] -= fx;
			vy[link.target] -= fy;
			vz[link.target] -= fz;
		}

		// Integrate with damping and a soft spherical shell.
		for (let i = 0; i < n; i++) {
			const node = nodes[i];
			vx[i] *= 0.86;
			vy[i] *= 0.86;
			vz[i] *= 0.86;

			vx[i] -= node.x * 0.0035;
			vy[i] -= node.y * 0.0035;
			vz[i] -= node.z * 0.0035;

			const r = Math.sqrt(node.x * node.x + node.y * node.y + node.z * node.z) || 0.001;
			if (r > rMax) {
				const pull = (r - rMax) * 0.03;
				vx[i] -= (node.x / r) * pull;
				vy[i] -= (node.y / r) * pull;
				vz[i] -= (node.z / r) * pull;
			} else if (r < rMin) {
				const push = (rMin - r) * 0.03;
				vx[i] += (node.x / r) * push;
				vy[i] += (node.y / r) * push;
				vz[i] += (node.z / r) * push;
			}

			const step = 1.4;
			node.x += Math.max(-step, Math.min(step, vx[i]));
			node.y += Math.max(-step, Math.min(step, vy[i]));
			node.z += Math.max(-step, Math.min(step, vz[i]));
		}
	}

	// Flatten into a galactic disc and keep the accretion disk area clear.
	for (const node of nodes) {
		node.y *= 0.7;
		const r = Math.sqrt(node.x * node.x + node.z * node.z) || 0.001;
		if (r < rMin) {
			const k = rMin / r;
			node.x *= k;
			node.z *= k;
		}
	}
}
