import * as THREE from "three";

const HALO_COLOR = "#b78bff";
const CORE_COLOR = "#eaf2ff";
const FEED_COLOR = "#ffd9a0";

let gradient: THREE.Texture | null = null;

function jetTexture(): THREE.Texture {
	if (gradient) return gradient;
	const canvas = createEl("canvas");
	canvas.width = 128;
	canvas.height = 128;
	const ctx = canvas.getContext("2d");
	if (ctx) {
		const fade = ctx.createLinearGradient(0, 0, 0, 128);
		fade.addColorStop(0, "rgba(215,232,255,0.95)");
		fade.addColorStop(0.4, "rgba(150,170,255,0.32)");
		fade.addColorStop(1, "rgba(90,60,180,0)");
		ctx.fillStyle = fade;
		ctx.fillRect(0, 0, 128, 128);
	}
	gradient = new THREE.CanvasTexture(canvas);
	gradient.colorSpace = THREE.SRGBColorSpace;
	return gradient;
}

const UP = new THREE.Vector3(0, 1, 0);

/**
 * A quasar is an active core with a relativistic jet, so the metaphor is literal:
 * the most connected note feeds the horizon and the jets grow with its degree.
 */
export class QuasarJets {
	readonly group = new THREE.Group();

	private readonly halos: THREE.Mesh[] = [];
	private readonly cores: THREE.Mesh[] = [];
	private feed: THREE.Mesh | null = null;
	private power = 0;

	constructor() {
		this.group.visible = false;
		const haloMaterial = new THREE.MeshBasicMaterial({
			map: jetTexture(),
			color: HALO_COLOR,
			transparent: true,
			opacity: 0.45,
			side: THREE.DoubleSide,
			blending: THREE.AdditiveBlending,
			depthWrite: false,
		});
		const coreMaterial = new THREE.MeshBasicMaterial({
			color: CORE_COLOR,
			transparent: true,
			opacity: 0.7,
			blending: THREE.AdditiveBlending,
			depthWrite: false,
		});

		for (const direction of [1, -1]) {
			const halo = new THREE.Mesh(new THREE.ConeGeometry(3.2, 30, 28, 1, true), haloMaterial);
			halo.position.y = (direction * 30) / 2;
			if (direction < 0) halo.rotation.x = Math.PI;
			this.halos.push(halo);
			this.group.add(halo);

			const core = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 26, 12, 1, true), coreMaterial);
			core.position.y = (direction * 26) / 2;
			this.cores.push(core);
			this.group.add(core);
		}
	}

	/** 0 hides the jets entirely; 1 is a dominant hub. */
	setPower(power: number): void {
		this.power = Math.max(0, Math.min(1, power));
		this.group.visible = this.power > 0.02;
		const length = 0.55 + 0.45 * this.power;
		for (const halo of this.halos) halo.scale.set(0.6 + 0.4 * this.power, length, 0.6 + 0.4 * this.power);
		for (const core of this.cores) core.scale.set(1, length, 1);
	}

	/** The accretion stream from the hub note to the horizon. */
	setFeed(from: THREE.Vector3 | null): void {
		if (!from) {
			if (this.feed) {
				this.group.remove(this.feed);
				this.feed.geometry.dispose();
				(this.feed.material as THREE.Material).dispose();
				this.feed = null;
			}
			return;
		}

		if (!this.feed) {
			this.feed = new THREE.Mesh(
				new THREE.CylinderGeometry(0.07, 0.07, 1, 8, 1, true),
				new THREE.MeshBasicMaterial({
					color: FEED_COLOR,
					transparent: true,
					opacity: 0.32,
					blending: THREE.AdditiveBlending,
					depthWrite: false,
				}),
			);
			this.group.add(this.feed);
		}

		const length = from.length();
		if (length < 0.001) return;
		this.feed.position.copy(from).multiplyScalar(0.5);
		this.feed.scale.set(1, length, 1);
		this.feed.quaternion.setFromUnitVectors(UP, from.clone().normalize());
	}

	update(time: number): void {
		if (!this.group.visible) return;
		const pulse = 1 + 0.05 * Math.sin(time * 1.7);
		for (const core of this.cores) core.scale.x = core.scale.z = pulse;
		if (this.feed) (this.feed.material as THREE.MeshBasicMaterial).opacity = 0.24 + 0.12 * this.power;
	}

	dispose(): void {
		for (const halo of this.halos) halo.geometry.dispose();
		for (const core of this.cores) core.geometry.dispose();
		if (this.halos.length) (this.halos[0].material as THREE.Material).dispose();
		if (this.cores.length) (this.cores[0].material as THREE.Material).dispose();
		if (this.feed) {
			this.feed.geometry.dispose();
			(this.feed.material as THREE.Material).dispose();
		}
	}
}
