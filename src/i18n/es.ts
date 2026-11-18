import type { Strings } from "./types";

const es: Strings = {
	locale: "es-ES",

	ribbonOpen: "Note Galaxy: abrir el grafo 3D",
	commandOpen: "Abrir grafo 3D",
	commandRebuild: "Reconstruir grafo 3D",
	viewTitle: "Note Galaxy",

	greetingMorning: "Buenos días",
	greetingDay: "Buenas tardes",
	greetingEvening: "Buenas noches",
	greetingNight: "Buenas noches",

	eyebrow: "NOTE GALAXY",
	statNotes: "notas",
	statProjects: "proyectos",
	statLinks: "enlaces",
	statTags: "etiquetas",
	sectionFolders: "Constelaciones",
	sectionRecent: "Recientes",
	chipAll: "todas",
	emptyRecent: "Aún no hay nada: crea tu primera nota.",
	hint: "Arrastra — órbita · rueda — zoom · clic en una estrella — abrir nota",

	toolbarRebuild: "Reconstruir grafo",
	toolbarReset: "Restablecer vista",
	toolbarDashboard: "Panel",

	settingsHeading: "Note Galaxy",
	settingLanguage: "Idioma",
	settingLanguageDesc: "Idioma de la interfaz. «Auto» sigue el idioma de Obsidian.",
	languageAuto: "Auto",
	settingName: "Nombre para el saludo",
	settingNameDesc: "Se muestra como «Buenas noches, …». Déjalo vacío para mostrar solo el saludo.",
	settingNamePlaceholder: "Emir",
	settingDashboard: "Panel",
	settingDashboardDesc: "Panel con saludo, estadísticas y notas recientes.",
	settingLabels: "Nombres de notas",
	settingLabelsDesc: "Mostrar los títulos de las notas más conectadas en el espacio.",
	settingBloom: "Brillo (bloom)",
	settingBloomDesc: "Intensidad del halo alrededor de estrellas y disco.",
	settingDisk: "Velocidad del disco",
	settingDiskDesc: "Con qué rapidez gira el disco de acreción.",
	settingStars: "Tamaño de estrellas",
	settingStarsDesc: "Escala de los puntos de notas.",
	settingOrbit: "Rotación de la galaxia",
	settingOrbitDesc: "0 deja quieta la nube de notas.",
	settingMaxNodes: "Máximo de notas",
	settingMaxNodesDesc: "Cuántas de las notas más conectadas mostrar en 3D.",

	whenJustNow: "ahora mismo",
	whenMinutes: (n) => `${n} min`,
	whenHours: (n) => `${n} h`,
	whenDays: (n) => `${n} d`,
	whenMonths: (n) => `${n} mes`,
	noteCount: (n) => `${n} ${n === 1 ? "nota" : "notas"}`,
	linkCount: (n) => `${n} ${n === 1 ? "enlace" : "enlaces"}`,
};

export default es;
