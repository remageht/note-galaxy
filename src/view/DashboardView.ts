import { ItemView, TFile, WorkspaceLeaf } from "obsidian";
import type NoteGalaxyPlugin from "../main";
import { Dashboard } from "../ui/dashboard";
import { buildGraph, VaultGraph } from "../data/graph";
import { NoteGalaxyView, relativeTime, VIEW_TYPE } from "./GraphView";
import { t } from "../i18n";

export const VIEW_TYPE_DASHBOARD = "note-galaxy-dashboard";

export class GalaxyDashboardView extends ItemView {
	private readonly plugin: NoteGalaxyPlugin;
	private dashboard!: Dashboard;

	constructor(leaf: WorkspaceLeaf, plugin: NoteGalaxyPlugin) {
		super(leaf);
		this.plugin = plugin;
	}

	getViewType(): string {
		return VIEW_TYPE_DASHBOARD;
	}

	getDisplayText(): string {
		return t().dashboardTitle;
	}

	getIcon(): string {
		return "layout-dashboard";
	}

	async onOpen(): Promise<void> {
		this.contentEl.empty();
		this.contentEl.addClass("ng-host", "ng-dashboard-host");

		this.dashboard = new Dashboard(this.contentEl, {
			onOpenNote: (path) => this.handleNoteClick(path),
			onRefresh: () => this.refresh(),
			onReset: () => this.focusGraphView(),
			onToggle: () => {},
			onFolder: (folder) => this.filterFolderInGraph(folder),
		});

		this.dashboard.setVisible(true);
		this.refresh();

		this.registerEvent(this.app.metadataCache.on("resolved", () => this.refresh()));
	}

	private handleNoteClick(path: string): void {
		if (path.startsWith("tag:")) {
			this.highlightTagInGraph(path);
			return;
		}
		const file = this.app.vault.getAbstractFileByPath(path);
		if (file instanceof TFile) {
			this.focusNodeInGraph(path);
			void this.app.workspace.getLeaf(false).openFile(file);
		}
	}

	private focusGraphView(): void {
		for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
			if (leaf.view instanceof NoteGalaxyView) {
				leaf.view.resetView();
			}
		}
	}

	private focusNodeInGraph(path: string): void {
		for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
			if (leaf.view instanceof NoteGalaxyView) {
				leaf.view.focusNode(path);
			}
		}
	}

	private filterFolderInGraph(folder: string | null): void {
		for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
			if (leaf.view instanceof NoteGalaxyView) {
				leaf.view.setActiveFolder(folder);
			}
		}
	}

	private highlightTagInGraph(path: string): void {
		for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE)) {
			if (leaf.view instanceof NoteGalaxyView) {
				leaf.view.focusNode(path);
			}
		}
	}

	refresh(graph?: VaultGraph): void {
		if (!this.dashboard) return;
		const g = graph ?? buildGraph(this.app, this.plugin.settings.maxNodes, this.plugin.settings.includeTags);
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
			notes: g.totalNotes,
			projects: g.totalProjects,
			links: g.totalLinks,
			tags: g.totalTags,
			folders: g.folders,
			hubs: g.topHubs,
			recent,
		});
	}

	relocalize(): void {
		this.dashboard?.relocalize();
		this.refresh();
		const leaf = this.leaf as unknown as { updateHeader?: () => void };
		leaf.updateHeader?.();
	}

	async onClose(): Promise<void> {
		this.dashboard?.destroy();
		this.contentEl.removeClass("ng-host", "ng-dashboard-host");
		this.contentEl.empty();
	}
}
