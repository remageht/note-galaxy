import type { Strings } from "./types";

const de: Strings = {
	locale: "de-DE",

	ribbonOpen: "Note Galaxy: 3D-Graph öffnen",
	commandOpen: "3D-Graph öffnen",
	commandRebuild: "3D-Graph neu aufbauen",
	viewTitle: "Note Galaxy",

	greetingMorning: "Guten Morgen",
	greetingDay: "Guten Tag",
	greetingEvening: "Guten Abend",
	greetingNight: "Gute Nacht",

	eyebrow: "NOTE GALAXY",
	statNotes: "Notizen",
	statProjects: "Projekte",
	statLinks: "Verbindungen",
	statTags: "Tags",
	sectionFolders: "Konstellationen",
	sectionRecent: "Zuletzt",
	chipAll: "alle",
	emptyRecent: "Noch nichts hier — erstelle deine erste Notiz.",
	hint: "Ziehen — Orbit · Scrollen — Zoom · Stern anklicken — Notiz öffnen",

	toolbarRebuild: "Graph neu aufbauen",
	toolbarReset: "Ansicht zurücksetzen",
	toolbarDashboard: "Dashboard",

	settingLanguage: "Sprache",
	settingLanguageDesc: "Sprache der Oberfläche. „Auto“ folgt der Obsidian-Sprache.",
	languageAuto: "Auto",
	settingName: "Name für die Begrüßung",
	settingNameDesc: "Erscheint als „Guten Abend, …“. Leer lassen, um nur die Begrüßung zu zeigen.",
	settingNamePlaceholder: "Emir",
	settingDashboard: "Dashboard",
	settingDashboardDesc: "Panel mit Begrüßung, Statistik und letzten Notizen.",
	settingLabels: "Notizbeschriftungen",
	settingLabelsDesc: "Titel der am stärksten verknüpften Notizen im Raum anzeigen.",
	settingBloom: "Leuchten (Bloom)",
	settingBloomDesc: "Stärke des Scheins um Sterne und Scheibe.",
	settingDisk: "Scheibengeschwindigkeit",
	settingDiskDesc: "Wie schnell die Akkretionsscheibe rotiert.",
	settingStars: "Sternengröße",
	settingStarsDesc: "Größe der Notizpunkte.",
	settingOrbit: "Galaxienrotation",
	settingOrbitDesc: "0 hält die Notizwolke still.",
	settingMaxNodes: "Maximale Notizen",
	settingMaxNodesDesc: "Wie viele der am stärksten verknüpften Notizen in 3D erscheinen.",

	whenJustNow: "gerade eben",
	whenMinutes: (n) => `${n} Min.`,
	whenHours: (n) => `${n} Std.`,
	whenDays: (n) => `${n} T.`,
	whenMonths: (n) => `${n} Mon.`,

	noteCount: (n) => `${n} ${n === 1 ? "Notiz" : "Notizen"}`,
	linkCount: (n) => `${n} ${n === 1 ? "Verbindung" : "Verbindungen"}`,
};

export default de;
