import type { Strings } from "./types";

const fr: Strings = {
	locale: "fr-FR",

	ribbonOpen: "Note Galaxy : ouvrir le graphe 3D",
	commandOpen: "Ouvrir le graphe 3D",
	commandRebuild: "Reconstruire le graphe 3D",
	viewTitle: "Note Galaxy",

	greetingMorning: "Bonjour",
	greetingDay: "Bon après-midi",
	greetingEvening: "Bonsoir",
	greetingNight: "Bonne nuit",

	eyebrow: "NOTE GALAXY",
	statNotes: "notes",
	statProjects: "projets",
	statLinks: "liens",
	statTags: "tags",
	sectionFolders: "Constellations",
	sectionRecent: "Récentes",
	chipAll: "toutes",
	emptyRecent: "Rien pour l'instant — créez votre première note.",
	hint: "Glisser — orbite · molette — zoom · clic sur une étoile — ouvrir la note",

	toolbarRebuild: "Reconstruire le graphe",
	toolbarReset: "Réinitialiser la vue",
	toolbarDashboard: "Tableau de bord",

	settingsHeading: "Note Galaxy",
	settingLanguage: "Langue",
	settingLanguageDesc: "Langue de l'interface. « Auto » suit la langue d'Obsidian.",
	languageAuto: "Auto",
	settingName: "Nom pour le salut",
	settingNameDesc: "Affiché comme « Bonsoir, … ». Laissez vide pour n'afficher que le salut.",
	settingNamePlaceholder: "Emir",
	settingDashboard: "Tableau de bord",
	settingDashboardDesc: "Panneau avec salut, statistiques et notes récentes.",
	settingLabels: "Libellés des notes",
	settingLabelsDesc: "Afficher les titres des notes les plus connectées dans l'espace.",
	settingBloom: "Éclat (bloom)",
	settingBloomDesc: "Intensité du halo autour des étoiles et du disque.",
	settingDisk: "Vitesse du disque",
	settingDiskDesc: "Vitesse de rotation du disque d'accrétion.",
	settingStars: "Taille des étoiles",
	settingStarsDesc: "Échelle des points de notes.",
	settingOrbit: "Rotation de la galaxie",
	settingOrbitDesc: "0 fige le nuage de notes.",
	settingMaxNodes: "Notes maximum",
	settingMaxNodesDesc: "Combien de notes parmi les plus connectées afficher en 3D.",

	whenJustNow: "à l'instant",
	whenMinutes: (n) => `${n} min`,
	whenHours: (n) => `${n} h`,
	whenDays: (n) => `${n} j`,
	whenMonths: (n) => `${n} mois`,

	noteCount: (n) => `${n} note${n === 1 ? "" : "s"}`,
	linkCount: (n) => `${n} lien${n === 1 ? "" : "s"}`,
};

export default fr;
