export type LanguageCode =
	| "en"
	| "ru"
	| "uk"
	| "de"
	| "es"
	| "fr"
	| "it"
	| "pt-BR"
	| "pl"
	| "zh-CN"
	| "ja";

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
