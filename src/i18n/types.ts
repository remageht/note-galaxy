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
	commandOpenDashboard: string;
	commandRebuild: string;
	viewTitle: string;
	dashboardTitle: string;

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
	tabOverview: string;
	tabHubs: string;
	tabRecent: string;
	sectionHubs: string;

	toolbarRebuild: string;
	toolbarReset: string;
	toolbarDashboard: string;
	actionMakeCenter: string;
	actionResetCenter: string;

	settingLanguage: string;
	settingLanguageDesc: string;
	languageAuto: string;
	settingCoreTheme: string;
	settingCoreThemeDesc: string;
	themeGargantua: string;
	themePulsar: string;
	themeSingularity: string;
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
	settingTransition: string;
	settingTransitionDesc: string;
	settingQuasar: string;
	settingQuasarDesc: string;
	settingActivity: string;
	settingActivityDesc: string;
	settingAdaptive: string;
	settingAdaptiveDesc: string;
	settingIncludeTags: string;
	settingIncludeTagsDesc: string;
	settingOrbitalMotion: string;
	settingOrbitalMotionDesc: string;
	settingPulses: string;
	settingPulsesDesc: string;
	bodyStar: string;
	bodyGasGiant: string;
	bodyPlanet: string;
	bodyAsteroid: string;
	contextLost: string;

	quoteTitle: string;
	quoteNext: string;
	quoteCopied: string;
	quoteCatAll: string;
	quoteCatQuranSunnah: string;
	quoteCatBible: string;
	quoteCatScience: string;
	quoteCatVault: string;
	quoteEmptyVault: string;

	whenJustNow: string;
	whenMinutes: (n: number) => string;
	whenHours: (n: number) => string;
	whenDays: (n: number) => string;
	whenMonths: (n: number) => string;

	noteCount: (n: number) => string;
	linkCount: (n: number) => string;
}
