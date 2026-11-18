import { setIcon } from "obsidian";
import { t } from "../i18n";

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
	const node = document.createElement(tag);
	if (className) node.className = className;
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
	private readonly cardLabels: HTMLSpanElement[] = [];
	private readonly statNotes: HTMLSpanElement;
	private readonly statProjects: HTMLSpanElement;
	private readonly statLinks: HTMLSpanElement;
	private readonly statTags: HTMLSpanElement;
	private readonly folderTitleEl: HTMLDivElement;
	private readonly foldersEl: HTMLDivElement;
	private readonly recentTitleEl: HTMLDivElement;
	private readonly recentEl: HTMLDivElement;
	private readonly hintEl: HTMLDivElement;
	private readonly clockTimer: number;

	private activeFolder: string | null = null;
	private folders: DashboardFolder[] = [];
	private recent: DashboardRecent[] = [];
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

		const cards = el("div", "ng-cards");
		const makeCard = (label: string): HTMLSpanElement => {
			const card = el("div", "ng-card");
			const num = el("span", "ng-num", "0");
			const caption = el("span", "ng-lbl", label);
			card.append(num, caption);
			cards.appendChild(card);
			this.cardLabels.push(caption);
			return num;
		};
		this.statNotes = makeCard(s.statNotes);
		this.statProjects = makeCard(s.statProjects);
		this.statLinks = makeCard(s.statLinks);
		this.statTags = makeCard(s.statTags);
		this.root.appendChild(cards);

		const folderSection = el("div", "ng-section");
		this.folderTitleEl = el("div", "ng-section-title", s.sectionFolders);
		this.foldersEl = el("div", "ng-chips");
		folderSection.append(this.folderTitleEl, this.foldersEl);
		this.root.appendChild(folderSection);

		const recentSection = el("div", "ng-section");
		this.recentTitleEl = el("div", "ng-section-title", s.sectionRecent);
		this.recentEl = el("div", "ng-recent");
		recentSection.append(this.recentTitleEl, this.recentEl);
		this.root.appendChild(recentSection);

		this.hintEl = el("div", "ng-hint", s.hint);
		this.root.appendChild(this.hintEl);

		this.updateClock();
		this.clockTimer = window.setInterval(() => this.updateClock(), 20_000);
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
		this.folderTitleEl.textContent = s.sectionFolders;
		this.recentTitleEl.textContent = s.sectionRecent;
		this.hintEl.textContent = s.hint;
		const labels = [s.statNotes, s.statProjects, s.statLinks, s.statTags];
		this.cardLabels.forEach((label, index) => {
			label.textContent = labels[index] ?? "";
		});
		this.updateClock();
		this.renderFolders();
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
		this.renderFolders();
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
			dot.style.background = hex(folder.color);
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
	const button = document.createElement("button");
	button.className = "ng-tool";
	button.title = title;
	button.setAttribute("aria-label", title);
	setIcon(button, icon);
	button.addEventListener("click", onClick);
	return button;
}
