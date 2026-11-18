import type { Strings } from "./types";

function plural(n: number, one: string, few: string, many: string): string {
	const mod10 = n % 10;
	const mod100 = n % 100;
	if (n === 1) return `${n} ${one}`;
	if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} ${few}`;
	return `${n} ${many}`;
}

const pl: Strings = {
	locale: "pl-PL",

	ribbonOpen: "Note Galaxy: otwórz graf 3D",
	commandOpen: "Otwórz graf 3D",
	commandRebuild: "Przebuduj graf 3D",
	viewTitle: "Note Galaxy",

	greetingMorning: "Dzień dobry",
	greetingDay: "Dzień dobry",
	greetingEvening: "Dobry wieczór",
	greetingNight: "Dobrej nocy",

	eyebrow: "NOTE GALAXY",
	statNotes: "notatki",
	statProjects: "projekty",
	statLinks: "połączenia",
	statTags: "tagi",
	sectionFolders: "Konstelacje",
	sectionRecent: "Ostatnie",
	chipAll: "wszystkie",
	emptyRecent: "Jeszcze nic tu nie ma — utwórz pierwszą notatkę.",
	hint: "Przeciągnij — orbita · kółko — zoom · kliknij gwiazdę — otwórz notatkę",

	toolbarRebuild: "Przebuduj graf",
	toolbarReset: "Przywróć widok",
	toolbarDashboard: "Panel",

	settingLanguage: "Język",
	settingLanguageDesc: "Język interfejsu. „Auto” podąża za językiem Obsidiana.",
	languageAuto: "Auto",
	settingName: "Imię do powitania",
	settingNameDesc: "Wyświetlane jako „Dobry wieczór, …”. Puste — tylko powitanie.",
	settingNamePlaceholder: "Emir",
	settingDashboard: "Panel",
	settingDashboardDesc: "Panel z powitaniem, statystykami i ostatnimi notatkami.",
	settingLabels: "Nazwy notatek",
	settingLabelsDesc: "Pokazuj tytuły najlepiej połączonych notatek w przestrzeni.",
	settingBloom: "Poświata (bloom)",
	settingBloomDesc: "Siła aureoli wokół gwiazd i dysku.",
	settingDisk: "Prędkość dysku",
	settingDiskDesc: "Jak szybko wiruje dysk akrecyjny.",
	settingStars: "Rozmiar gwiazd",
	settingStarsDesc: "Skala kropek notatek.",
	settingOrbit: "Obrót galaktyki",
	settingOrbitDesc: "0 zatrzymuje chmurę notatek.",
	settingMaxNodes: "Maksymalnie notatek",
	settingMaxNodesDesc: "Ile najlepiej połączonych notatek pokazywać w 3D.",

	whenJustNow: "przed chwilą",
	whenMinutes: (n) => `${n} min`,
	whenHours: (n) => `${n} godz.`,
	whenDays: (n) => `${n} dn.`,
	whenMonths: (n) => `${n} mies.`,

	noteCount: (n) => plural(n, "notatka", "notatki", "notatek"),
	linkCount: (n) => plural(n, "połączenie", "połączenia", "połączeń"),
};

export default pl;
