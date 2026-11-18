import type { Strings } from "./types";

const it: Strings = {
	locale: "it-IT",

	ribbonOpen: "Note Galaxy: apri il grafo 3D",
	commandOpen: "Apri grafo 3D",
	commandRebuild: "Ricostruisci grafo 3D",
	viewTitle: "Note Galaxy",

	greetingMorning: "Buongiorno",
	greetingDay: "Buon pomeriggio",
	greetingEvening: "Buonasera",
	greetingNight: "Buonanotte",

	eyebrow: "NOTE GALAXY",
	statNotes: "note",
	statProjects: "progetti",
	statLinks: "collegamenti",
	statTags: "tag",
	sectionFolders: "Costellazioni",
	sectionRecent: "Recenti",
	chipAll: "tutte",
	emptyRecent: "Ancora nulla — crea la tua prima nota.",
	hint: "Trascina — orbita · rotella — zoom · clic su una stella — apri la nota",

	toolbarRebuild: "Ricostruisci grafo",
	toolbarReset: "Reimposta vista",
	toolbarDashboard: "Dashboard",

	settingLanguage: "Lingua",
	settingLanguageDesc: "Lingua dell'interfaccia. «Auto» segue la lingua di Obsidian.",
	languageAuto: "Auto",
	settingName: "Nome per il saluto",
	settingNameDesc: "Mostrato come «Buonasera, …». Lascia vuoto per mostrare solo il saluto.",
	settingNamePlaceholder: "Emir",
	settingDashboard: "Dashboard",
	settingDashboardDesc: "Pannello con saluto, statistiche e note recenti.",
	settingLabels: "Nomi delle note",
	settingLabelsDesc: "Mostra i titoli delle note più collegate nello spazio.",
	settingBloom: "Bagliore (bloom)",
	settingBloomDesc: "Intensità dell'alone attorno a stelle e disco.",
	settingDisk: "Velocità del disco",
	settingDiskDesc: "Quanto velocemente ruota il disco di accrescimento.",
	settingStars: "Dimensione stelle",
	settingStarsDesc: "Scala dei punti delle note.",
	settingOrbit: "Rotazione della galassia",
	settingOrbitDesc: "0 mantiene ferma la nuvola di note.",
	settingMaxNodes: "Note massime",
	settingMaxNodesDesc: "Quante delle note più collegate mostrare in 3D.",

	whenJustNow: "adesso",
	whenMinutes: (n) => `${n} min`,
	whenHours: (n) => `${n} h`,
	whenDays: (n) => `${n} g`,
	whenMonths: (n) => `${n} mesi`,

	noteCount: (n) => `${n} ${n === 1 ? "nota" : "note"}`,
	linkCount: (n) => `${n} ${n === 1 ? "collegamento" : "collegamenti"}`,
};

export default it;
