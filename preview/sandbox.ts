import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { BlackHole } from "../src/scene/blackhole";
import { NoteCloud } from "../src/scene/notes";
import { InfallEffect } from "../src/scene/infall";
import { QuasarJets } from "../src/scene/jets";
import { layout3d } from "../src/data/layout";
import { hueToHex } from "../src/data/graph";
import type { GraphLink, GraphNode } from "../src/data/graph";

// Throwaway look-dev sandbox: renders candidate effects as frozen frames so the
// look can be judged side by side before any of it becomes production code.

const params = new URLSearchParams(location.search);
const num = (key: string, fallback: number): number => {
	const raw = params.get(key);
	if (raw === null) return fallback;
	const value = Number(raw);
	return Number.isFinite(value) ? value : fallback;
};
const mode = params.get("mode") || "plain";

let seed = num("seed", 20261118);
const rnd = (): number => {
	seed = (seed * 1664525 + 1013904223) % 4294967296;
	return seed / 4294967296;
};

const root = document.getElementById("root");
if (!root) throw new Error("no root");

const canvas = document.createElement("canvas");
canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
root.appendChild(canvas);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
renderer.setPixelRatio(1);
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.setClearColor(0x03040a, 1);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 600);

const blackhole = new BlackHole(params.get("theme") || "gargantua");
scene.add(blackhole.group);

const folders = ["Ideas", "Projects", "Tech", "Life", "Research", "Inbox"];
const nodes: GraphNode[] = [];
for (let i = 0; i < 420; i++) {
	const project = i % 19 === 0;
	nodes.push({
		path: `n${i}`,
		title: `Note ${i}`,
		kind: project ? "project" : "note",
		folder: folders[i % folders.length],
		degree: 0,
		recency: 1 - (i % 30) / 30,
		color: project ? hueToHex(0.085, 0.92, 0.66) : hueToHex((i % 7) / 7, 0.7, 0.66),
		size: 0.24 + (i % 9) * 0.025 + (project ? 0.1 : 0),
		x: 0,
		y: 0,
		z: 0,
	});
}
const links: GraphLink[] = [];
const seen = new Set<string>();
while (links.length < 520) {
	const a = Math.floor(rnd() * nodes.length);
	const b = Math.floor(rnd() * nodes.length);
	if (a === b) continue;
	const key = a < b ? `${a}:${b}` : `${b}:${a}`;
	if (seen.has(key)) continue;
	seen.add(key);
	links.push({ source: a, target: b });
	nodes[a].degree++;
	nodes[b].degree++;
}
layout3d(nodes, links, { minRadius: 16, maxRadius: 42 });

const notes = new NoteCloud(nodes, links, 1);
notes.group.rotation.y = Math.PI * (num("spin", 40) / 180);
scene.add(notes.group);

const time = num("t", 6);
blackhole.update(time);
notes.update(time);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
const bloom = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), num("bloom", 0.32), 0.35, 0.62);
composer.addPass(bloom);

function placeCamera(): void {
	const radius = num("r", 58);
	const azimuth = Math.PI * (num("az", 78) / 180);
	const elevation = Math.PI * (num("el", 18) / 180);
	camera.position.set(
		radius * Math.cos(elevation) * Math.sin(azimuth),
		radius * Math.sin(elevation),
		radius * Math.cos(elevation) * Math.cos(azimuth),
	);
	camera.lookAt(0, 0, 0);
}

/* ---------- candidate 1: infall transition ---------- */

function glowTexture(): THREE.Texture {
	const size = 64;
	const c = document.createElement("canvas");
	c.width = size;
	c.height = size;
	const ctx = c.getContext("2d");
	if (ctx) {
		const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
		g.addColorStop(0, "rgba(255,255,255,1)");
		g.addColorStop(0.35, "rgba(255,236,200,0.55)");
		g.addColorStop(1, "rgba(255,180,90,0)");
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, size, size);
	}
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	return tex;
}

function addInfall(): void {
	const phase = Math.min(1, Math.max(0, num("phase", 0.4)));

	// Start from a real project star in the cloud so the frame reads as "that note".
	const start = nodes.find((n) => n.kind === "project" && Math.hypot(n.x, n.y, n.z) > 26) || nodes[19];
	const r0 = Math.hypot(start.x, start.z);
	const theta0 = Math.atan2(start.z, start.x);
	const y0 = start.y;

	// Integrate so angular speed follows omega ~ 1/r^2: the star really does spin up
	// as it shrinks inward, which is what sells the transition in stills.
	const steps = 240;
	const positions: THREE.Vector3[] = [];
	const colors: THREE.Color[] = [];
	const gold = new THREE.Color(start.color);
	const hot = new THREE.Color("#fff0c8");
	const deep = new THREE.Color("#8f2a12");
	let theta = theta0;
	for (let i = 0; i <= steps; i++) {
		const u = (i / steps) * phase;
		const r = 2.4 + (r0 - 2.4) * Math.pow(1 - u, 1.45);
		theta += (900 / (r * r)) * (phase / steps);
		const y = y0 * Math.pow(1 - u, 1.9);
		positions.push(new THREE.Vector3(r * Math.cos(theta), y, r * Math.sin(theta)));

		const c = new THREE.Color().copy(gold).lerp(hot, Math.min(1, u * 2.2));
		if (u > 0.55) c.lerp(deep, ((u - 0.55) / 0.45) * 0.75);
		colors.push(c);
	}

	// WebGL ignores linewidth, so the trail is a string of additive glow sprites —
	// it stays visible against the disk, which a Line never was.
	const glow = glowTexture();
	for (let i = 0; i < positions.length; i += 5) {
		const u = i / steps;
		const sprite = new THREE.Sprite(
			new THREE.SpriteMaterial({
				map: glow,
				color: colors[i],
				blending: THREE.AdditiveBlending,
				transparent: true,
				opacity: 0.2 + 0.75 * u,
				depthWrite: false,
			}),
		);
		sprite.position.copy(positions[i]);
		const scale = 1.1 + 3.4 * Math.pow(u, 2.2);
		sprite.scale.set(scale, scale, 1);
		notes.group.add(sprite);
	}

	const head = positions[positions.length - 1];
	const headColor = colors[colors.length - 1];
	const stretch = 1 + 7 * Math.pow(phase, 3);
	const squash = Math.max(0.35, 1 - 0.4 * phase);
	const star = new THREE.Mesh(
		new THREE.SphereGeometry(0.85, 24, 18),
		new THREE.MeshBasicMaterial({ color: headColor }),
	);
	star.position.copy(head);
	star.rotation.y = -Math.atan2(head.z, head.x) + Math.PI / 2;
	star.scale.set(stretch, squash, squash);
	notes.group.add(star);

	const halo = new THREE.Sprite(
		new THREE.SpriteMaterial({ map: glow, color: headColor, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }),
	);
	halo.position.copy(head);
	const haloScale = 5.5 + 3 * phase;
	halo.scale.set(haloScale, haloScale, 1);
	notes.group.add(halo);

	// The crossing flash: an expanding shock ring plus a capped bloom lift, so the
	// moment reads as an event instead of washing out every other star in frame.
	if (phase > 0.72) {
		const k = (phase - 0.72) / 0.28;
		const ring = new THREE.Mesh(
			new THREE.RingGeometry(1.6 + 9 * k, 1.9 + 9 * k, 64),
			new THREE.MeshBasicMaterial({
				color: new THREE.Color("#ffe9c0"),
				blending: THREE.AdditiveBlending,
				transparent: true,
				opacity: 0.75 * (1 - k),
				side: THREE.DoubleSide,
				depthWrite: false,
			}),
		);
		ring.rotation.x = -Math.PI / 2;
		blackhole.group.add(ring);
		bloom.strength = 0.5 + 0.35 * k;
	}
}

/* ---------- candidate 2: quasar jets ---------- */

function jetTexture(soft: boolean): THREE.Texture {
	const size = 128;
	const c = document.createElement("canvas");
	c.width = size;
	c.height = size;
	const ctx = c.getContext("2d");
	if (ctx) {
		const g = ctx.createLinearGradient(0, 0, 0, size);
		g.addColorStop(0, soft ? "rgba(190,215,255,0.95)" : "rgba(215,235,255,1)");
		g.addColorStop(0.35, soft ? "rgba(150,170,255,0.35)" : "rgba(150,180,255,0.6)");
		g.addColorStop(1, "rgba(90,60,180,0)");
		ctx.fillStyle = g;
		ctx.fillRect(0, 0, size, size);
	}
	const tex = new THREE.CanvasTexture(c);
	tex.colorSpace = THREE.SRGBColorSpace;
	return tex;
}

function addJets(variant: number): void {
	const length = num("jetLen", 30);
	const tint = variant === 2 ? "#b78bff" : "#9ecbff";

	if (variant === 1 || variant === 2) {
		const radius = variant === 1 ? 1.1 : 3.4;
		const mat = new THREE.MeshBasicMaterial({
			map: jetTexture(variant === 2),
			transparent: true,
			opacity: variant === 1 ? 0.85 : 0.5,
			blending: THREE.AdditiveBlending,
			side: THREE.DoubleSide,
			depthWrite: false,
			color: tint,
		});
		for (const dir of [1, -1]) {
			const cone = new THREE.Mesh(new THREE.ConeGeometry(radius, length, 28, 1, true), mat);
			cone.position.y = (dir * length) / 2;
			if (dir < 0) cone.rotation.x = Math.PI;
			scene.add(cone);
			const core = new THREE.Mesh(
				new THREE.CylinderGeometry(variant === 1 ? 0.18 : 0.5, variant === 1 ? 0.18 : 0.9, length * 0.8, 16, 1, true),
				new THREE.MeshBasicMaterial({
					color: "#ffffff",
					transparent: true,
					opacity: variant === 1 ? 0.75 : 0.35,
					blending: THREE.AdditiveBlending,
					depthWrite: false,
				}),
			);
			core.position.y = (dir * length * 0.8) / 2;
			scene.add(core);
		}
		return;
	}

	// variant 3: particle beam
	const count = 900;
	const pos = new Float32Array(count * 3);
	const col = new Float32Array(count * 3);
	const base = new THREE.Color(tint);
	for (let i = 0; i < count; i++) {
		const dir = i % 2 === 0 ? 1 : -1;
		const along = Math.pow(rnd(), 0.65) * length;
		const swirl = along * 0.35 + rnd() * 6.283;
		const spread = (0.25 + along * 0.07) * (0.4 + rnd());
		pos[i * 3] = Math.cos(swirl) * spread;
		pos[i * 3 + 1] = dir * (along + 1.2);
		pos[i * 3 + 2] = Math.sin(swirl) * spread;
		const fade = 1 - along / length;
		col[i * 3] = base.r * fade + 0.35 * fade;
		col[i * 3 + 1] = base.g * fade + 0.3 * fade;
		col[i * 3 + 2] = base.b * fade;
	}
	const geo = new THREE.BufferGeometry();
	geo.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
	geo.setAttribute("color", new THREE.Float32BufferAttribute(col, 3));
	const sprite = document.createElement("canvas");
	sprite.width = 32;
	sprite.height = 32;
	const sctx = sprite.getContext("2d");
	if (sctx) {
		const g = sctx.createRadialGradient(16, 16, 0, 16, 16, 16);
		g.addColorStop(0, "rgba(255,255,255,1)");
		g.addColorStop(1, "rgba(255,255,255,0)");
		sctx.fillStyle = g;
		sctx.fillRect(0, 0, 32, 32);
	}
	scene.add(
		new THREE.Points(
			geo,
			new THREE.PointsMaterial({
				size: 0.9,
				map: new THREE.CanvasTexture(sprite),
				vertexColors: true,
				transparent: true,
				blending: THREE.AdditiveBlending,
				depthWrite: false,
			}),
		),
	);
}

/* ---------- candidate 3: gravitational lensing ---------- */

function addLensing(): void {
	const strength = num("lens", 0.06);
	const ring = num("lensRing", 0.11);
	const width = num("lensWidth", 0.075);
	const pass = new ShaderPass({
		uniforms: {
			tDiffuse: { value: null },
			uCenter: { value: new THREE.Vector2(0.5, 0.5) },
			uStrength: { value: strength },
			uRing: { value: ring },
			uWidth: { value: width },
			uAspect: { value: window.innerWidth / window.innerHeight },
		},
		vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
		fragmentShader: `
			uniform sampler2D tDiffuse; uniform vec2 uCenter; uniform float uStrength;
			uniform float uRing; uniform float uWidth; uniform float uAspect;
			varying vec2 vUv;
			void main(){
				vec2 d = vec2(vUv.x - uCenter.x, (vUv.y - uCenter.y) * uAspect);
				float dist = length(d);
				float w = exp(-pow((dist - uRing) / uWidth, 2.0));
				vec2 off = (dist > 0.0001 ? d / dist : vec2(0.0)) * uStrength * w;
				vec2 uv = vec2(vUv.x + off.x, vUv.y - off.y / uAspect);
				gl_FragColor = texture2D(tDiffuse, uv);
			}`,
	});
	composer.addPass(pass);
}

if (mode === "infall") addInfall();
if (mode === "jet") addJets(num("variant", 1));
if (mode === "lens") addLensing();

// Same frames, but driven by the production classes in src/scene — this is what
// proves the shipped effect actually renders, not just the sandbox copy.
if (mode === "prod-infall") {
	const phase = Math.min(1, Math.max(0, num("phase", 0.5)));
	const start = nodes.find((n) => n.kind === "project" && Math.hypot(n.x, n.y, n.z) > 26) || nodes[19];
	const duration = 0.72;
	const effect = new InfallEffect({ position: new THREE.Vector3(start.x, start.y, start.z), color: start.color }, duration);
	notes.group.add(effect.group);
	for (let i = 0; i < 144; i++) effect.update((phase * duration) / 144);
	bloom.strength = 0.5 + effect.bloomBoost * 0.15;
}
if (mode === "prod-jet") {
	const hub = nodes.reduce((best, node) => (node.degree > best.degree ? node : best), nodes[0]);
	const jets = new QuasarJets();
	jets.setPower(Math.min(1, Math.log2(1 + hub.degree) / 8));
	jets.setFeed(new THREE.Vector3(hub.x, hub.y, hub.z));
	notes.group.add(jets.group);
	jets.update(time);
}

placeCamera();
composer.addPass(new OutputPass());
composer.render();
requestAnimationFrame(() => {
	blackhole.update(time);
	notes.update(time);
	composer.render();
	document.title = "sandbox-ready";
});
