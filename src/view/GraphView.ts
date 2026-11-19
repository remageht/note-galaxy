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
import { InfallEffect } from "../scene/infall";
import { QuasarJets } from "../scene/jets";
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
	private jets: QuasarJets | null = null;
	private infall: InfallEffect | null = null;
	private infallPath: string | null = null;
	private noticeEl: HTMLDivElement | null = null;
	private quality = 1;
	private activityLayoutApplied = true;
	private hubIndex = -1;

	private readonly handleContextLost = (event: Event): void => {
		event.preventDefault();
		window.cancelAnimationFrame(this.raf);
		this.root?.addClass("is-context-lost");
	};

	private readonly handleContextRestored = (): void => {
		this.restoreContext();
	};
	private frameAvg = 0;
	private framesSinceCheck = 0;

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

		this.root = this.contentEl.createDiv({ cls: "ng-root" });

		this.canvas = this.root.createEl("canvas", { cls: "ng-canvas" });

		this.labelLayer = this.root.createDiv({ cls: "ng-labels" });

		this.hoverEl = this.labelLayer.createDiv({ cls: "ng-label ng-label-hover is-hidden" });

		this.noticeEl = this.root.createDiv({ cls: "ng-notice", text: t().contextLost });

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

		this.blackhole = new BlackHole(this.plugin.settings.coreTheme);
		this.scene.add(this.blackhole.group);

		this.jets = new QuasarJets();
		this.scene.add(this.jets.group);

		this.composer = new EffectComposer(renderer);
		this.composer.addPass(new RenderPass(this.scene, this.camera));
		this.bloom = new UnrealBloomPass(
			new THREE.Vector2(1, 1),
			this.plugin.settings.bloom,
			0.35,
			0.62,
		);
		this.composer.addPass(this.bloom);
		this.composer.addPass(new OutputPass());

		this.resize();
	}

	private buildToolbar(): void {
		const toolbar = this.root.createDiv({ cls: "ng-toolbar" });
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
	}

	private attachEvents(): void {
		this.registerDomEvent(this.canvas, "pointermove", (event) => this.handlePointerMove(event));
		this.registerDomEvent(this.canvas, "pointerdown", (event) => {
			this.downPoint = { x: event.clientX, y: event.clientY };
		});
		this.registerDomEvent(this.canvas, "pointerup", (event) => this.handlePointerUp(event));
		this.registerDomEvent(this.canvas, "pointerleave", () => {
			this.notes?.setHovered(-1);
			this.canvas.toggleClass("is-hover-node", false);
		});

		this.canvas.addEventListener("webglcontextlost", this.handleContextLost);
		this.canvas.addEventListener("webglcontextrestored", this.handleContextRestored);

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
		layout3d(graph.nodes, graph.links, {
			minRadius: 16,
			maxRadius: 42,
			activityBias: this.plugin.settings.activityLayout ? 1 : 0,
		});
		this.lastGraph = graph;
		this.activityLayoutApplied = this.plugin.settings.activityLayout;
		this.hubIndex = -1;
		for (let i = 0; i < graph.nodes.length; i++) {
			if (this.hubIndex < 0 || graph.nodes[i].degree > graph.nodes[this.hubIndex].degree) this.hubIndex = i;
		}

		if (this.notes) {
			this.scene.remove(this.notes.group);
			this.notes.dispose();
			this.notes = null;
		}

		this.notes = new NoteCloud(graph.nodes, graph.links, this.plugin.settings.nodeScale);
		this.notes.setFolderFilter(this.activeFolder);
		this.scene.add(this.notes.group);

		this.updateJets();

		this.buildLabels();
		this.refreshDashboard(graph);
	}

	/** The best-connected note powers the quasar; below a few links it stays dark. */
	private updateJets(): void {
		if (!this.jets) return;
		const graph = this.lastGraph;
		if (!this.plugin.settings.quasar || !graph || graph.nodes.length === 0) {
			this.jets.setPower(0);
			this.jets.setFeed(null);
			return;
		}

		let hubIndex = this.hubIndex;
		if (hubIndex < 0 || hubIndex >= graph.nodes.length) hubIndex = 0;
		const hub = graph.nodes[hubIndex];
		if (!hub || hub.degree < 3) {
			this.jets.setPower(0);
			this.jets.setFeed(null);
			return;
		}

		this.jets.setPower(Math.min(1, Math.log2(1 + hub.degree) / 8));
		if (this.notes) {
			this.notes.worldPosition(hubIndex, this.time, this.tmpVec);
			this.jets.setFeed(this.tmpVec);
		} else {
			this.jets.setFeed(new THREE.Vector3(hub.x, hub.y, hub.z));
		}
	}

	private prefersReducedMotion(): boolean {
		return typeof window.matchMedia === "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}

	/**
	 * A lost WebGL context cannot be reused by the old renderer, so every GPU-side
	 * object is dropped and the scene is built again from the same settings.
	 */
	private restoreContext(): void {
		if (!this.root) return;
		window.cancelAnimationFrame(this.raf);
		this.infall?.dispose();
		this.infall = null;
		this.infallPath = null;
		this.jets?.dispose();
		this.jets = null;
		this.notes?.dispose();
		this.notes = null;
		this.controls.dispose();
		this.composer.dispose();
		this.blackhole.dispose();
		this.renderer.dispose();

		this.quality = 1;
		this.initScene();
		this.rebuild();
		this.startLoop();
		this.root.removeClass("is-context-lost");
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
			const label = this.labelLayer.createDiv({ cls: "ng-label", text: this.notes.nodes[index].title });
			this.labels.push({ index, el: label });
		}
	}

	private refreshDashboard(graph: VaultGraph): void {
		const recent = [...this.app.vault.getMarkdownFiles()]
			.sort((a, b) => b.stat.mtime - a.stat.mtime)
			.slice(0, 8)
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
			hubs: graph.topHubs,
			recent,
		});
	}

	/** Steps down to a cheaper frame when the view cannot hold ~30 fps, and back up when it can. */
	private trackFrameRate(delta: number): void {
		if (!this.plugin.settings.adaptiveQuality) {
			if (this.quality !== 1) this.setQuality(1);
			return;
		}
		this.frameAvg = this.frameAvg === 0 ? delta : this.frameAvg * 0.92 + delta * 0.08;
		if (++this.framesSinceCheck < 90) return;
		this.framesSinceCheck = 0;
		if (this.frameAvg > 0.033 && this.quality > 0.5) this.setQuality(0.5);
		else if (this.frameAvg < 0.02 && this.quality < 1) this.setQuality(1);
	}

	private setQuality(level: number): void {
		this.quality = level;
		this.frameAvg = 0;
		this.framesSinceCheck = 0;
		this.renderer.setPixelRatio(level < 1 ? 1 : Math.min(window.devicePixelRatio || 1, 1.75));
		this.resize();
	}

	private startLoop(): void {
		this.clock.start();
		const tick = (): void => {
			this.raf = window.requestAnimationFrame(tick);
			const delta = Math.min(this.clock.getDelta(), 0.08);
			if (document.hidden) return;

			this.time += delta;
			this.blackhole.update(this.time, this.plugin.settings.diskSpeed);
			if (this.notes) {
				this.notes.group.rotation.y += delta * this.plugin.settings.orbitSpeed * 0.06;
				this.notes.update(this.time);
				this.notes.group.updateMatrixWorld();
				this.updateLabels();
			}
			if (this.infall) {
				this.infall.update(delta);
				if (this.infall.takeArrive() && this.infallPath) this.openNote(this.infallPath);
				if (this.infall.finished) {
					this.notes?.group.remove(this.infall.group);
					this.infall.dispose();
					this.infall = null;
					this.infallPath = null;
				}
			}
			if (this.jets) {
				this.jets.update(this.time);
				if (this.plugin.settings.quasar && this.notes && this.lastGraph) {
					this.updateJets();
				}
			}
			this.bloom.strength =
				this.plugin.settings.bloom * this.quality + (this.infall ? this.infall.bloomBoost * 0.15 : 0);
			this.bloom.enabled = this.quality >= 1 && this.bloom.strength > 0.01;
			this.trackFrameRate(delta);
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
				item.el.setCssStyles({ opacity: "0" });
				continue;
			}
			const x = (ndc.x * 0.5 + 0.5) * width;
			const y = (-ndc.y * 0.5 + 0.5) * height;
			item.el.setCssStyles({
				transform: `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`,
				opacity: String(Math.max(0.18, Math.min(0.95, 1.3 - distance / 85))),
			});
		}

		const hovered = this.notes.getHovered();
		if (hovered < 0) {
			this.hoverEl.addClass("is-hidden");
			return;
		}
		const world = this.notes.worldPosition(hovered, this.time, this.tmpVec);
		const ndc = this.tmpNdc.copy(world).project(this.camera);
		if (ndc.z > 1 || ndc.z < -1) {
			this.hoverEl.addClass("is-hidden");
			return;
		}
		const x = (ndc.x * 0.5 + 0.5) * width;
		const y = (-ndc.y * 0.5 + 0.5) * height;
		this.hoverEl.textContent = this.notes.nodes[hovered].title;
		this.hoverEl.setCssStyles({
			transform: `translate(-50%, -50%) translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`,
		});
		this.hoverEl.removeClass("is-hidden");
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
		this.canvas.toggleClass("is-hover-node", hovered >= 0);
	}

	private handlePointerUp(event: PointerEvent): void {
		const start = this.downPoint;
		this.downPoint = null;
		if (!start || !this.notes) return;
		if (Math.hypot(event.clientX - start.x, event.clientY - start.y) > 5) return;
		const hovered = this.notes.getHovered();
		if (hovered < 0) return;
		const node = this.notes.nodes[hovered];
		if (!node) return;

		if (this.plugin.settings.transition && !this.prefersReducedMotion() && !this.infall) {
			this.infall = new InfallEffect({ position: new THREE.Vector3(node.x, node.y, node.z), color: node.color });
			this.notes.group.add(this.infall.group);
			this.infallPath = node.path;
			return;
		}
		this.openNote(node.path);
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
		this.blackhole?.setTheme(this.plugin.settings.coreTheme);
		if (this.bloom) {
			this.bloom.strength = this.plugin.settings.bloom * this.quality;
			this.bloom.enabled = this.quality >= 1 && this.bloom.strength > 0.01;
		}
		this.notes?.setNodeScale(this.plugin.settings.nodeScale);
		this.dashboard.setVisible(this.plugin.settings.showDashboard);
		this.dashboard.relocalize();
		if (this.noticeEl) this.noticeEl.textContent = t().contextLost;
		if (this.lastGraph) this.refreshDashboard(this.lastGraph);
		this.updateJets();
		if (this.lastGraph && this.activityLayoutApplied !== this.plugin.settings.activityLayout) this.rebuild();

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
		this.canvas?.removeEventListener("webglcontextlost", this.handleContextLost);
		this.canvas?.removeEventListener("webglcontextrestored", this.handleContextRestored);
		if (this.rebuildTimer) window.clearTimeout(this.rebuildTimer);
		this.resizeObserver?.disconnect();
		this.resizeObserver = null;
		this.controls?.dispose();
		this.composer?.dispose();
		this.notes?.dispose();
		this.notes = null;
		this.infall?.dispose();
		this.infall = null;
		this.infallPath = null;
		this.jets?.dispose();
		this.jets = null;
		this.blackhole?.dispose();
		this.dashboard?.destroy();
		this.renderer?.dispose();
		this.renderer?.forceContextLoss();
		this.contentEl.removeClass("ng-host");
		this.contentEl.empty();
	}
}
