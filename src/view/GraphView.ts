import { ItemView, TFile, WorkspaceLeaf } from "obsidian";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import type NoteGalaxyPlugin from "../main";
import { buildGraph, VaultGraph } from "../data/graph";
import { layout3d } from "../data/layout";
import { BlackHole } from "../scene/blackhole";
import { NoteCloud } from "../scene/notes";
import { Dashboard, iconButton } from "../ui/dashboard";
import { t } from "../i18n";

export const VIEW_TYPE = "note-galaxy-view";

const MAX_LABELS = 60;

function relativeTime(timestamp: number): string {
	const s = t();
	const diff = Date.now() - timestamp;
	const minutes = Math.floor(diff / 60_000);
	if (minutes < 1) return s.whenJustNow;
	if (minutes < 60) return s.whenMinutes(minutes);
	const hours = Math.floor(minutes / 60);
	if (hours < 24) return s.whenHours(hours);
	const days = Math.floor(hours / 24);
	if (days < 30) return s.whenDays(days);
	return s.whenMonths(Math.floor(days / 30));
}

export class NoteGalaxyView extends ItemView {
	private readonly plugin: NoteGalaxyPlugin;

	private root!: HTMLDivElement;
	private canvas!: HTMLCanvasElement;
	private labelLayer!: HTMLDivElement;
	private hoverEl!: HTMLDivElement;

	private renderer!: THREE.WebGLRenderer;
	private composer!: EffectComposer;
	private bloom!: UnrealBloomPass;
	private scene!: THREE.Scene;
	private camera!: THREE.PerspectiveCamera;
	private controls!: OrbitControls;
	private blackhole!: BlackHole;
	private notes: NoteCloud | null = null;

	private dashboard!: Dashboard;
	private labels: { index: number; el: HTMLDivElement }[] = [];
	private toolbarButtons: { el: HTMLButtonElement; title: () => string }[] = [];
	private activeFolder: string | null = null;
	private lastGraph: VaultGraph | null = null;

	private readonly clock = new THREE.Clock();
	private readonly raycaster = new THREE.Raycaster();
	private readonly pointer = new THREE.Vector2();
	private readonly tmpVec = new THREE.Vector3();
	private readonly tmpNdc = new THREE.Vector3();

	private time = 0;
	private raf = 0;
	private lastRaycast = 0;
	private rebuildTimer = 0;
	private downPoint: { x: number; y: number } | null = null;
	private resizeObserver: ResizeObserver | null = null;

	constructor(leaf: WorkspaceLeaf, plugin: NoteGalaxyPlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getViewType(): string {
		return VIEW_TYPE;
	}

	getDisplayText(): string {
		return t().viewTitle;
	}

	getIcon(): string {
		return "orbit";
	}

	async onOpen(): Promise<void> {
		this.contentEl.empty();
		this.contentEl.addClass("ng-host");

		this.root = document.createElement("div");
		this.root.className = "ng-root";
		this.contentEl.appendChild(this.root);

		this.canvas = document.createElement("canvas");
		this.canvas.className = "ng-canvas";
		this.root.appendChild(this.canvas);

		this.labelLayer = document.createElement("div");
		this.labelLayer.className = "ng-labels";
		this.root.appendChild(this.labelLayer);

		this.hoverEl = document.createElement("div");
		this.hoverEl.className = "ng-label ng-label-hover";
		this.hoverEl.style.opacity = "0";
		this.labelLayer.appendChild(this.hoverEl);

		this.dashboard = new Dashboard(this.root, {
			onOpenNote: (path) => this.openNote(path),
			onRefresh: () => this.rebuild(),
			onReset: () => this.resetView(),
			onToggle: () => this.toggleDashboard(),
			onFolder: (folder) => {
				this.activeFolder = folder;
				this.notes?.setFolderFilter(folder);
			},
		});
		this.dashboard.setVisible(this.plugin.settings.showDashboard);

		this.buildToolbar();
		this.initScene();
		this.rebuild();
		this.attachEvents();
		this.startLoop();
	}

	private initScene(): void {
		const renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
			powerPreference: "high-performance",
		});
		renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
		renderer.toneMapping = THREE.ACESFilmicToneMapping;
		renderer.toneMappingExposure = 1.0;
		renderer.setClearColor(0x03040a, 1);
		this.renderer = renderer;

		this.scene = new THREE.Scene();
		this.camera = new THREE.PerspectiveCamera(55, 1, 0.1, 600);
		this.camera.position.set(6, 30, 68);

		this.controls = new OrbitControls(this.camera, this.canvas);
		this.controls.enableDamping = true;
		this.controls.dampingFactor = 0.06;
		this.controls.enablePan = false;
		this.controls.rotateSpeed = 0.55;
		this.controls.zoomSpeed = 0.7;
		this.controls.minDistance = 9;
		this.controls.maxDistance = 130;
		this.controls.target.set(0, 0, 0);

		this.blackhole = new BlackHole();
		this.scene.add(this.blackhole.group);

		this.composer = new EffectComposer(renderer);
		this.composer.addPass(new RenderPass(this.scene, this.camera));
		this.bloom = new UnrealBloomPass(
			new THREE.Vector2(1, 1),
			this.plugin.settings.bloom,
			0.4,
			0.42,
		);
		this.composer.addPass(this.bloom);
		this.composer.addPass(new OutputPass());

		this.resize();
	}

	private buildToolbar(): void {
		const toolbar = document.createElement("div");
		toolbar.className = "ng-toolbar";
		const tools: [string, () => string, () => void][] = [
			["refresh-cw", () => t().toolbarRebuild, () => this.rebuild()],
			["crosshair", () => t().toolbarReset, () => this.resetView()],
			["panel-left", () => t().toolbarDashboard, () => this.toggleDashboard()],
		];
		for (const [icon, title, action] of tools) {
			const button = iconButton(icon, title(), action);
			this.toolbarButtons.push({ el: button, title });
			toolbar.appendChild(button);
		}
		this.root.appendChild(toolbar);
	}

	private attachEvents(): void {
		this.registerDomEvent(this.canvas, "pointermove", (event) => this.handlePointerMove(event));
		this.registerDomEvent(this.canvas, "pointerdown", (event) => {
			this.downPoint = { x: event.clientX, y: event.clientY };
		});
		this.registerDomEvent(this.canvas, "pointerup", (event) => this.handlePointerUp(event));
		this.registerDomEvent(this.canvas, "pointerleave", () => {
			this.notes?.setHovered(-1);
			this.canvas.style.cursor = "grab";
		});

		this.resizeObserver = new ResizeObserver(() => this.resize());
		this.resizeObserver.observe(this.root);

		this.registerEvent(
			this.app.metadataCache.on("resolved", () => {
				if (this.rebuildTimer) window.clearTimeout(this.rebuildTimer);
				this.rebuildTimer = window.setTimeout(() => {
					this.rebuildTimer = 0;
					this.rebuild();
				}, 2500);
			}),
		);
	}

	private resize(): void {
		if (!this.root) return;
		const width = this.root.clientWidth || 800;
		const height = this.root.clientHeight || 600;
		this.renderer.setSize(width, height, false);
		this.composer.setSize(width, height);
		this.camera.aspect = width / height;
		this.camera.updateProjectionMatrix();
	}

	rebuild(): void {
		if (!this.scene) return;
		const graph = buildGraph(this.app, this.plugin.settings.maxNodes);
		layout3d(graph.nodes, graph.links, { minRadius: 16, maxRadius: 42 });
		this.lastGraph = graph;

		if (this.notes) {
			this.scene.remove(this.notes.group);
			this.notes.dispose();
			this.notes = null;
		}

		this.notes = new NoteCloud(graph.nodes, graph.links, this.plugin.settings.nodeScale);
		this.notes.setFolderFilter(this.activeFolder);
		this.scene.add(this.notes.group);

		this.buildLabels();
		this.refreshDashboard(graph);
	}

	private buildLabels(): void {
		for (const item of this.labels) item.el.remove();
		this.labels = [];
		if (!this.notes || !this.plugin.settings.showLabels) return;

		const ranked = this.notes.nodes
			.map((node, index) => ({ index, degree: node.degree }))
			.sort((a, b) => b.degree - a.degree)
			.slice(0, MAX_LABELS);

		for (const { index } of ranked) {
			const label = document.createElement("div");
			label.className = "ng-label";
			label.textContent = this.notes.nodes[index].title;
			this.labelLayer.appendChild(label);
			this.labels.push({ index, el: label });
		}
	}

	private refreshDashboard(graph: VaultGraph): void {
		const recent = [...this.app.vault.getMarkdownFiles()]
			.sort((a, b) => b.stat.mtime - a.stat.mtime)
			.slice(0, 6)
			.map((file) => ({
				title: file.basename,
				path: file.path,
				when: relativeTime(file.stat.mtime),
			}));

		this.dashboard.update({
			userName: this.plugin.settings.userName,
			notes: graph.totalNotes,
			projects: graph.totalProjects,
			links: graph.totalLinks,
			tags: graph.totalTags,
			folders: graph.folders,
			recent,
		});
	}

	private startLoop(): void {
		this.clock.start();
		const tick = (): void => {
			this.raf = window.requestAnimationFrame(tick);
			const delta = Math.min(this.clock.getDelta(), 0.08);
			if (document.hidden) return;

			this.time += delta;
			this.blackhole.update(this.time);
			if (this.notes) {
				this.notes.group.rotation.y += delta * this.plugin.settings.orbitSpeed * 0.06;
				this.notes.update(this.time);
				this.notes.group.updateMatrixWorld();
				this.updateLabels();
			}
			this.controls.update();
			this.composer.render();
		};
		this.raf = window.requestAnimationFrame(tick);
	}

	private updateLabels(): void {
		if (!this.notes) return;
		const width = this.canvas.clientWidth;
		const height = this.canvas.clientHeight;
		if (width === 0 || height === 0) return;
		const cameraPosition = this.camera.position;

		for (const item of this.labels) {
			const world = this.notes.worldPosition(item.index, this.time, this.tmpVec);
			const distance = world.distanceTo(cameraPosition);
			const ndc = this.tmpNdc.copy(world).project(this.camera);
			if (ndc.z > 1 || ndc.z < -1 || distance > 90) {
				item.el.style.opacity = "0";
				continue;
			}
			const x = (ndc.x * 0.5 + 0.5) * width;
			const y = (-ndc.y * 0.5 + 0.5) * height;
			item.el.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
			item.el.style.opacity = String(Math.max(0.18, Math.min(0.95, 1.3 - distance / 85)));
		}

		const hovered = this.notes.getHovered();
		if (hovered < 0) {
			this.hoverEl.style.opacity = "0";
			return;
		}
		const world = this.notes.worldPosition(hovered, this.time, this.tmpVec);
		const ndc = this.tmpNdc.copy(world).project(this.camera);
		if (ndc.z > 1 || ndc.z < -1) {
			this.hoverEl.style.opacity = "0";
			return;
		}
		const x = (ndc.x * 0.5 + 0.5) * width;
		const y = (-ndc.y * 0.5 + 0.5) * height;
		this.hoverEl.textContent = this.notes.nodes[hovered].title;
		this.hoverEl.style.transform = `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`;
		this.hoverEl.style.opacity = "1";
	}

	private handlePointerMove(event: PointerEvent): void {
		const now = performance.now();
		if (now - this.lastRaycast < 45) return;
		this.lastRaycast = now;
		if (!this.notes) return;

		const rect = this.canvas.getBoundingClientRect();
		this.pointer.set(
			((event.clientX - rect.left) / rect.width) * 2 - 1,
			-((event.clientY - rect.top) / rect.height) * 2 + 1,
		);
		this.raycaster.setFromCamera(this.pointer, this.camera);
		const hits = this.raycaster.intersectObject(this.notes.mesh, false);
		const instanceId = hits.length > 0 ? hits[0].instanceId : undefined;
		const hovered = typeof instanceId === "number" ? instanceId : -1;
		this.notes.setHovered(hovered);
		this.canvas.style.cursor = hovered >= 0 ? "pointer" : "grab";
	}

	private handlePointerUp(event: PointerEvent): void {
		const start = this.downPoint;
		this.downPoint = null;
		if (!start || !this.notes) return;
		if (Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5) return;
		const hovered = this.notes.getHovered();
		if (hovered < 0) return;
		const node = this.notes.nodes[hovered];
		if (node) this.openNote(node.path);
	}

	private openNote(path: string): void {
		const file = this.app.vault.getAbstractFileByPath(path);
		if (file instanceof TFile) void this.app.workspace.getLeaf(false).openFile(file);
	}

	private resetView(): void {
		this.camera.position.set(6, 30, 68);
		this.controls.target.set(0, 0, 0);
		this.controls.update();
	}

	private toggleDashboard(): void {
		const visible = !this.dashboard.isVisible();
		this.dashboard.setVisible(visible);
		this.plugin.settings.showDashboard = visible;
		void this.plugin.saveSettings();
	}

	applySettings(): void {
		if (!this.root) return;
		if (this.bloom) this.bloom.strength = this.plugin.settings.bloom;
		this.notes?.setNodeScale(this.plugin.settings.nodeScale);
		this.dashboard.setVisible(this.plugin.settings.showDashboard);
		this.dashboard.relocalize();
		if (this.lastGraph) this.refreshDashboard(this.lastGraph);

		for (const item of this.toolbarButtons) {
			const label = item.title();
			item.el.title = label;
			item.el.setAttribute("aria-label", label);
		}

		this.buildLabels();
		const leaf = this.leaf as unknown as { updateHeader?: () => void };
		leaf.updateHeader?.();
	}

	async onClose(): Promise<void> {
		window.cancelAnimationFrame(this.raf);
		if (this.rebuildTimer) window.clearTimeout(this.rebuildTimer);
		this.resizeObserver?.disconnect();
		this.resizeObserver = null;
		this.notes?.dispose();
		this.notes = null;
		this.blackhole?.dispose();
		this.dashboard?.destroy();
		this.renderer?.dispose();
		this.renderer?.forceContextLoss();
		this.contentEl.removeClass("ng-host");
		this.contentEl.empty();
	}
}
