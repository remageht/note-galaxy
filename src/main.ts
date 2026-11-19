import { Plugin } from "obsidian";
import { NoteGalaxyView, VIEW_TYPE } from "./view/GraphView";
import { GalaxyDashboardView, VIEW_TYPE_DASHBOARD } from "./view/DashboardView";
import { DEFAULT_SETTINGS, NoteGalaxySettingTab, NoteGalaxySettings } from "./settings";
import { t, useLanguage } from "./i18n";

export default class NoteGalaxyPlugin extends Plugin {
	settings!: NoteGalaxySettings;
	private ribbonEl: HTMLElement | null = null;

	async onload(): Promise<void> {
		await this.loadSettings();
		useLanguage(this.settings.language);

		this.registerView(VIEW_TYPE, (leaf) => new NoteGalaxyView(leaf, this));
		this.registerView(VIEW_TYPE_DASHBOARD, (leaf) => new GalaxyDashboardView(leaf, this));

		this.ribbonEl = this.addRibbonIcon("orbit", t().ribbonOpen, () => {
			void this.activateView();
		});

		this.registerCommands();
		this.addSettingTab(new NoteGalaxySettingTab(this.app, this));
	}

	private registerCommands(): void {
		for (const id of ["open", "open-dashboard", "rebuild"]) {
			if (typeof this.removeCommand === "function") this.removeCommand(id);
		}

		this.addCommand({
			id: "open",
			name: t().commandOpen,
			callback: () => {
				void this.activateView();
			},
		});

		this.addCommand({
			id: "open-dashboard",
			name: t().commandOpenDashboard,
			callback: () => {
				void this.activateDashboardView();
			},
		});

		this.addCommand({
			id: "rebuild",
			name: t().commandRebuild,
			callback: () => {
				for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
					const view = leaf.view;
					if (view instanceof NoteGalaxyView) view.rebuild();
				}
				for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_DASHBOARD)) {
					const view = leaf.view;
					if (view instanceof GalaxyDashboardView) view.refresh();
				}
			},
		});
	}

	onunload(): void {
		// Leaves are intentionally left in place: Obsidian re-attaches views of
		// registered view types on update, and detaching here would lose them.
	}

	/** Switches the UI language without reloading the app. */
	applyLanguage(): void {
		useLanguage(this.settings.language);
		this.registerCommands();

		if (this.ribbonEl) {
			const label = t().ribbonOpen;
			this.ribbonEl.setAttribute("aria-label", label);
			this.ribbonEl.setAttribute("title", label);
		}

		this.applySettingsToViews();
	}

	async activateView(): Promise<void> {
		const { workspace } = this.app;
		let leaf = workspace.getLeavesOfType(VIEW_TYPE)[0];
		if (!leaf) {
			leaf = workspace.getLeaf("tab");
			await leaf.setViewState({ type: VIEW_TYPE, active: true });
		}
		await workspace.revealLeaf(leaf);
	}

	async activateDashboardView(): Promise<void> {
		const { workspace } = this.app;
		let leaf = workspace.getLeavesOfType(VIEW_TYPE_DASHBOARD)[0];
		if (!leaf) {
			leaf = workspace.getRightLeaf(false) ?? workspace.getLeaf("tab");
			await leaf.setViewState({ type: VIEW_TYPE_DASHBOARD, active: true });
		}
		await workspace.revealLeaf(leaf);
	}

	applySettingsToViews(): void {
		for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
			const view = leaf.view;
			if (view instanceof NoteGalaxyView) view.applySettings();
		}
		for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_DASHBOARD)) {
			const view = leaf.view;
			if (view instanceof GalaxyDashboardView) view.relocalize();
		}
	}

	async loadSettings(): Promise<void> {
		const saved: unknown = await this.loadData();
		this.settings = Object.assign({}, DEFAULT_SETTINGS, saved);
	}

	async saveSettings(): Promise<void> {
		await this.saveData(this.settings);
	}
}
