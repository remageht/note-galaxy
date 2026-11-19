import * as THREE from "three";
import { GraphLink } from "../data/graph";
import { NoteCloud } from "./notes";

interface PulseState {
	linkIndex: number;
	progress: number;
	speed: number;
	size: number;
	reverse: boolean;
}

export class PulseCloud {
	readonly group = new THREE.Group();
	private readonly mesh: THREE.InstancedMesh;
	private readonly dummy = new THREE.Object3D();
	private readonly pulses: PulseState[];
	private readonly links: GraphLink[];
	private readonly count: number;

	constructor(links: GraphLink[], pulseCount = 120) {
		this.links = links;
		this.count = Math.min(pulseCount, Math.max(10, Math.floor(links.length * 0.4)));

		const geometry = new THREE.IcosahedronGeometry(0.18, 1);
		const material = new THREE.MeshBasicMaterial({
			color: 0x9bc7ff,
			transparent: true,
			opacity: 0.9,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
		});

		this.mesh = new THREE.InstancedMesh(geometry, material, Math.max(1, this.count));
		this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
		this.mesh.frustumCulled = false;
		this.mesh.count = this.links.length > 0 ? this.count : 0;

		this.pulses = new Array(this.count);
		const color = new THREE.Color();

		for (let i = 0; i < this.count; i++) {
			const linkIndex = this.links.length > 0 ? Math.floor(Math.random() * this.links.length) : 0;
			this.pulses[i] = {
				linkIndex,
				progress: Math.random(),
				speed: 0.35 + Math.random() * 0.45,
				size: 0.8 + Math.random() * 0.6,
				reverse: Math.random() > 0.5,
			};

			const hue = Math.random() > 0.3 ? 0.58 + Math.random() * 0.08 : 0.12 + Math.random() * 0.05;
			color.setHSL(hue, 0.9, 0.75);
			this.mesh.setColorAt(i, color);
		}

		if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
		this.group.add(this.mesh);
	}

	update(delta: number, noteCloud: NoteCloud): void {
		if (this.links.length === 0 || !this.mesh) return;

		const cur = noteCloud.currentPositions;
		const linkCount = this.links.length;

		for (let i = 0; i < this.count; i++) {
			const p = this.pulses[i];
			p.progress += p.speed * delta;

			if (p.progress >= 1.0) {
				p.progress = 0.0;
				p.linkIndex = Math.floor(Math.random() * linkCount);
				p.speed = 0.35 + Math.random() * 0.45;
				p.reverse = Math.random() > 0.5;
			}

			const link = this.links[p.linkIndex];
			if (!link) continue;
			const sIdx = (p.reverse ? link.target : link.source) * 3;
			const tIdx = (p.reverse ? link.source : link.target) * 3;

			const ax = cur[sIdx] ?? 0;
			const ay = cur[sIdx + 1] ?? 0;
			const az = cur[sIdx + 2] ?? 0;

			const bx = cur[tIdx] ?? 0;
			const by = cur[tIdx + 1] ?? 0;
			const bz = cur[tIdx + 2] ?? 0;

			const t = p.progress;
			const x = ax + (bx - ax) * t;
			const y = ay + (by - ay) * t;
			const z = az + (bz - az) * t;

			const envelope = Math.sin(t * Math.PI);
			const scale = p.size * Math.max(0.001, envelope);

			this.dummy.position.set(x, y, z);
			this.dummy.scale.setScalar(scale);
			this.dummy.updateMatrix();
			this.mesh.setMatrixAt(i, this.dummy.matrix);
		}

		this.mesh.instanceMatrix.needsUpdate = true;
	}

	dispose(): void {
		this.mesh.geometry.dispose();
		(this.mesh.material as THREE.Material).dispose();
	}
}
