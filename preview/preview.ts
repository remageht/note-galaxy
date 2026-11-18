import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { BlackHole } from "../src/scene/blackhole";
import { NoteCloud } from "../src/scene/notes";
import { layout3d } from "../src/data/layout";
import { hueToHex } from "../src/data/graph";
import type { GraphLink, GraphNode } from "../src/data/graph";

const root = document.getElementById("root");
if (!root) throw new Error("no root");

const canvas = document.createElement("canvas");
canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
root.appendChild(canvas);

const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
renderer.setSize(window.innerWidth, window.innerHeight, false);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;
renderer.setClearColor(0x03040a, 1);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 600);
camera.position.set(6, 30, 68);

const blackhole = new BlackHole();
scene.add(blackhole.group);

const folders = ["Ideas", "Projects", "Tech", "Life", "Research", "Inbox"];
const nodes: GraphNode[] = [];
for (let i = 0; i < 420; i++) {
	const project = i % 19 === 0;
	const folder = folders[i % folders.length];
	nodes.push({
		path: `n${i}`,
		title: `Заметка ${i}`,
		kind: project ? "project" : "note",
		folder,
		degree: 0,
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
	const a = Math.floor(Math.random() * nodes.length);
	const b = Math.floor(Math.random() * nodes.length);
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
notes.group.rotation.y = 0.7;
scene.add(notes.group);

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));
composer.addPass(new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 0.5, 0.4, 0.42));
composer.addPass(new OutputPass());

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
controls.target.set(0, 0, 0);
controls.update();

let time = 0;
const frame = (): void => {
	requestAnimationFrame(frame);
	time += 1 / 60;
	blackhole.update(time);
	notes.update(time);
	notes.group.rotation.y += 0.0004;
	controls.update();
	composer.render();
};
frame();

window.addEventListener("resize", () => {
	renderer.setSize(window.innerWidth, window.innerHeight, false);
	composer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
});

(window as unknown as { previewReady: boolean }).previewReady = true;
