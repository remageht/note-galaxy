import { setIcon } from "obsidian";
import { t } from "../i18n";

export type DashboardTab = "overview" | "hubs" | "recent";

export interface DashboardHub {
	title: string;
	path: string;
	degree: number;
}

export interface DashboardFolder {
	name: string;
	color: number;
	count: number;
}

export interface DashboardRecent {
	title: string;
	path: string;
	when: string;
}

export interface DashboardData {
	userName: string;
	notes: number;
	projects: number;
	links: number;
	tags: number;
	folders: DashboardFolder[];
	recent: DashboardRecent[];
	hubs: DashboardHub[];
}

export interface DashboardHandlers {
	onOpenNote: (path: string) => void;
	onRefresh: () => void;
	onReset: () => void;
	onToggle: () => void;
	onFolder: (folder: string | null) => void;
}

function el<K extends keyof HTMLElementTagNameMap>(
	tag: K,
	className?: string,
	text?: string,
): HTMLElementTagNameMap[K] {
	const node = createEl(tag, className ? { cls: className } : {});
	if (text !== undefined) node.textContent = text;
	return node;
}

function hex(color: number): string {
	return `#${color.toString(16).padStart(6, "0")}`;
}

function greetingText(hour: number): string {
	const s = t();
	if (hour >= 5 && hour < 12) return s.greetingMorning;
	if (hour >= 12 && hour < 18) return s.greetingDay;
	if (hour >= 18 && hour < 23) return s.greetingEvening;
	return s.greetingNight;
}

export class Dashboard {
	private readonly root: HTMLDivElement;
	private readonly eyebrowEl: HTMLDivElement;
	private readonly greetingEl: HTMLDivElement;
	private readonly subEl: HTMLDivElement;
	private readonly clockEl: HTMLDivElement;
	private readonly dateEl: HTMLDivElement;
	private readonly tabOverviewBtn: HTMLButtonElement;
	private readonly tabHubsBtn: HTMLButtonElement;
	private readonly tabRecentBtn: HTMLButtonElement;
	private readonly cardLabels: HTMLSpanElement[] = [];
	private readonly cardsEl: HTMLDivElement;
	private readonly statNotes: HTMLSpanElement;
	private readonly statProjects: HTMLSpanElement;
	private readonly statLinks: HTMLSpanElement;
	private readonly statTags: HTMLSpanElement;
	private readonly folderSection: HTMLDivElement;
	private readonly folderTitleEl: HTMLDivElement;
	private readonly foldersEl: HTMLDivElement;
	private readonly hubsSection: HTMLDivElement;
	private readonly hubsTitleEl: HTMLDivElement;
	private readonly hubsEl: HTMLDivElement;
	private readonly recentSection: HTMLDivElement;
	private readonly recentTitleEl: HTMLDivElement;
	private readonly recentEl: HTMLDivElement;
	private readonly hintEl: HTMLDivElement;
	private readonly clockTimer: number;

	private activeTab: DashboardTab = "overview";
	private activeFolder: string | null = null;
	private folders: DashboardFolder[] = [];
	private recent: DashboardRecent[] = [];
	private hubs: DashboardHub[] = [];
	private dataName = "";

	constructor(parent: HTMLElement, private readonly handlers: DashboardHandlers) {
		const s = t();

		this.root = el("div", "ng-dashboard");
		parent.appendChild(this.root);

		const head = el("div", "ng-head");
		this.eyebrowEl = el("div", "ng-eyebrow", s.eyebrow);
		this.greetingEl = el("div", "ng-greeting");
		this.subEl = el("div", "ng-sub");
		head.append(this.eyebrowEl, this.greetingEl, this.subEl);
		this.root.appendChild(head);

		const meta = el("div", "ng-meta");
		this.clockEl = el("div", "ng-clock");
		this.dateEl = el("div", "ng-date");
		meta.append(this.clockEl, this.dateEl);
		this.root.appendChild(meta);

		const tabs = el("div", "ng-tabs");
		this.tabOverviewBtn = el("button", "ng-tab-btn is-active", s.tabOverview);
		this.tabHubsBtn = el("button", "ng-tab-btn", s.tabHubs);
		this.tabRecentBtn = el("button", "ng-tab-btn", s.tabRecent);
		this.tabOverviewBtn.addEventListener("click", () => this.setTab("overview"));
		this.tabHubsBtn.addEventListener("click", () => this.setTab("hubs"));
		this.tabRecentBtn.addEventListener("click", () => this.setTab("recent"));
		tabs.append(this.tabOverviewBtn, this.tabHubsBtn, this.tabRecentBtn);
		this.root.appendChild(tabs);

		this.cardsEl = el("div", "ng-cards");
		const makeCard = (label: string): HTMLSpanElement => {
			const card = el("div", "ng-card");
			const num = el("span", "ng-num", "0");
			const caption = el("span", "ng-lbl", label);
			card.append(num, caption);
			this.cardsEl.appendChild(card);
			this.cardLabels.push(caption);
			return num;
		};
		this.statNotes = makeCard(s.statNotes);
		this.statProjects = makeCard(s.statProjects);
		this.statLinks = makeCard(s.statLinks);
		this.statTags = makeCard(s.statTags);
		this.root.appendChild(this.cardsEl);

		this.folderSection = el("div", "ng-section");
		this.folderTitleEl = el("div", "ng-section-title", s.sectionFolders);
		this.foldersEl = el("div", "ng-chips");
		this.folderSection.append(this.folderTitleEl, this.foldersEl);
		this.root.appendChild(this.folderSection);

		this.hubsSection = el("div", "ng-section is-hidden");
		this.hubsTitleEl = el("div", "ng-section-title", s.sectionHubs);
		this.hubsEl = el("div", "ng-recent");
		this.hubsSection.append(this.hubsTitleEl, this.hubsEl);
		this.root.appendChild(this.hubsSection);

		this.recentSection = el("div", "ng-section is-hidden");
		this.recentTitleEl = el("div", "ng-section-title", s.sectionRecent);
		this.recentEl = el("div", "ng-recent");
		this.recentSection.append(this.recentTitleEl, this.recentEl);
		this.root.appendChild(this.recentSection);

		this.hintEl = el("div", "ng-hint", s.hint);
		this.root.appendChild(this.hintEl);

		this.updateClock();
		this.clockTimer = window.setInterval(() => this.updateClock(), 20_000);
	}

	setTab(tab: DashboardTab): void {
		this.activeTab = tab;
		this.tabOverviewBtn.classList.toggle("is-active", tab === "overview");
		this.tabHubsBtn.classList.toggle("is-active", tab === "hubs");
		this.tabRecentBtn.classList.toggle("is-active", tab === "recent");

		this.cardsEl.classList.toggle("is-hidden", tab !== "overview");
		this.folderSection.classList.toggle("is-hidden", tab !== "overview");
		this.hubsSection.classList.toggle("is-hidden", tab !== "hubs");
		this.recentSection.classList.toggle("is-hidden", tab !== "recent");
	}

	private updateClock(): void {
		const s = t();
		const now = new Date();
		this.clockEl.textContent = now.toLocaleTimeString(s.locale, {
			hour: "2-digit",
			minute: "2-digit",
		});
		this.dateEl.textContent = now.toLocaleDateString(s.locale, {
			weekday: "long",
			day: "numeric",
			month: "long",
		});
		const greeting = greetingText(now.getHours());
		this.greetingEl.textContent = this.dataName ? `${greeting}, ${this.dataName}` : greeting;
	}

	setVisible(visible: boolean): void {
		this.root.classList.toggle("is-hidden", !visible);
	}

	isVisible(): boolean {
		return !this.root.classList.contains("is-hidden");
	}

	/** Re-applies static labels after a language change. */
	relocalize(): void {
		const s = t();
		this.eyebrowEl.textContent = s.eyebrow;
		this.tabOverviewBtn.textContent = s.tabOverview;
		this.tabHubsBtn.textContent = s.tabHubs;
		this.tabRecentBtn.textContent = s.tabRecent;
		this.folderTitleEl.textContent = s.sectionFolders;
		this.hubsTitleEl.textContent = s.sectionHubs;
		this.recentTitleEl.textContent = s.sectionRecent;
		this.hintEl.textContent = s.hint;
		const labels = [s.statNotes, s.statProjects, s.statLinks, s.statTags];
		this.cardLabels.forEach((label, index) => {
			label.textContent = labels[index] ?? "";
		});
		this.updateClock();
		this.renderFolders();
		this.renderHubs();
		this.renderRecent(this.recent);
	}

	update(data: DashboardData): void {
		const s = t();
		this.dataName = data.userName;
		this.updateClock();
		this.subEl.textContent = `${s.noteCount(data.notes)} · ${s.linkCount(data.links)}`;

		this.statNotes.textContent = String(data.notes);
		this.statProjects.textContent = String(data.projects);
		this.statLinks.textContent = String(data.links);
		this.statTags.textContent = String(data.tags);

		this.folders = data.folders;
		this.recent = data.recent;
		this.hubs = data.hubs ?? [];
		this.renderFolders();
		this.renderHubs();
		this.renderRecent(data.recent);
	}

	private renderFolders(): void {
		this.foldersEl.empty();
		const all = el("button", "ng-chip", t().chipAll);
		all.classList.toggle("is-active", this.activeFolder === null);
		all.addEventListener("click", () => {
			this.activeFolder = null;
			this.handlers.onFolder(null);
			this.renderFolders();
		});
		this.foldersEl.appendChild(all);

		for (const folder of this.folders) {
			const chip = el("button", "ng-chip");
			chip.classList.toggle("is-active", this.activeFolder === folder.name);
			const dot = el("span", "ng-dot");
			dot.setCssStyles({ background: hex(folder.color) });
			const label = el("span", "ng-chip-label", folder.name);
			const count = el("span", "ng-chip-count", String(folder.count));
			chip.append(dot, label, count);
			chip.title = `${folder.name} — ${folder.count}`;
			chip.addEventListener("click", () => {
				this.activeFolder = this.activeFolder === folder.name ? null : folder.name;
				this.handlers.onFolder(this.activeFolder);
				this.renderFolders();
			});
			this.foldersEl.appendChild(chip);
		}
	}

	private renderHubs(): void {
		this.hubsEl.empty();
		if (this.hubs.length === 0) {
			this.hubsEl.appendChild(el("div", "ng-empty", t().emptyRecent));
			return;
		}
		for (const hub of this.hubs) {
			const row = el("button", "ng-recent-item");
			const title = el("span", "ng-recent-title", hub.title);
			const count = el("span", "ng-recent-when", t().linkCount(hub.degree));
			row.append(title, count);
			row.title = hub.path;
			row.addEventListener("click", () => this.handlers.onOpenNote(hub.path));
			this.hubsEl.appendChild(row);
		}
	}

	private renderRecent(recent: DashboardRecent[]): void {
		this.recentEl.empty();
		if (recent.length === 0) {
			this.recentEl.appendChild(el("div", "ng-empty", t().emptyRecent));
			return;
		}
		for (const item of recent) {
			const row = el("button", "ng-recent-item");
			const title = el("span", "ng-recent-title", item.title);
			const when = el("span", "ng-recent-when", item.when);
			row.append(title, when);
			row.title = item.path;
			row.addEventListener("click", () => this.handlers.onOpenNote(item.path));
			this.recentEl.appendChild(row);
		}
	}

	destroy(): void {
		window.clearInterval(this.clockTimer);
		this.root.remove();
	}
}

/** Small helper so the view can build toolbar buttons with native icons. */
export function iconButton(icon: string, title: string, onClick: () => void): HTMLButtonElement {
	const button = createEl("button", { cls: "ng-tool", title, attr: { "aria-label": title } });
	setIcon(button, icon);
	button.addEventListener("click", onClick);
	return button;
}
