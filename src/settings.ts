import { App, PluginSettingTab, Setting } from "obsidian";
import type NoteGalaxyPlugin from "./main";
import { LANGUAGES, t, LanguageSetting } from "./i18n";

export interface NoteGalaxySettings {
	language: LanguageSetting;
	userName: string;
	showDashboard: boolean;
	showLabels: boolean;
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

	display(): void {
		const { containerEl } = this;
		const s = t();
		containerEl.empty();

		new Setting(containerEl)
			.setName(s.settingLanguage)
			.setDesc(s.settingLanguageDesc)
			.addDropdown((dropdown) => {
				dropdown.addOption("auto", s.languageAuto);
				for (const language of LANGUAGES) dropdown.addOption(language.code, language.label);
				dropdown.setValue(this.plugin.settings.language);
				dropdown.onChange(async (value) => {
					this.plugin.settings.language = value as LanguageSetting;
					await this.plugin.saveSettings();
					this.plugin.applyLanguage();
					this.display();
				});
			});

		new Setting(containerEl)
			.setName(s.settingName)
			.setDesc(s.settingNameDesc)
			.addText((text) =>
				text
					.setPlaceholder(s.settingNamePlaceholder)
					.setValue(this.plugin.settings.userName)
					.onChange(async (value) => {
						this.plugin.settings.userName = value.trim();
						await this.plugin.saveSettings();
						this.plugin.applySettingsToViews();
					}),
			);

		new Setting(containerEl)
			.setName(s.settingDashboard)
			.setDesc(s.settingDashboardDesc)
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.showDashboard).onChange(async (value) => {
					this.plugin.settings.showDashboard = value;
					await this.plugin.saveSettings();
					this.plugin.applySettingsToViews();
				}),
			);

		new Setting(containerEl)
			.setName(s.settingLabels)
			.setDesc(s.settingLabelsDesc)
			.addToggle((toggle) =>
				toggle.setValue(this.plugin.settings.showLabels).onChange(async (value) => {
					this.plugin.settings.showLabels = value;
					await this.plugin.saveSettings();
					this.plugin.applySettingsToViews();
				}),
			);

		new Setting(containerEl)
			.setName(s.settingBloom)
			.setDesc(s.settingBloomDesc)
			.addSlider((slider) =>
				slider
					.setLimits(0, 2, 0.05)
					.setValue(this.plugin.settings.bloom)
					.setDynamicTooltip()
					.onChange(async (value) => {
						this.plugin.settings.bloom = value;
						await this.plugin.saveSettings();
						this.plugin.applySettingsToViews();
					}),
			);

		new Setting(containerEl)
			.setName(s.settingDisk)
			.setDesc(s.settingDiskDesc)
			.addSlider((slider) =>
				slider
					.setLimits(0, 3, 0.05)
					.setValue(this.plugin.settings.diskSpeed)
					.setDynamicTooltip()
					.onChange(async (value) => {
						this.plugin.settings.diskSpeed = value;
						await this.plugin.saveSettings();
						this.plugin.applySettingsToViews();
					}),
			);

		new Setting(containerEl)
			.setName(s.settingStars)
			.setDesc(s.settingStarsDesc)
			.addSlider((slider) =>
				slider
					.setLimits(0.4, 2.2, 0.05)
					.setValue(this.plugin.settings.nodeScale)
					.setDynamicTooltip()
					.onChange(async (value) => {
						this.plugin.settings.nodeScale = value;
						await this.plugin.saveSettings();
						this.plugin.applySettingsToViews();
					}),
			);

		new Setting(containerEl)
			.setName(s.settingOrbit)
			.setDesc(s.settingOrbitDesc)
			.addSlider((slider) =>
				slider
					.setLimits(0, 2, 0.05)
					.setValue(this.plugin.settings.orbitSpeed)
					.setDynamicTooltip()
					.onChange(async (value) => {
						this.plugin.settings.orbitSpeed = value;
						await this.plugin.saveSettings();
						this.plugin.applySettingsToViews();
					}),
			);

		new Setting(containerEl)
			.setName(s.settingMaxNodes)
			.setDesc(s.settingMaxNodesDesc)
			.addSlider((slider) =>
				slider
					.setLimits(100, 3000, 100)
					.setValue(this.plugin.settings.maxNodes)
					.setDynamicTooltip()
					.onChange(async (value) => {
						this.plugin.settings.maxNodes = Math.round(value);
						await this.plugin.saveSettings();
						this.plugin.applySettingsToViews();
					}),
			);
	}
}
