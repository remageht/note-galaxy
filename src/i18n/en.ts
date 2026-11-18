import type { Strings } from "./types";

const en: Strings = {
	locale: "en-US",

	ribbonOpen: "Note Galaxy: open the 3D graph",
	commandOpen: "Open 3D graph",
	commandRebuild: "Rebuild 3D graph",
	viewTitle: "Note Galaxy",

	greetingMorning: "Good morning",
	greetingDay: "Good afternoon",
	greetingEvening: "Good evening",
	greetingNight: "Good night",

	eyebrow: "NOTE GALAXY",
	statNotes: "notes",
	statProjects: "projects",
	statLinks: "links",
	statTags: "tags",
	sectionFolders: "Constellations",
	sectionRecent: "Recent",
	chipAll: "all",
	emptyRecent: "Nothing here yet — create your first note.",
	hint: "Drag to orbit · scroll to zoom · click a star to open a note",

	toolbarRebuild: "Rebuild graph",
	toolbarReset: "Reset view",
	toolbarDashboard: "Dashboard",

	settingsHeading: "Note Galaxy",
	settingLanguage: "Language",
	settingLanguageDesc: "Interface language. “Auto” follows the Obsidian language.",
	languageAuto: "Auto",
	settingName: "Name for the greeting",
	settingNameDesc: "Shown as “Good evening, …”. Leave empty to show the greeting only.",
	settingNamePlaceholder: "Emir",
	settingDashboard: "Dashboard",
	settingDashboardDesc: "Panel with greeting, stats and recent notes.",
	settingLabels: "Note labels",
	settingLabelsDesc: "Show titles of the most connected notes in space.",
	settingBloom: "Glow (bloom)",
	settingBloomDesc: "Strength of the halo around stars and the disk.",
	settingDisk: "Disk speed",
	settingDiskDesc: "How fast the accretion disk swirls.",
	settingStars: "Star size",
	settingStarsDesc: "Scale of note dots.",
	settingOrbit: "Galaxy rotation",
	settingOrbitDesc: "0 keeps the note cloud still.",
	settingMaxNodes: "Maximum notes",
	settingMaxNodesDesc: "How many of the most connected notes to render in 3D.",

	whenJustNow: "just now",
	whenMinutes: (n) => `${n} min`,
	whenHours: (n) => `${n} h`,
	whenDays: (n) => `${n} d`,
	whenMonths: (n) => `${n} mo`,

	noteCount: (n) => `${n} ${n === 1 ? "note" : "notes"}`,
	linkCount: (n) => `${n} ${n === 1 ? "link" : "links"}`,
};

export default en;
