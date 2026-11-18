import type { Strings } from "./types";

const zhCN: Strings = {
	locale: "zh-CN",

	ribbonOpen: "Note Galaxy：打开 3D 图谱",
	commandOpen: "打开 3D 图谱",
	commandRebuild: "重建 3D 图谱",
	viewTitle: "Note Galaxy",

	greetingMorning: "早上好",
	greetingDay: "下午好",
	greetingEvening: "晚上好",
	greetingNight: "晚安",

	eyebrow: "NOTE GALAXY",
	statNotes: "笔记",
	statProjects: "项目",
	statLinks: "链接",
	statTags: "标签",
	sectionFolders: "星座",
	sectionRecent: "最近",
	chipAll: "全部",
	emptyRecent: "这里还空着——创建你的第一条笔记。",
	hint: "拖动——环绕 · 滚轮——缩放 · 点击星点——打开笔记",

	toolbarRebuild: "重建图谱",
	toolbarReset: "重置视图",
	toolbarDashboard: "仪表盘",

	settingLanguage: "语言",
	settingLanguageDesc: "界面语言。「自动」跟随 Obsidian 的语言。",
	languageAuto: "自动",
	settingName: "问候语中的名字",
	settingNameDesc: "显示为「晚上好，……」。留空则只显示问候语。",
	settingNamePlaceholder: "Emir",
	settingDashboard: "仪表盘",
	settingDashboardDesc: "包含问候、统计和最近笔记的面板。",
	settingLabels: "笔记名称",
	settingLabelsDesc: "在空间中显示连接最多的笔记标题。",
	settingBloom: "辉光（bloom）",
	settingBloomDesc: "星星和吸积盘周围光晕的强度。",
	settingDisk: "吸积盘速度",
	settingDiskDesc: "吸积盘旋转的快慢。",
	settingStars: "星点大小",
	settingStarsDesc: "笔记点的缩放。",
	settingOrbit: "星系旋转",
	settingOrbitDesc: "0 表示笔记云静止不动。",
	settingMaxNodes: "最大笔记数",
	settingMaxNodesDesc: "在 3D 中显示多少条连接最多的笔记。",

	whenJustNow: "刚刚",
	whenMinutes: (n) => `${n} 分钟`,
	whenHours: (n) => `${n} 小时`,
	whenDays: (n) => `${n} 天`,
	whenMonths: (n) => `${n} 个月`,

	noteCount: (n) => `${n} 条笔记`,
	linkCount: (n) => `${n} 条链接`,
};

export default zhCN;
