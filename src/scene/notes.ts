import * as THREE from "three";
import { GraphLink, GraphNode } from "../data/graph";
import { CELESTIAL_FRAGMENT, CELESTIAL_VERTEX } from "./shaders/celestial";
import { RING_FRAGMENT, RING_VERTEX } from "./shaders/ringShader";

const HOVER_SCALE = 1.9;
const DIM_SCALE = 0.34;
const BOB_AMPLITUDE = 0.35;

export class NoteCloud {
	readonly group = new THREE.Group();
	readonly mesh: THREE.InstancedMesh;
	readonly edges: THREE.LineSegments;
	readonly nodes: GraphNode[];

	private readonly celestialMaterial: THREE.ShaderMaterial;
	private readonly ringMesh: THREE.InstancedMesh | null = null;
	private readonly gasGiantIndices: number[] = [];
	private readonly dummy = new THREE.Object3D();
	private readonly ringDummy = new THREE.Object3D();
	private readonly phases: Float32Array;
	private readonly initialX: Float32Array;
	private readonly initialY: Float32Array;
	private readonly initialZ: Float32Array;
	private readonly radii: Float32Array;
	private readonly azimuths: Float32Array;
	private readonly angSpeeds: Float32Array;
	readonly currentPositions: Float32Array;

	private baseScale: number;
	private readonly linkList: GraphLink[];
	private hovered = -1;
	private focalIndex = -1;
	private folderFilter: string | null = null;
	private highlightLines: THREE.LineSegments | null = null;
	orbitalMotion = true;

	constructor(nodes: GraphNode[], links: GraphLink[], nodeScale: number, orbitalMotion = true) {
		this.nodes = nodes;
		this.linkList = links;
		this.baseScale = nodeScale;
		this.orbitalMotion = orbitalMotion;

		const count = nodes.length;
		this.phases = new Float32Array(count);
		this.initialX = new Float32Array(count);
		this.initialY = new Float32Array(count);
		this.initialZ = new Float32Array(count);
		this.radii = new Float32Array(count);
		this.azimuths = new Float32Array(count);
		this.angSpeeds = new Float32Array(count);
		this.currentPositions = new Float32Array(count * 3);

		for (let i = 0; i < count; i++) {
			this.phases[i] = Math.random() * Math.PI * 2;
			const n = nodes[i];
			this.initialX[i] = n.x;
			this.initialY[i] = n.y;
			this.initialZ[i] = n.z;

			const r = Math.hypot(n.x, n.z);
			this.radii[i] = r;
			this.azimuths[i] = Math.atan2(n.z, n.x);
			// Kepler's 3rd law approximation: angular velocity decreases with radius
			this.angSpeeds[i] = 0.16 / Math.pow(1.0 + r / 16.0, 1.35);

			this.currentPositions[i * 3] = n.x;
			this.currentPositions[i * 3 + 1] = n.y;
			this.currentPositions[i * 3 + 2] = n.z;

			if (n.celestialType === "gas_giant") {
				this.gasGiantIndices.push(i);
			}
		}

		const geometry = new THREE.IcosahedronGeometry(1, 4);
		const celestialTypes = new Float32Array(count);
		const seeds = new Float32Array(count);
		for (let i = 0; i < count; i++) {
			const t = nodes[i].celestialType;
			celestialTypes[i] = t === "star" ? 3.0 : t === "gas_giant" ? 2.0 : t === "planet" ? 1.0 : 0.0;
			seeds[i] = (i * 137.5 + 42.0) % 100.0;
		}
		geometry.setAttribute("aCelestialType", new THREE.InstancedBufferAttribute(celestialTypes, 1));
		geometry.setAttribute("aSeed", new THREE.InstancedBufferAttribute(seeds, 1));

		this.celestialMaterial = new THREE.ShaderMaterial({
			vertexShader: CELESTIAL_VERTEX,
			fragmentShader: CELESTIAL_FRAGMENT,
			uniforms: {
				uTime: { value: 0 },
			},
		});
		this.mesh = new THREE.InstancedMesh(geometry, this.celestialMaterial, Math.max(1, count));
		this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
		this.mesh.frustumCulled = false;
		this.mesh.count = count;

		const color = new THREE.Color();
		for (let i = 0; i < count; i++) {
			color.setHex(nodes[i].color);
			// Enhance stellar brightness for stars
			if (nodes[i].celestialType === "star") {
				color.multiplyScalar(1.25);
			}
			this.mesh.setColorAt(i, color);
		}
		if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
		this.group.add(this.mesh);

		// Planetary rings for gas giants
		if (this.gasGiantIndices.length > 0) {
			const ringGeom = new THREE.RingGeometry(1.3, 2.3, 48);
			ringGeom.rotateX(Math.PI / 2);
			const ringMat = new THREE.ShaderMaterial({
				vertexShader: RING_VERTEX,
				fragmentShader: RING_FRAGMENT,
				side: THREE.DoubleSide,
				transparent: true,
				depthWrite: false,
				blending: THREE.AdditiveBlending,
			});
			this.ringMesh = new THREE.InstancedMesh(ringGeom, ringMat, this.gasGiantIndices.length);
			this.ringMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
			this.ringMesh.frustumCulled = false;
			this.ringMesh.count = this.gasGiantIndices.length;

			const ringColor = new THREE.Color();
			for (let r = 0; r < this.gasGiantIndices.length; r++) {
				const nodeIdx = this.gasGiantIndices[r];
				ringColor.setHex(nodes[nodeIdx].color).offsetHSL(0.04, 0.1, 0.05);
				this.ringMesh.setColorAt(r, ringColor);
			}
			if (this.ringMesh.instanceColor) this.ringMesh.instanceColor.needsUpdate = true;
			this.group.add(this.ringMesh);
		}

		const positions = new Float32Array(links.length * 6);
		const edgeGeometry = new THREE.BufferGeometry();
		edgeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		const edgeMaterial = new THREE.LineBasicMaterial({
			color: 0x6f8dff,
			transparent: true,
			opacity: 0.12,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
		});
		this.edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
		this.edges.frustumCulled = false;
		this.group.add(this.edges);

		this.writeEdges();
	}

	writeEdges(): void {
		const attr = this.edges.geometry.getAttribute("position") as THREE.BufferAttribute;
		const array = attr.array as Float32Array;
		const cur = this.currentPositions;
		for (let i = 0; i < this.linkList.length; i++) {
			const link = this.linkList[i];
			const sa = link.source * 3;
			const ta = link.target * 3;
			const o = i * 6;
			array[o] = cur[sa];
			array[o + 1] = cur[sa + 1];
			array[o + 2] = cur[sa + 2];
			array[o + 3] = cur[ta];
			array[o + 4] = cur[ta + 1];
			array[o + 5] = cur[ta + 2];
		}
		attr.needsUpdate = true;
	}

	setFocalNode(index: number): void {
		this.focalIndex = index;
	}

	getFocalNode(): number {
		return this.focalIndex;
	}

	private nodeScaleAt(index: number, time: number): number {
		const node = this.nodes[index];
		if (!node) return 0.001;
		let scale = node.size * this.baseScale;
		if (this.folderFilter && node.folder !== this.folderFilter) scale *= DIM_SCALE;
		if (index === this.hovered) scale *= HOVER_SCALE;
		if (index === this.focalIndex) scale *= 1.4;

		// Subtle stellar pulse for stars
		if (node.celestialType === "star") {
			scale *= 1.0 + 0.08 * Math.sin(time * 2.2 + this.phases[index]);
		}

		return Math.max(0.001, scale);
	}

	/** Called every frame: Keplerian orbital motion + instance matrices refresh. */
	update(time: number): void {
		this.celestialMaterial.uniforms.uTime.value = time;
		const count = this.nodes.length;
		const cur = this.currentPositions;

		let focalX = 0;
		let focalY = 0;
		let focalZ = 0;

		for (let i = 0; i < count; i++) {
			const bob = Math.sin(time * 0.55 + this.phases[i]) * BOB_AMPLITUDE;
			let x: number;
			let y = this.initialY[i] + bob;
			let z: number;

			if (this.orbitalMotion) {
				const theta = this.azimuths[i] + this.angSpeeds[i] * time;
				const r = this.radii[i];
				x = r * Math.cos(theta);
				z = r * Math.sin(theta);
			} else {
				x = this.initialX[i];
				z = this.initialZ[i];
			}

			cur[i * 3] = x;
			cur[i * 3 + 1] = y;
			cur[i * 3 + 2] = z;

			if (i === this.focalIndex) {
				focalX = x;
				focalY = y;
				focalZ = z;
			}
		}

		// If a focal center is active, offset positions so focal node stays at (0, 0, 0)
		if (this.focalIndex >= 0) {
			for (let i = 0; i < count; i++) {
				cur[i * 3] -= focalX;
				cur[i * 3 + 1] -= focalY;
				cur[i * 3 + 2] -= focalZ;
			}
		}

		for (let i = 0; i < count; i++) {
			const idx = i * 3;
			this.dummy.position.set(cur[idx], cur[idx + 1], cur[idx + 2]);
			this.dummy.scale.setScalar(this.nodeScaleAt(i, time));
			this.dummy.updateMatrix();
			this.mesh.setMatrixAt(i, this.dummy.matrix);
		}
		this.mesh.instanceMatrix.needsUpdate = true;

		// Update gas giant rings
		if (this.ringMesh && this.gasGiantIndices.length > 0) {
			for (let r = 0; r < this.gasGiantIndices.length; r++) {
				const nodeIdx = this.gasGiantIndices[r];
				const p = nodeIdx * 3;
				const scale = this.nodeScaleAt(nodeIdx, time);
				this.ringDummy.position.set(cur[p], cur[p + 1], cur[p + 2]);
				this.ringDummy.scale.setScalar(scale);
				this.ringDummy.rotation.set(0.35, 0.2, 0.1);
				this.ringDummy.updateMatrix();
				this.ringMesh.setMatrixAt(r, this.ringDummy.matrix);
			}
			this.ringMesh.instanceMatrix.needsUpdate = true;
		}

		// Update link lines in sync with orbital positions
		if (this.orbitalMotion || this.focalIndex >= 0) {
			this.writeEdges();
		}
	}

	setHovered(index: number): void {
		if (index === this.hovered) return;
		this.hovered = index;
		this.refreshHighlight();
	}

	getHovered(): number {
		return this.hovered;
	}

	setFolderFilter(folder: string | null): void {
		this.folderFilter = folder;
	}

	setNodeScale(scale: number): void {
		this.baseScale = Math.max(0.05, scale);
	}

	private refreshHighlight(): void {
		if (this.highlightLines) {
			this.group.remove(this.highlightLines);
			this.highlightLines.geometry.dispose();
			(this.highlightLines.material as THREE.Material).dispose();
			this.highlightLines = null;
		}
		if (this.hovered < 0) return;

		const cur = this.currentPositions;
		const segments: number[] = [];
		const hi = this.hovered * 3;
		const hx = cur[hi];
		const hy = cur[hi + 1];
		const hz = cur[hi + 2];

		for (const link of this.linkList) {
			let other = -1;
			if (link.source === this.hovered) other = link.target;
			else if (link.target === this.hovered) other = link.source;
			if (other < 0) continue;

			const oi = other * 3;
			segments.push(hx, hy, hz, cur[oi], cur[oi + 1], cur[oi + 2]);
		}
		if (segments.length === 0) return;

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute("position", new THREE.Float32BufferAttribute(segments, 3));
		const material = new THREE.LineBasicMaterial({
			color: 0xa9c4ff,
			transparent: true,
			opacity: 0.65,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
		});
		this.highlightLines = new THREE.LineSegments(geometry, material);
		this.highlightLines.frustumCulled = false;
		this.group.add(this.highlightLines);
	}

	/** World-space position of a node, including bobbing, orbiting and group rotation. */
	worldPosition(index: number, _time: number, target: THREE.Vector3): THREE.Vector3 {
		if (index < 0 || index >= this.nodes.length) return target.set(0, 0, 0);
		const i = index * 3;
		target.set(this.currentPositions[i], this.currentPositions[i + 1], this.currentPositions[i + 2]);
		return target.applyMatrix4(this.group.matrixWorld);
	}

	dispose(): void {
		this.mesh.geometry.dispose();
		(this.mesh.material as THREE.Material).dispose();
		if (this.ringMesh) {
			this.ringMesh.geometry.dispose();
			(this.ringMesh.material as THREE.Material).dispose();
		}
		this.edges.geometry.dispose();
		(this.edges.material as THREE.Material).dispose();
		if (this.highlightLines) {
			this.highlightLines.geometry.dispose();
			(this.highlightLines.material as THREE.Material).dispose();
		}
	}
}
