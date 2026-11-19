import { setIcon } from "obsidian";
import { t } from "../i18n";
import { Quote, QuoteCategory, selectQuote } from "./quotes";

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
	vaultQuotes?: Quote[];
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

	// Metrics
	private readonly cardsEl: HTMLDivElement;
	private readonly cardLabels: HTMLSpanElement[] = [];
	private readonly statNotes: HTMLSpanElement;
	private readonly statProjects: HTMLSpanElement;
	private readonly statLinks: HTMLSpanElement;
	private readonly statTags: HTMLSpanElement;

	// Quote card
	private readonly quoteCardEl: HTMLDivElement;
	private readonly quoteTitleEl: HTMLSpanElement;
	private readonly quoteTextEl: HTMLDivElement;
	private readonly quoteSourceEl: HTMLSpanElement;
	private readonly quoteRefEl: HTMLSpanElement;
	private readonly quoteCatsEl: HTMLDivElement;
	private readonly quoteCopyBtn: HTMLButtonElement;
	private readonly quoteNextBtn: HTMLButtonElement;

	// Folders (Constellations)
	private readonly folderSection: HTMLDivElement;
	private readonly folderTitleEl: HTMLDivElement;
	private readonly foldersEl: HTMLDivElement;

	// Hubs & Recent lists
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
	private activeQuoteCategory: QuoteCategory = "all";
	private currentQuote: Quote | null = null;
	private vaultQuotes: Quote[] = [];

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

		// Navigation Tabs
		const tabs = el("div", "ng-tabs");
		this.tabOverviewBtn = el("button", "ng-tab-btn is-active", s.tabOverview);
		this.tabHubsBtn = el("button", "ng-tab-btn", s.tabHubs);
		this.tabRecentBtn = el("button", "ng-tab-btn", s.tabRecent);
		this.tabOverviewBtn.addEventListener("click", () => this.setTab("overview"));
		this.tabHubsBtn.addEventListener("click", () => this.setTab("hubs"));
		this.tabRecentBtn.addEventListener("click", () => this.setTab("recent"));
		tabs.append(this.tabOverviewBtn, this.tabHubsBtn, this.tabRecentBtn);
		this.root.appendChild(tabs);

		// Compact Metrics Strip (Overview tab)
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

		// Quote / Wisdom of the Day Card (Overview tab)
		this.quoteCardEl = el("div", "ng-quote-card");
		const quoteHeader = el("div", "ng-quote-header");
		const quoteTitleBox = el("div", "ng-quote-title-box");
		const quoteIcon = el("span", "ng-quote-icon");
		setIcon(quoteIcon, "sparkles");
		this.quoteTitleEl = el("span", "ng-quote-title", s.quoteTitle);
		quoteTitleBox.append(quoteIcon, this.quoteTitleEl);

		const quoteActions = el("div", "ng-quote-actions");
		this.quoteNextBtn = el("button", "ng-quote-btn", "");
		this.quoteNextBtn.title = s.quoteNext;
		this.quoteNextBtn.setAttribute("aria-label", s.quoteNext);
		setIcon(this.quoteNextBtn, "refresh-cw");
		this.quoteNextBtn.addEventListener("click", () => this.nextQuote());

		this.quoteCopyBtn = el("button", "ng-quote-btn", "");
		this.quoteCopyBtn.title = s.quoteCopied;
		this.quoteCopyBtn.setAttribute("aria-label", s.quoteCopied);
		setIcon(this.quoteCopyBtn, "copy");
		this.quoteCopyBtn.addEventListener("click", () => this.copyQuote());

		quoteActions.append(this.quoteNextBtn, this.quoteCopyBtn);
		quoteHeader.append(quoteTitleBox, quoteActions);

		// Category selector pills
		this.quoteCatsEl = el("div", "ng-quote-cats");
		this.renderQuoteCategories();

		// Text & source
		this.quoteTextEl = el("div", "ng-quote-text");
		const quoteFooter = el("div", "ng-quote-footer");
		this.quoteSourceEl = el("span", "ng-quote-source");
		this.quoteRefEl = el("span", "ng-quote-ref");
		quoteFooter.append(this.quoteSourceEl, this.quoteRefEl);

		this.quoteCardEl.append(quoteHeader, this.quoteCatsEl, this.quoteTextEl, quoteFooter);
		this.root.appendChild(this.quoteCardEl);

		// Constellations / Folders (Overview tab)
		this.folderSection = el("div", "ng-section");
		this.folderTitleEl = el("div", "ng-section-title", s.sectionFolders);
		this.foldersEl = el("div", "ng-chips");
		this.folderSection.append(this.folderTitleEl, this.foldersEl);
		this.root.appendChild(this.folderSection);

		// Hubs (Hubs tab)
		this.hubsSection = el("div", "ng-section is-hidden");
		this.hubsTitleEl = el("div", "ng-section-title", s.sectionHubs);
		this.hubsEl = el("div", "ng-recent");
		this.hubsSection.append(this.hubsTitleEl, this.hubsEl);
		this.root.appendChild(this.hubsSection);

		// Recent (Recent tab)
		this.recentSection = el("div", "ng-section is-hidden");
		this.recentTitleEl = el("div", "ng-section-title", s.sectionRecent);
		this.recentEl = el("div", "ng-recent");
		this.recentSection.append(this.recentTitleEl, this.recentEl);
		this.root.appendChild(this.recentSection);

		// Hint (Overview tab)
		this.hintEl = el("div", "ng-hint", s.hint);
		this.root.appendChild(this.hintEl);

		this.updateClock();
		this.clockTimer = window.setInterval(() => this.updateClock(), 20_000);
		this.nextQuote();
	}

	setTab(tab: DashboardTab): void {
		this.activeTab = tab;
		this.tabOverviewBtn.classList.toggle("is-active", tab === "overview");
		this.tabHubsBtn.classList.toggle("is-active", tab === "hubs");
		this.tabRecentBtn.classList.toggle("is-active", tab === "recent");

		const isOverview = tab === "overview";
		const isHubs = tab === "hubs";
		const isRecent = tab === "recent";

		this.cardsEl.classList.toggle("is-hidden", !isOverview);
		this.quoteCardEl.classList.toggle("is-hidden", !isOverview);
		this.folderSection.classList.toggle("is-hidden", !isOverview);
		this.hintEl.classList.toggle("is-hidden", !isOverview);

		this.hubsSection.classList.toggle("is-hidden", !isHubs);
		this.recentSection.classList.toggle("is-hidden", !isRecent);
	}

	private renderQuoteCategories(): void {
		this.quoteCatsEl.empty();
		const s = t();
		const categories: [QuoteCategory, string][] = [
			["all", s.quoteCatAll],
			["quran_sunnah", s.quoteCatQuranSunnah],
			["bible", s.quoteCatBible],
			["science", s.quoteCatScience],
		];
		if (this.vaultQuotes.length > 0) {
			categories.push(["vault", s.quoteCatVault]);
		}

		for (const [cat, label] of categories) {
			const btn = el("button", "ng-quote-cat-btn", label);
			btn.classList.toggle("is-active", this.activeQuoteCategory === cat);
			btn.addEventListener("click", () => {
				this.activeQuoteCategory = cat;
				this.renderQuoteCategories();
				this.nextQuote();
			});
			this.quoteCatsEl.appendChild(btn);
		}
	}

	private nextQuote(): void {
		const next = selectQuote(
			this.activeQuoteCategory,
			this.vaultQuotes,
			this.currentQuote?.id,
		);
		this.currentQuote = next;
		this.renderQuote();
	}

	private renderQuote(): void {
		const s = t();
		if (!this.currentQuote) {
			if (this.activeQuoteCategory === "vault") {
				this.quoteTextEl.textContent = s.quoteEmptyVault;
				this.quoteSourceEl.textContent = "";
				this.quoteRefEl.textContent = "";
			} else {
				this.quoteTextEl.textContent = "";
				this.quoteSourceEl.textContent = "";
				this.quoteRefEl.textContent = "";
			}
			return;
		}

		this.quoteTextEl.textContent = `«${this.currentQuote.text}»`;
		this.quoteSourceEl.textContent = this.currentQuote.source;
		this.quoteRefEl.textContent = this.currentQuote.reference ? `· ${this.currentQuote.reference}` : "";
	}

	private copyQuote(): void {
		if (!this.currentQuote) return;
		const fullText = `«${this.currentQuote.text}» — ${this.currentQuote.source}${
			this.currentQuote.reference ? ` (${this.currentQuote.reference})` : ""
		}`;
		void navigator.clipboard.writeText(fullText);

		// Visual feedback
		setIcon(this.quoteCopyBtn, "check");
		this.quoteCopyBtn.classList.add("is-success");
		window.setTimeout(() => {
			setIcon(this.quoteCopyBtn, "copy");
			this.quoteCopyBtn.classList.remove("is-success");
		}, 1400);
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
		this.quoteTitleEl.textContent = s.quoteTitle;
		this.quoteNextBtn.title = s.quoteNext;
		this.quoteCopyBtn.title = s.quoteCopied;
		this.folderTitleEl.textContent = s.sectionFolders;
		this.hubsTitleEl.textContent = s.sectionHubs;
		this.recentTitleEl.textContent = s.sectionRecent;
		this.hintEl.textContent = s.hint;
		const labels = [s.statNotes, s.statProjects, s.statLinks, s.statTags];
		this.cardLabels.forEach((label, index) => {
			label.textContent = labels[index] ?? "";
		});
		this.renderQuoteCategories();
		this.renderQuote();
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

		if (data.vaultQuotes) {
			const prevCount = this.vaultQuotes.length;
			this.vaultQuotes = data.vaultQuotes;
			if (prevCount === 0 && data.vaultQuotes.length > 0) {
				this.renderQuoteCategories();
			}
		}

		if (!this.currentQuote) {
			this.nextQuote();
		}

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
