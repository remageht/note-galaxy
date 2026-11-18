import { getLanguage } from "obsidian";

export type LanguageCode = "en" | "ru";
export type LanguageSetting = "auto" | LanguageCode;

export interface Strings {
	locale: string;

	ribbonOpen: string;
	commandOpen: string;
	commandRebuild: string;
	viewTitle: string;

	greetingMorning: string;
	greetingDay: string;
	greetingEvening: string;
	greetingNight: string;

	eyebrow: string;
	statNotes: string;
	statProjects: string;
	statLinks: string;
	statTags: string;
	sectionFolders: string;
	sectionRecent: string;
	chipAll: string;
	emptyRecent: string;
	hint: string;

	toolbarRebuild: string;
	toolbarReset: string;
	toolbarDashboard: string;

	settingsHeading: string;
	settingLanguage: string;
	settingLanguageDesc: string;
	languageAuto: string;
	settingName: string;
	settingNameDesc: string;
	settingNamePlaceholder: string;
	settingDashboard: string;
	settingDashboardDesc: string;
	settingLabels: string;
	settingLabelsDesc: string;
	settingBloom: string;
	settingBloomDesc: string;
	settingDisk: string;
	settingDiskDesc: string;
	settingStars: string;
	settingStarsDesc: string;
	settingOrbit: string;
	settingOrbitDesc: string;
	settingMaxNodes: string;
	settingMaxNodesDesc: string;

	whenJustNow: string;
	whenMinutes: (n: number) => string;
	whenHours: (n: number) => string;
	whenDays: (n: number) => string;
	whenMonths: (n: number) => string;

	noteCount: (n: number) => string;
	linkCount: (n: number) => string;
}

function ruPlural(n: number, one: string, few: string, many: string): string {
	const mod10 = n % 10;
	const mod100 = n % 100;
	if (mod10 === 1 && mod100 !== 11) return `${n} ${one}`;
	if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} ${few}`;
	return `${n} ${many}`;
}

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

const ru: Strings = {
	locale: "ru-RU",

	ribbonOpen: "Note Galaxy: открыть 3D-граф",
	commandOpen: "Открыть 3D-граф",
	commandRebuild: "Перестроить 3D-граф",
	viewTitle: "Note Galaxy",

	greetingMorning: "Доброе утро",
	greetingDay: "Добрый день",
	greetingEvening: "Добрый вечер",
	greetingNight: "Доброй ночи",

	eyebrow: "NOTE GALAXY",
	statNotes: "заметки",
	statProjects: "проекты",
	statLinks: "связи",
	statTags: "теги",
	sectionFolders: "Созвездия",
	sectionRecent: "Недавние",
	chipAll: "все",
	emptyRecent: "Пока пусто — создайте первую заметку.",
	hint: "Тяните — орбита · колесо — масштаб · клик по звезде — открыть заметку",

	toolbarRebuild: "Перестроить граф",
	toolbarReset: "Сбросить вид",
	toolbarDashboard: "Дашборд",

	settingsHeading: "Note Galaxy",
	settingLanguage: "Язык",
	settingLanguageDesc: "Язык интерфейса. «Авто» — как в Obsidian.",
	languageAuto: "Авто",
	settingName: "Имя для приветствия",
	settingNameDesc: "Подставляется в «Добрый вечер, …». Пусто — только пожелание.",
	settingNamePlaceholder: "Эмир",
	settingDashboard: "Дашборд",
	settingDashboardDesc: "Панель с приветствием, статистикой и недавними заметками.",
	settingLabels: "Подписи заметок",
	settingLabelsDesc: "Показывать названия самых связанных заметок прямо в космосе.",
	settingBloom: "Свечение (bloom)",
	settingBloomDesc: "Сила ореола вокруг звёзд и диска.",
	settingDisk: "Скорость диска",
	settingDiskDesc: "Как быстро закручивается аккреционный диск.",
	settingStars: "Размер звёзд",
	settingStarsDesc: "Масштаб точек-заметок.",
	settingOrbit: "Скорость вращения галактики",
	settingOrbitDesc: "0 — облако заметок стоит на месте.",
	settingMaxNodes: "Максимум заметок",
	settingMaxNodesDesc: "Сколько самых связанных заметок показывать в 3D.",

	whenJustNow: "только что",
	whenMinutes: (n) => `${n} мин`,
	whenHours: (n) => `${n} ч`,
	whenDays: (n) => `${n} дн`,
	whenMonths: (n) => `${n} мес`,

	noteCount: (n) => ruPlural(n, "заметка", "заметки", "заметок"),
	linkCount: (n) => ruPlural(n, "связь", "связи", "связей"),
};

/**
 * Add a language by creating another `Strings` object and listing it here.
 * Everything else (settings dropdown included) picks it up automatically once
 * the code is added to `LANGUAGES`.
 */
const DICTS: Record<LanguageCode, Strings> = { en, ru };

export const LANGUAGES: { code: LanguageCode; label: string }[] = [
	{ code: "en", label: "English" },
	{ code: "ru", label: "Русский" },
];

let current: LanguageCode = "en";

export function resolveLanguage(setting: LanguageSetting): LanguageCode {
	if (setting === "en" || setting === "ru") return setting;
	let code = "";
	try {
		code = getLanguage();
	} catch {
		code = "";
	}
	if (!code && typeof navigator !== "undefined") code = navigator.language || "en";
	return code.toLowerCase().startsWith("ru") ? "ru" : "en";
}

export function useLanguage(setting: LanguageSetting): LanguageCode {
	current = resolveLanguage(setting);
	return current;
}

export function currentLanguage(): LanguageCode {
	return current;
}

export function t(): Strings {
	return DICTS[current];
}
