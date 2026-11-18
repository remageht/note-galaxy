import * as THREE from "three";
import { GraphLink, GraphNode } from "../data/graph";

const HOVER_SCALE = 1.9;
const DIM_SCALE = 0.34;
const BOB_AMPLITUDE = 0.35;

export class NoteCloud {
	readonly group = new THREE.Group();
	readonly mesh: THREE.InstancedMesh;
	readonly edges: THREE.LineSegments;
	readonly nodes: GraphNode[];

	private readonly dummy = new THREE.Object3D();
	private readonly phases: Float32Array;
	private baseScale: number;
	private readonly linkList: GraphLink[];
	private hovered = -1;
	private folderFilter: string | null = null;
	private highlightLines: THREE.LineSegments | null = null;

	constructor(nodes: GraphNode[], links: GraphLink[], nodeScale: number) {
		this.nodes = nodes;
		this.linkList = links;
		this.baseScale = nodeScale;
		this.phases = new Float32Array(nodes.length);
		for (let i = 0; i < nodes.length; i++) {
			this.phases[i] = Math.random() * Math.PI * 2;
		}

		const geometry = new THREE.IcosahedronGeometry(1, 2);
		const material = new THREE.MeshBasicMaterial({ color: 0xffffff });
		this.mesh = new THREE.InstancedMesh(geometry, material, Math.max(1, nodes.length));
		this.mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
		this.mesh.frustumCulled = false;
		this.mesh.count = nodes.length;

		const color = new THREE.Color();
		for (let i = 0; i < nodes.length; i++) {
			color.setHex(nodes[i].color);
			this.mesh.setColorAt(i, color);
		}
		if (this.mesh.instanceColor) this.mesh.instanceColor.needsUpdate = true;
		this.group.add(this.mesh);

		const positions = new Float32Array(links.length * 6);
		const edgeGeometry = new THREE.BufferGeometry();
		edgeGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		const edgeMaterial = new THREE.LineBasicMaterial({
			color: 0x6f8dff,
			transparent: true,
			opacity: 0.1,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
		});
		this.edges = new THREE.LineSegments(edgeGeometry, edgeMaterial);
		this.edges.frustumCulled = false;
		this.group.add(this.edges);

		this.writeEdges();
	}

	private writeEdges(): void {
		const attr = this.edges.geometry.getAttribute("position") as THREE.BufferAttribute;
		const array = attr.array as Float32Array;
		for (let i = 0; i < this.linkList.length; i++) {
			const link = this.linkList[i];
			const a = this.nodes[link.source];
			const b = this.nodes[link.target];
			if (!a || !b) continue;
			const o = i * 6;
			array[o] = a.x;
			array[o + 1] = a.y;
			array[o + 2] = a.z;
			array[o + 3] = b.x;
			array[o + 4] = b.y;
			array[o + 5] = b.z;
		}
		attr.needsUpdate = true;
	}

	private nodeScaleAt(index: number): number {
		const node = this.nodes[index];
		if (!node) return 0.001;
		let scale = node.size * this.baseScale;
		if (this.folderFilter && node.folder !== this.folderFilter) scale *= DIM_SCALE;
		if (index === this.hovered) scale *= HOVER_SCALE;
		return Math.max(0.001, scale);
	}

	/** Called every frame: bobbing + instance matrix refresh. */
	update(time: number): void {
		for (let i = 0; i < this.nodes.length; i++) {
			const node = this.nodes[i];
			const bob = Math.sin(time * 0.55 + this.phases[i]) * BOB_AMPLITUDE;
			this.dummy.position.set(node.x, node.y + bob, node.z);
			this.dummy.scale.setScalar(this.nodeScaleAt(i));
			this.dummy.updateMatrix();
			this.mesh.setMatrixAt(i, this.dummy.matrix);
		}
		this.mesh.instanceMatrix.needsUpdate = true;
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

		const segments: number[] = [];
		const node = this.nodes[this.hovered];
		if (!node) return;
		for (const link of this.linkList) {
			let other = -1;
			if (link.source === this.hovered) other = link.target;
			else if (link.target === this.hovered) other = link.source;
			if (other < 0) continue;
			const peer = this.nodes[other];
			if (!peer) continue;
			segments.push(node.x, node.y, node.z, peer.x, peer.y, peer.z);
		}
		if (segments.length === 0) return;

		const geometry = new THREE.BufferGeometry();
		geometry.setAttribute("position", new THREE.Float32BufferAttribute(segments, 3));
		const material = new THREE.LineBasicMaterial({
			color: 0xa9c4ff,
			transparent: true,
			opacity: 0.55,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
		});
		this.highlightLines = new THREE.LineSegments(geometry, material);
		this.highlightLines.frustumCulled = false;
		this.group.add(this.highlightLines);
	}

	/** World-space position of a node, including bobbing and group rotation. */
	worldPosition(index: number, time: number, target: THREE.Vector3): THREE.Vector3 {
		const node = this.nodes[index];
		if (!node) return target.set(0, 0, 0);
		const bob = Math.sin(time * 0.55 + this.phases[index]) * BOB_AMPLITUDE;
		target.set(node.x, node.y + bob, node.z);
		return target.applyMatrix4(this.group.matrixWorld);
	}

	dispose(): void {
		this.mesh.geometry.dispose();
		(this.mesh.material as THREE.Material).dispose();
		this.edges.geometry.dispose();
		(this.edges.material as THREE.Material).dispose();
		if (this.highlightLines) {
			this.highlightLines.geometry.dispose();
			(this.highlightLines.material as THREE.Material).dispose();
		}
	}
}
