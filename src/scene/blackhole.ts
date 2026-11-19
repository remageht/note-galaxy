import * as THREE from "three";

const DISK_VERTEX = /* glsl */ `
varying vec3 vPos;
void main() {
	vPos = position;
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const DISK_FRAGMENT = /* glsl */ `
precision highp float;

uniform float uTime;
uniform float uSpeed;
uniform float uInner;
uniform float uOuter;
uniform float uAlpha;
uniform vec3 uColorHot;
uniform vec3 uColorMid;
uniform vec3 uColorCold;

varying vec3 vPos;

float hash(vec2 p) {
	p = fract(p * vec2(123.34, 456.21));
	p += dot(p, p + 45.32);
	return fract(p.x * p.y);
}

float noise(vec2 p) {
	vec2 i = floor(p);
	vec2 f = fract(p);
	f = f * f * (3.0 - 2.0 * f);
	float a = hash(i);
	float b = hash(i + vec2(1.0, 0.0));
	float c = hash(i + vec2(0.0, 1.0));
	float d = hash(i + vec2(1.0, 1.0));
	return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
	float v = 0.0;
	float amp = 0.5;
	for (int i = 0; i < 4; i++) {
		v += amp * noise(p);
		p *= 2.07;
		amp *= 0.5;
	}
	return v;
}

void main() {
	float r = length(vPos.xy);
	float a = atan(vPos.y, vPos.x);
	float t = (r - uInner) / max(uOuter - uInner, 0.001);
	if (t < 0.0 || t > 1.0) discard;

	// Differential rotation: the inner edge spins noticeably faster.
	float speed = 1.7 / pow(max(r, 0.001), 1.15);
	float ang = a + uTime * uSpeed * speed * 2.4;

	float n = fbm(vec2(ang * 2.6, r * 1.35 - uTime * uSpeed * 0.12));
	float fine = fbm(vec2(ang * 9.0, r * 5.0 + uTime * uSpeed * 0.3));
	float streaks = pow(clamp(n * 0.75 + fine * 0.45, 0.0, 1.0), 1.7);

	float heat = pow(1.0 - t, 1.15);
	vec3 col = mix(uColorCold, uColorMid, smoothstep(0.15, 0.65, heat));
	col = mix(col, uColorHot, smoothstep(0.72, 1.0, heat));

	// Relativistic beaming: one side of the ring looks brighter.
	float beam = 0.7 + 0.5 * pow(0.5 + 0.5 * cos(a - 0.9), 2.2);

	float edge = smoothstep(0.0, 0.05, t) * (1.0 - smoothstep(0.5, 1.0, t));
	float alpha = (0.12 + 0.9 * streaks) * edge * (0.45 + 0.9 * heat) * beam * uAlpha;

	gl_FragColor = vec4(col * (0.35 + 0.85 * heat), alpha);
}
`;

export type BlackHoleTheme = "gargantua" | "pulsar" | "singularity";

export interface ThemeConfig {
	hot: [number, number, number];
	mid: [number, number, number];
	cold: [number, number, number];
	haloColor: number;
	speedMult: number;
}

export const THEMES: Record<BlackHoleTheme, ThemeConfig> = {
	gargantua: {
		hot: [1.0, 0.92, 0.82],
		mid: [1.0, 0.55, 0.18],
		cold: [0.55, 0.12, 0.05],
		haloColor: 0xdfe9ff,
		speedMult: 1.0,
	},
	pulsar: {
		hot: [0.90, 0.96, 1.0],
		mid: [0.18, 0.65, 1.0],
		cold: [0.04, 0.18, 0.55],
		haloColor: 0x8ad4ff,
		speedMult: 1.5,
	},
	singularity: {
		hot: [0.98, 0.92, 1.0],
		mid: [0.72, 0.22, 0.95],
		cold: [0.28, 0.04, 0.45],
		haloColor: 0xda96ff,
		speedMult: 0.8,
	},
};

function photonRingTexture(): THREE.Texture {
	const size = 256;
	const canvas = createEl("canvas");
	canvas.width = size;
	canvas.height = size;
	const ctx = canvas.getContext("2d");
	if (ctx) {
		const c = size / 2;
		const gradient = ctx.createRadialGradient(c, c, size * 0.3, c, c, size * 0.5);
		gradient.addColorStop(0.0, "rgba(255,255,255,0)");
		gradient.addColorStop(0.52, "rgba(170,210,255,0.04)");
		gradient.addColorStop(0.74, "rgba(255,244,224,0.65)");
		gradient.addColorStop(0.82, "rgba(140,190,255,0.22)");
		gradient.addColorStop(1.0, "rgba(255,255,255,0)");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, size, size);
	}
	const texture = new THREE.CanvasTexture(canvas);
	texture.colorSpace = THREE.SRGBColorSpace;
	return texture;
}

function starTexture(): THREE.Texture {
	const size = 64;
	const canvas = createEl("canvas");
	canvas.width = size;
	canvas.height = size;
	const ctx = canvas.getContext("2d");
	if (ctx) {
		const c = size / 2;
		const gradient = ctx.createRadialGradient(c, c, 0, c, c, c);
		gradient.addColorStop(0, "rgba(255,255,255,1)");
		gradient.addColorStop(0.32, "rgba(255,255,255,0.9)");
		gradient.addColorStop(1, "rgba(255,255,255,0)");
		ctx.fillStyle = gradient;
		ctx.fillRect(0, 0, size, size);
	}
	const texture = new THREE.CanvasTexture(canvas);
	texture.colorSpace = THREE.SRGBColorSpace;
	return texture;
}

function starfield(count: number, texture: THREE.Texture): THREE.Points {
	const positions = new Float32Array(count * 3);
	const colors = new Float32Array(count * 3);
	const color = new THREE.Color();
	for (let i = 0; i < count; i++) {
		const radius = 150 + Math.random() * 170;
		const theta = Math.random() * Math.PI * 2;
		const phi = Math.acos(2 * Math.random() - 1);
		positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
		positions[i * 3 + 1] = radius * Math.cos(phi) * 0.8;
		positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

		const tint = Math.random();
		if (tint > 0.9) color.setHex(0xffd9a0);
		else if (tint > 0.76) color.setHex(0xa9c8ff);
		else color.setHex(0xffffff);
		const dim = 0.45 + Math.random() * 0.55;
		colors[i * 3] = color.r * dim;
		colors[i * 3 + 1] = color.g * dim;
		colors[i * 3 + 2] = color.b * dim;
	}
	const geometry = new THREE.BufferGeometry();
	geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
	const material = new THREE.PointsMaterial({
		size: 2.4,
		sizeAttenuation: false,
		map: texture,
		vertexColors: true,
		transparent: true,
		opacity: 0.75,
		depthWrite: false,
		blending: THREE.AdditiveBlending,
	});
	const points = new THREE.Points(geometry, material);
	points.frustumCulled = false;
	return points;
}

export class BlackHole {
	readonly group = new THREE.Group();
	private readonly materials: THREE.ShaderMaterial[] = [];
	private readonly core: THREE.Mesh;
	private readonly halo: THREE.Sprite;
	private readonly stars: THREE.Points;
	private readonly haloTexture: THREE.Texture;
	private readonly starsTexture: THREE.Texture;
	private themeSpeedMult = 1.0;

	constructor(theme: BlackHoleTheme = "gargantua") {
		const tilt = new THREE.Group();
		tilt.rotation.x = 0.1;
		tilt.rotation.z = 0.16;
		this.group.add(tilt);

		const inner = 2.2;
		const outer = 11.5;

		const mainDisk = this.createDisk(inner, outer, 1, 1);
		tilt.add(mainDisk);

		const haze = this.createDisk(3, 22, 0.22, 0.55);
		haze.scale.setScalar(1.02);
		tilt.add(haze);

		this.core = new THREE.Mesh(
			new THREE.SphereGeometry(2.0, 48, 48),
			new THREE.MeshBasicMaterial({ color: 0x000000 }),
		);
		tilt.add(this.core);

		this.haloTexture = photonRingTexture();
		this.halo = new THREE.Sprite(
			new THREE.SpriteMaterial({
				map: this.haloTexture,
				color: 0xdfe9ff,
				transparent: true,
				opacity: 0.75,
				depthWrite: false,
				blending: THREE.AdditiveBlending,
			}),
		);
		this.halo.scale.setScalar(6.8);
		tilt.add(this.halo);

		this.starsTexture = starTexture();
		this.stars = starfield(2600, this.starsTexture);
		this.group.add(this.stars);

		this.setTheme(theme);
	}

	setTheme(themeName: string): void {
		const theme = (Object.prototype.hasOwnProperty.call(THEMES, themeName) ? themeName : "gargantua") as BlackHoleTheme;
		const cfg = THEMES[theme];
		this.themeSpeedMult = cfg.speedMult;
		for (const material of this.materials) {
			const hot = material.uniforms.uColorHot.value as THREE.Color;
			const mid = material.uniforms.uColorMid.value as THREE.Color;
			const cold = material.uniforms.uColorCold.value as THREE.Color;
			hot.setRGB(...cfg.hot);
			mid.setRGB(...cfg.mid);
			cold.setRGB(...cfg.cold);
		}
		this.halo.material.color.setHex(cfg.haloColor);
	}

	private createDisk(inner: number, outer: number, alpha: number, speed: number): THREE.Mesh {
		const geometry = new THREE.RingGeometry(inner, outer, 320, 8);
		const cfg = THEMES.gargantua;
		const material = new THREE.ShaderMaterial({
			vertexShader: DISK_VERTEX,
			fragmentShader: DISK_FRAGMENT,
			uniforms: {
				uTime: { value: 0 },
				uSpeed: { value: speed },
				uInner: { value: inner },
				uOuter: { value: outer },
				uAlpha: { value: alpha },
				uColorHot: { value: new THREE.Color(...cfg.hot) },
				uColorMid: { value: new THREE.Color(...cfg.mid) },
				uColorCold: { value: new THREE.Color(...cfg.cold) },
			},
			transparent: true,
			depthWrite: false,
			blending: THREE.AdditiveBlending,
			side: THREE.DoubleSide,
		});
		this.materials.push(material);
		const mesh = new THREE.Mesh(geometry, material);
		mesh.rotation.x = -Math.PI / 2;
		mesh.frustumCulled = false;
		return mesh;
	}

	update(time: number, speedMultiplier = 1): void {
		for (const material of this.materials) {
			material.uniforms.uTime.value = time * this.themeSpeedMult * speedMultiplier;
		}
		// The photon ring breathes a little, like a real lensing caustic.
		const pulse = 1 + Math.sin(time * 0.7) * 0.012;
		this.halo.scale.setScalar(6.8 * pulse);
	}

	dispose(): void {
		this.group.traverse((object) => {
			const mesh = object as THREE.Mesh;
			if (mesh.geometry) mesh.geometry.dispose();
			const material = mesh.material;
			if (Array.isArray(material)) material.forEach((m) => m.dispose());
			else if (material) material.dispose();
		});
		this.haloTexture.dispose();
		this.starsTexture.dispose();
	}
}
