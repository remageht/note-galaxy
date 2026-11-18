import type { Strings } from "./types";

function plural(n: number, one: string, few: string, many: string): string {
	const mod10 = n % 10;
	const mod100 = n % 100;
	if (mod10 === 1 && mod100 !== 11) return `${n} ${one}`;
	if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} ${few}`;
	return `${n} ${many}`;
}

const uk: Strings = {
	locale: "uk-UA",

	ribbonOpen: "Note Galaxy: відкрити 3D-граф",
	commandOpen: "Відкрити 3D-граф",
	commandRebuild: "Перебудувати 3D-граф",
	viewTitle: "Note Galaxy",

	greetingMorning: "Доброго ранку",
	greetingDay: "Доброго дня",
	greetingEvening: "Доброго вечора",
	greetingNight: "Доброї ночі",

	eyebrow: "NOTE GALAXY",
	statNotes: "замітки",
	statProjects: "проєкти",
	statLinks: "зв'язки",
	statTags: "теги",
	sectionFolders: "Сузір'я",
	sectionRecent: "Нещодавні",
	chipAll: "усі",
	emptyRecent: "Поки порожньо — створіть першу замітку.",
	hint: "Тягніть — орбіта · колесо — масштаб · клік по зірці — відкрити замітку",

	toolbarRebuild: "Перебудувати граф",
	toolbarReset: "Скинути вид",
	toolbarDashboard: "Панель",

	settingLanguage: "Мова",
	settingLanguageDesc: "Мова інтерфейсу. «Авто» — як в Obsidian.",
	languageAuto: "Авто",
	settingName: "Ім'я для привітання",
	settingNameDesc: "Підставляється в «Доброго вечора, …». Порожньо — лише привітання.",
	settingNamePlaceholder: "Емір",
	settingDashboard: "Панель",
	settingDashboardDesc: "Панель із привітанням, статистикою та нещодавніми замітками.",
	settingLabels: "Підписи заміток",
	settingLabelsDesc: "Показувати назви найбільш пов'язаних заміток у просторі.",
	settingBloom: "Світіння (bloom)",
	settingBloomDesc: "Сила ореолу навколо зірок і диска.",
	settingDisk: "Швидкість диска",
	settingDiskDesc: "Як швидко обертається акреційний диск.",
	settingStars: "Розмір зірок",
	settingStarsDesc: "Масштаб точок-заміток.",
	settingOrbit: "Обертання галактики",
	settingOrbitDesc: "0 — хмара заміток стоїть на місці.",
	settingMaxNodes: "Максимум заміток",
	settingMaxNodesDesc: "Скільки найбільш пов'язаних заміток показувати в 3D.",

	whenJustNow: "щойно",
	whenMinutes: (n) => `${n} хв`,
	whenHours: (n) => `${n} год`,
	whenDays: (n) => `${n} дн`,
	whenMonths: (n) => `${n} міс`,

	noteCount: (n) => plural(n, "замітка", "замітки", "заміток"),
	linkCount: (n) => plural(n, "зв'язок", "зв'язки", "зв'язків"),
};

export default uk;
