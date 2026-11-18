import { App, TFile } from "obsidian";

export type NodeKind = "note" | "project";

export interface GraphNode {
	path: string;
	title: string;
	kind: NodeKind;
	folder: string;
	degree: number;
	/** 1 = edited just now, 0 = untouched for a month or longer. */
	recency: number;
	color: number;
	size: number;
	x: number;
	y: number;
	z: number;
}

export interface GraphLink {
	source: number;
	target: number;
}

export interface FolderInfo {
	name: string;
	color: number;
	count: number;
}

export interface VaultGraph {
	nodes: GraphNode[];
	links: GraphLink[];
	totalNotes: number;
	totalProjects: number;
	totalLinks: number;
	totalTags: number;
	folders: FolderInfo[];
}

const PROJECT_FOLDERS = new Set(["project", "projects", "проект", "проекты"]);
const PROJECT_TAGS = new Set(["project", "projects", "проект", "проекты"]);

/** Stable hue (0..1) from a string. */
export function hashHue(value: string): number {
	let h = 0;
	for (let i = 0; i < value.length; i++) {
		h = (h * 31 + value.charCodeAt(i)) | 0;
	}
	return ((h >>> 0) % 360) / 360;
}

/** HSL (h in 0..1) -> 0xRRGGBB. */
export function hueToHex(h: number, s = 0.82, l = 0.62): number {
	const a = s * Math.min(l, 1 - l);
	const f = (n: number) => {
		const k = (n + h * 12) % 12;
		return l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
	};
	const r = Math.round(f(0) * 255);
	const g = Math.round(f(8) * 255);
	const b = Math.round(f(4) * 255);
	return (r << 16) | (g << 8) | b;
}

function topFolder(path: string): string {
	const parts = path.split("/");
	return parts.length > 1 ? parts[0] : "";
}

function addTags(target: Set<string>, value: unknown): void {
	if (Array.isArray(value)) {
		for (const item of value) {
			if (typeof item === "string") target.add(item.replace(/^#/, "").toLowerCase());
		}
	} else if (typeof value === "string") {
		for (const item of value.split(/[,\s]+/)) {
			if (item) target.add(item.replace(/^#/, "").toLowerCase());
		}
	}
}

function isProject(app: App, file: TFile): boolean {
	const dirs = file.path.toLowerCase().split("/").slice(0, -1);
	if (dirs.some((d) => PROJECT_FOLDERS.has(d))) return true;

	const cache = app.metadataCache.getFileCache(file);
	const tags = new Set<string>();
	if (cache?.tags) {
		for (const t of cache.tags) tags.add(t.tag.replace(/^#/, "").toLowerCase());
	}
	addTags(tags, cache?.frontmatter?.tags);
	addTags(tags, cache?.frontmatter?.tag);
	for (const tag of tags) {
		if (PROJECT_TAGS.has(tag.split("/")[0])) return true;
	}

	const type: unknown = cache?.frontmatter?.type ?? cache?.frontmatter?.kind;
	return typeof type === "string" && type.toLowerCase() === "project";
}

function collectTags(app: App, files: TFile[]): number {
	const tags = new Set<string>();
	for (const file of files) {
		const cache = app.metadataCache.getFileCache(file);
		if (cache?.tags) {
			for (const tag of cache.tags) tags.add(tag.tag.replace(/^#/, "").toLowerCase());
		}
		addTags(tags, cache?.frontmatter?.tags);
		addTags(tags, cache?.frontmatter?.tag);
	}
	return tags.size;
}

/**
 * Builds a compact picture of the vault: at most `maxNodes` nodes,
 * ranked by link degree and recency, plus the links between them.
 */
export function buildGraph(app: App, maxNodes: number): VaultGraph {
	const files = app.vault.getMarkdownFiles();
	const resolved = app.metadataCache.resolvedLinks;

	const degree = new Map<string, number>();
	let totalLinks = 0;
	for (const [source, targets] of Object.entries(resolved)) {
		for (const [target, count] of Object.entries(targets)) {
			degree.set(source, (degree.get(source) ?? 0) + count);
			degree.set(target, (degree.get(target) ?? 0) + count);
			totalLinks++;
		}
	}

	const ranked = [...files].sort((a, b) => {
		const da = degree.get(a.path) ?? 0;
		const db = degree.get(b.path) ?? 0;
		if (db !== da) return db - da;
		return b.stat.mtime - a.stat.mtime;
	});

	const limit = Math.max(1, Math.floor(maxNodes));
	const chosen = ranked.slice(0, limit);

	const index = new Map<string, number>();
	chosen.forEach((f, i) => index.set(f.path, i));

	const now = Date.now();
	const nodes: GraphNode[] = chosen.map((file) => {
		const folder = topFolder(file.path);
		const project = isProject(app, file);
		const deg = degree.get(file.path) ?? 0;
		const ageDays = Math.max(0, (now - file.stat.mtime) / 86_400_000);
		const recency = Math.max(0, Math.min(1, 1 - ageDays / 30));
		const color = project
			? hueToHex(0.085, 0.85, 0.6 + 0.08 * recency)
			: hueToHex(folder ? hashHue(folder) : 0.56, 0.62 + 0.14 * recency, 0.56 + 0.12 * recency);
		return {
			path: file.path,
			title: file.basename,
			kind: project ? "project" : "note",
			folder: folder || "·",
			degree: deg,
			recency,
			color,
			size: 0.24 + Math.min(0.4, Math.log2(1 + deg) * 0.075) + (project ? 0.1 : 0) + recency * 0.05,
			x: 0,
			y: 0,
			z: 0,
		};
	});

	const links: GraphLink[] = [];
	const seen = new Set<string>();
	for (const [source, targets] of Object.entries(resolved)) {
		const si = index.get(source);
		if (si === undefined) continue;
		for (const target of Object.keys(targets)) {
			const ti = index.get(target);
			if (ti === undefined || ti === si) continue;
			const key = si < ti ? `${si}:${ti}` : `${ti}:${si}`;
			if (seen.has(key)) continue;
			seen.add(key);
			links.push({ source: si, target: ti });
		}
	}

	const folderCounts = new Map<string, number>();
	for (const node of nodes) {
		if (node.folder === "·") continue;
		folderCounts.set(node.folder, (folderCounts.get(node.folder) ?? 0) + 1);
	}
	const folders: FolderInfo[] = [...folderCounts.entries()]
		.map(([name, count]) => ({ name, count, color: hueToHex(hashHue(name), 0.7, 0.66) }))
		.sort((a, b) => b.count - a.count)
		.slice(0, 6);

	let totalProjects = 0;
	for (const file of files) {
		if (isProject(app, file)) totalProjects++;
	}

	const tags = collectTags(app, files);

	return {
		nodes,
		links,
		totalNotes: files.length,
		totalProjects,
		totalLinks,
		totalTags: tags,
		folders,
	};
}
