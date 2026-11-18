import type { Strings } from "./types";

function plural(n: number, one: string, few: string, many: string): string {
	const mod10 = n % 10;
	const mod100 = n % 100;
	if (mod10 === 1 && mod100 !== 11) return `${n} ${one}`;
	if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return `${n} ${few}`;
	return `${n} ${many}`;
}

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

	noteCount: (n) => plural(n, "заметка", "заметки", "заметок"),
	linkCount: (n) => plural(n, "связь", "связи", "связей"),
};

export default ru;
