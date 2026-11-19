import * as THREE from "three";

const TRAIL_POOL = 26;
const TRAIL_LIFE = 0.42;
const TRAIL_INTERVAL = 0.012;
const GOLD = new THREE.Color("#ffcf7a");
const HOT = new THREE.Color("#fff2d0");
const DEEP = new THREE.Color("#8f2a12");

let glow: THREE.Texture | null = null;

function glowTexture(): THREE.Texture {
	if (glow) return glow;
	const canvas = createEl("canvas");
	canvas.width = 64;
	canvas.height = 64;
	const ctx = canvas.getContext("2d");
	if (ctx) {
		const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(0.35, "rgba(255,236,200,0.55)");
		gradient.addColorStop(1, "rgba(255,180,90,0)");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, 64, 64);
	}
	glow = new THREE.CanvasTexture(canvas);
	glow.colorSpace = THREE.SRGBColorSpace;
	return glow;
}

export interface InfallSeed {
	/** Node position in the note cloud's local space. */
	position: THREE.Vector3;
	color: number;
}

/**
 * The note "falls" into the horizon: angular speed follows omega ~ 1/r^2, so the
 * star visibly spins up as it shrinks inward, then a shock ring marks the crossing.
 */
export class InfallEffect {
	readonly group = new THREE.Group();

	private readonly duration: number;
	private readonly radius: number;
	private readonly startY: number;
	private theta: number;
	private progress = 0;
	private sinceSpawn = 0;
	private trailIndex = 0;
	private readonly sprites: THREE.Sprite[] = [];
	private readonly ages: number[] = [];
	private readonly head: THREE.Mesh;
	private readonly halo: THREE.Sprite;
	private readonly ring: THREE.Mesh;
	private readonly color = new THREE.Color();
	private readonly startColor = new THREE.Color();
	private readonly currentPos = new THREE.Vector3();
	private firedArrive = false;

	constructor(seed: InfallSeed, duration = 0.72) {
		this.duration = Math.max(0.2, duration);
		this.radius = Math.max(2.6, Math.hypot(seed.position.x, seed.position.z));
		this.startY = seed.position.y;
		this.theta = Math.atan2(seed.position.z, seed.position.x);
		this.color.setHex(seed.color);
		this.startColor.setHex(seed.color);

		const map = glowTexture();
		for (let i = 0; i < TRAIL_POOL; i++) {
			const sprite = new THREE.Sprite(
				new THREE.SpriteMaterial({
					map,
					color: GOLD,
					transparent: true,
					opacity: 0,
					blending: THREE.AdditiveBlending,
					depthWrite: false,
				}),
			);
			sprite.scale.setScalar(0.001);
			this.sprites.push(sprite);
			this.ages.push(TRAIL_LIFE);
			this.group.add(sprite);
		}

		this.head = new THREE.Mesh(
			new THREE.SphereGeometry(0.8, 20, 14),
			new THREE.MeshBasicMaterial({ color: GOLD, transparent: true }),
		);
		this.head.position.copy(seed.position);
		this.group.add(this.head);

		this.halo = new THREE.Sprite(
			new THREE.SpriteMaterial({ map, color: GOLD, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false }),
		);
		this.halo.position.copy(seed.position);
		this.group.add(this.halo);

		this.ring = new THREE.Mesh(
			new THREE.RingGeometry(1.6, 2, 64),
			new THREE.MeshBasicMaterial({
				color: new THREE.Color("#ffe9c0"),
				transparent: true,
				opacity: 0,
				side: THREE.DoubleSide,
				blending: THREE.AdditiveBlending,
				depthWrite: false,
			}),
		);
		this.ring.rotation.x = -Math.PI / 2;
		this.group.add(this.ring);
	}

	/** 0..1 — how far past the flash we are; the view adds this to bloom strength. */
	get bloomBoost(): number {
		return this.progress < 0.72 ? 0 : (this.progress - 0.72) / 0.28;
	}

	get finished(): boolean {
		return this.progress >= 1;
	}

	/** Fires once, right as the star crosses the photon ring. */
	takeArrive(): boolean {
		if (this.firedArrive || this.progress < 0.86) return false;
		this.firedArrive = true;
		return true;
	}

	update(delta: number): void {
		if (this.finished) return;
		const dt = Math.min(delta, 0.08);
		this.progress = Math.min(1, this.progress + dt / this.duration);
		const t = this.progress;

		const r = 2.4 + (this.radius - 2.4) * Math.pow(1 - t, 1.45);
		const dTheta = (900 / (r * r)) * (dt / this.duration);
		this.theta += Math.min(dTheta, 1.2);
		const y = this.startY * Math.pow(1 - t, 1.9);
		const position = this.currentPos.set(r * Math.cos(this.theta), y, r * Math.sin(this.theta));

		this.color.copy(this.startColor).lerp(HOT, Math.min(1, t * 2.2));
		if (t > 0.55) this.color.lerp(DEEP, ((t - 0.55) / 0.45) * 0.75);

		this.head.position.copy(position);
		this.head.rotation.y = -Math.atan2(position.z, position.x) + Math.PI / 2;
		this.head.scale.set(1 + 6 * Math.pow(t, 3), Math.max(0.35, 1 - 0.4 * t), Math.max(0.35, 1 - 0.4 * t));
		(this.head.material as THREE.MeshBasicMaterial).color.copy(this.color);

		this.halo.position.copy(position);
		const haloScale = 4.2 + 2.6 * t;
		this.halo.scale.set(haloScale, haloScale, 1);
		this.halo.material.color.copy(this.color);
		this.halo.material.opacity = 0.9;

		this.sinceSpawn += dt / this.duration;
		if (this.sinceSpawn >= TRAIL_INTERVAL) {
			this.sinceSpawn = 0;
			const slot = this.trailIndex;
			this.trailIndex = (this.trailIndex + 1) % TRAIL_POOL;
			this.sprites[slot].position.copy(position);
			this.sprites[slot].material.color.copy(this.color);
			this.ages[slot] = 0;
		}
		for (let i = 0; i < TRAIL_POOL; i++) {
			this.ages[i] += dt;
			const life = 1 - this.ages[i] / TRAIL_LIFE;
			if (life <= 0) {
				this.sprites[i].material.opacity = 0;
				this.sprites[i].scale.setScalar(0.001);
				continue;
			}
			this.sprites[i].material.opacity = 0.75 * life;
			this.sprites[i].scale.setScalar(1.4 + 2.6 * (1 - life));
		}

		const ringMaterial = this.ring.material as THREE.MeshBasicMaterial;
		if (t > 0.72) {
			const k = (t - 0.72) / 0.28;
			this.ring.visible = true;
			this.ring.scale.setScalar(1 + 7 * k);
			ringMaterial.opacity = 0.8 * (1 - k);
		} else {
			this.ring.visible = false;
		}
	}

	dispose(): void {
		this.head.geometry.dispose();
		(this.head.material as THREE.Material).dispose();
		this.halo.material.dispose();
		this.ring.geometry.dispose();
		(this.ring.material as THREE.Material).dispose();
		for (const sprite of this.sprites) sprite.material.dispose();
	}
}
