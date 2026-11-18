import type { Strings } from "./types";

const ptBR: Strings = {
	locale: "pt-BR",

	ribbonOpen: "Note Galaxy: abrir o grafo 3D",
	commandOpen: "Abrir grafo 3D",
	commandRebuild: "Reconstruir grafo 3D",
	viewTitle: "Note Galaxy",

	greetingMorning: "Bom dia",
	greetingDay: "Boa tarde",
	greetingEvening: "Boa noite",
	greetingNight: "Boa noite",

	eyebrow: "NOTE GALAXY",
	statNotes: "notas",
	statProjects: "projetos",
	statLinks: "conexões",
	statTags: "tags",
	sectionFolders: "Constelações",
	sectionRecent: "Recentes",
	chipAll: "todas",
	emptyRecent: "Nada por aqui ainda — crie sua primeira nota.",
	hint: "Arraste — órbita · rolagem — zoom · clique numa estrela — abrir nota",

	toolbarRebuild: "Reconstruir grafo",
	toolbarReset: "Redefinir visão",
	toolbarDashboard: "Painel",

	settingsHeading: "Note Galaxy",
	settingLanguage: "Idioma",
	settingLanguageDesc: "Idioma da interface. «Auto» segue o idioma do Obsidian.",
	languageAuto: "Auto",
	settingName: "Nome para a saudação",
	settingNameDesc: "Exibido como «Boa noite, …». Deixe vazio para mostrar apenas a saudação.",
	settingNamePlaceholder: "Emir",
	settingDashboard: "Painel",
	settingDashboardDesc: "Painel com saudação, estatísticas e notas recentes.",
	settingLabels: "Nomes das notas",
	settingLabelsDesc: "Mostrar os títulos das notas mais conectadas no espaço.",
	settingBloom: "Brilho (bloom)",
	settingBloomDesc: "Intensidade do halo ao redor das estrelas e do disco.",
	settingDisk: "Velocidade do disco",
	settingDiskDesc: "Quão rápido o disco de acreção gira.",
	settingStars: "Tamanho das estrelas",
	settingStarsDesc: "Escala dos pontos das notas.",
	settingOrbit: "Rotação da galáxia",
	settingOrbitDesc: "0 mantém a nuvem de notas parada.",
	settingMaxNodes: "Máximo de notas",
	settingMaxNodesDesc: "Quantas das notas mais conectadas mostrar em 3D.",

	whenJustNow: "agora mesmo",
	whenMinutes: (n) => `${n} min`,
	whenHours: (n) => `${n} h`,
	whenDays: (n) => `${n} d`,
	whenMonths: (n) => `${n} ${n === 1 ? "mês" : "meses"}`,

	noteCount: (n) => `${n} ${n === 1 ? "nota" : "notas"}`,
	linkCount: (n) => `${n} ${n === 1 ? "conexão" : "conexões"}`,
};

export default ptBR;
