import { App, PluginSettingTab, SettingDefinitionItem } from "obsidian";
import type NoteGalaxyPlugin from "./main";
import { LANGUAGES, t, LanguageSetting } from "./i18n";

export interface NoteGalaxySettings {
	language: LanguageSetting;
	userName: string;
	showDashboard: boolean;
	showLabels: boolean;
	transition: boolean;
	quasar: boolean;
	activityLayout: boolean;
	adaptiveQuality: boolean;
	bloom: number;
	diskSpeed: number;
	nodeScale: number;
	orbitSpeed: number;
	maxNodes: number;
}

export const DEFAULT_SETTINGS: NoteGalaxySettings = {
	language: "auto",
	userName: "",
	showDashboard: true,
	showLabels: true,
	transition: true,
	quasar: true,
	activityLayout: true,
	adaptiveQuality: true,
	bloom: 0.5,
	diskSpeed: 1,
	nodeScale: 1,
	orbitSpeed: 0.6,
	maxNodes: 1200,
};

export class NoteGalaxySettingTab extends PluginSettingTab {
	plugin: NoteGalaxyPlugin;

	constructor(app: App, plugin: NoteGalaxyPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	getSettingDefinitions(): SettingDefinitionItem[] {
		const s = t();
		const languageOptions: Record<string, string> = { auto: s.languageAuto };
		for (const language of LANGUAGES) languageOptions[language.code] = language.label;

		return [
			{
				name: s.settingLanguage,
				desc: s.settingLanguageDesc,
				control: { key: "language", type: "dropdown", options: languageOptions },
			},
			{
				name: s.settingName,
				desc: s.settingNameDesc,
				control: { key: "userName", type: "text", placeholder: s.settingNamePlaceholder },
			},
			{
				name: s.settingDashboard,
				desc: s.settingDashboardDesc,
				control: { key: "showDashboard", type: "toggle" },
			},
			{
				name: s.settingLabels,
				desc: s.settingLabelsDesc,
				control: { key: "showLabels", type: "toggle" },
			},
			{
				name: s.settingTransition,
				desc: s.settingTransitionDesc,
				control: { key: "transition", type: "toggle" },
			},
			{
				name: s.settingQuasar,
				desc: s.settingQuasarDesc,
				control: { key: "quasar", type: "toggle" },
			},
			{
				name: s.settingActivity,
				desc: s.settingActivityDesc,
				control: { key: "activityLayout", type: "toggle" },
			},
			{
				name: s.settingAdaptive,
				desc: s.settingAdaptiveDesc,
				control: { key: "adaptiveQuality", type: "toggle" },
			},
			{
				name: s.settingBloom,
				desc: s.settingBloomDesc,
				control: { key: "bloom", type: "slider", min: 0, max: 2, step: 0.05 },
			},
			{
				name: s.settingDisk,
				desc: s.settingDiskDesc,
				control: { key: "diskSpeed", type: "slider", min: 0, max: 3, step: 0.05 },
			},
			{
				name: s.settingStars,
				desc: s.settingStarsDesc,
				control: { key: "nodeScale", type: "slider", min: 0.4, max: 2.2, step: 0.05 },
			},
			{
				name: s.settingOrbit,
				desc: s.settingOrbitDesc,
				control: { key: "orbitSpeed", type: "slider", min: 0, max: 2, step: 0.05 },
			},
			{
				name: s.settingMaxNodes,
				desc: s.settingMaxNodesDesc,
				control: { key: "maxNodes", type: "slider", min: 100, max: 3000, step: 100 },
			},
		];
	}

	setControlValue(key: string, value: unknown): void {
		const settings = this.plugin.settings;
		switch (key) {
			case "language":
				settings.language = value as LanguageSetting;
				break;
			case "userName":
				settings.userName = String(value ?? "").trim();
				break;
			case "showDashboard":
				settings.showDashboard = Boolean(value);
				break;
			case "showLabels":
				settings.showLabels = Boolean(value);
				break;
			case "transition":
				settings.transition = Boolean(value);
				break;
			case "quasar":
				settings.quasar = Boolean(value);
				break;
			case "activityLayout":
				settings.activityLayout = Boolean(value);
				break;
			case "adaptiveQuality":
				settings.adaptiveQuality = Boolean(value);
				break;
			case "bloom":
			case "diskSpeed":
			case "nodeScale":
			case "orbitSpeed":
				settings[key] = Number(value);
				break;
			case "maxNodes":
				settings.maxNodes = Math.round(Number(value));
				break;
		}

		void this.plugin.saveSettings().then(() => {
			if (key === "language") {
				this.plugin.applyLanguage();
				this.update();
			}
			this.plugin.applySettingsToViews();
		});
	}
}
