import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { BlackHole } from "../src/scene/blackhole";
import { NoteCloud } from "../src/scene/notes";
import { layout3d } from "../src/data/layout";
import { hueToHex } from "../src/data/graph";
import type { GraphLink, GraphNode } from "../src/data/graph";

// Dev-only render harness for directory screenshots: deterministic graph, camera
// and animation time come from the query string so a headless capture is repeatable.

const params = new URLSearchParams(location.search);
const num = (key: string, fallback: number): number => {
	const raw = params.get(key);
	if (raw === null) return fallback;
	const value = Number(raw);
	return Number.isFinite(value) ? value : fallback;
};

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

const blackhole = new BlackHole();
scene.add(blackhole.group);

const nodeCount = num("nodes", 420);
const folders = ["Ideas", "Projects", "Tech", "Life", "Research", "Inbox"];
const nodes: GraphNode[] = [];
for (let i = 0; i < nodeCount; i++) {
	const project = i % 19 === 0;
	const folder = folders[i % folders.length];
	nodes.push({
		path: `n${i}`,
		title: `Note ${i}`,
		kind: project ? "project" : "note",
		folder,
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
while (links.length < Math.round(nodeCount * 1.24)) {
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

const notes = num("cloud", 1) === 1 ? new NoteCloud(nodes, links, 1) : null;
if (notes) {
	notes.group.rotation.y = Math.PI * (num("spin", 40) / 180);
	scene.add(notes.group);
}

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(
	new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), num("bloom", 0.5), 0.4, 0.42),
);
composer.addPass(new OutputPass());

const radius = num("r", 74);
const azimuth = Math.PI * (num("az", 5) / 180);
const elevation = Math.PI * (num("el", 24) / 180);
camera.position.set(
	radius * Math.cos(elevation) * Math.sin(azimuth),
	radius * Math.sin(elevation),
	radius * Math.cos(elevation) * Math.cos(azimuth),
);
camera.lookAt(0, 0, 0);

const time = num("t", 6);
const render = (): void => {
	blackhole.update(time);
	if (notes) notes.update(time);
	composer.render();
};
render();
requestAnimationFrame(() => {
	render();
	document.title = "shot-ready";
});
