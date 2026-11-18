import { getLanguage } from "obsidian";
import type { LanguageCode, LanguageSetting, Strings } from "./types";
import en from "./en";
import ru from "./ru";
import uk from "./uk";
import de from "./de";
import es from "./es";
import fr from "./fr";
import it from "./it";
import ptBR from "./pt-br";
import pl from "./pl";
import zhCN from "./zh-cn";
import ja from "./ja";

export type { LanguageCode, LanguageSetting, Strings };

const DICTS: Record<LanguageCode, Strings> = {
	en,
	ru,
	uk,
	de,
	es,
	fr,
	it,
	"pt-BR": ptBR,
	pl,
	"zh-CN": zhCN,
	ja,
};

/**
 * Add a language by creating another `Strings` object and listing it here.
 * Everything else (settings dropdown included) picks it up automatically.
 */
export const LANGUAGES: { code: LanguageCode; label: string }[] = [
	{ code: "en", label: "English" },
	{ code: "ru", label: "Русский" },
	{ code: "uk", label: "Українська" },
	{ code: "de", label: "Deutsch" },
	{ code: "es", label: "Español" },
	{ code: "fr", label: "Français" },
	{ code: "it", label: "Italiano" },
	{ code: "pt-BR", label: "Português (Brasil)" },
	{ code: "pl", label: "Polski" },
	{ code: "zh-CN", label: "简体中文" },
	{ code: "ja", label: "日本語" },
];

let current: LanguageCode = "en";

function isLanguageCode(value: string): value is LanguageCode {
	return value in DICTS;
}

/** Matches a locale such as `pt-br`, `zh-Hans` or `de-AT` to a dictionary. */
export function matchLanguage(raw: string): LanguageCode | null {
	const code = raw.trim().toLowerCase().replace(/_/g, "-");
	if (!code) return null;
	if (isLanguageCode(code)) return code;
	for (const entry of LANGUAGES) {
		if (entry.code.toLowerCase() === code) return entry.code;
	}
	const base = code.split("-")[0];
	for (const entry of LANGUAGES) {
		if (entry.code.toLowerCase().split("-")[0] === base) return entry.code;
	}
	return null;
}

export function resolveLanguage(setting: LanguageSetting): LanguageCode {
	if (setting !== "auto") return setting;
	let code = "";
	try {
		code = getLanguage();
	} catch {
		code = "";
	}
	if (!code && typeof navigator !== "undefined") code = navigator.language || "en";
	return matchLanguage(code) ?? "en";
}

export function useLanguage(setting: LanguageSetting): LanguageCode {
	current = resolveLanguage(setting);
	return current;
}

export function currentLanguage(): LanguageCode {
	return current;
}

export function t(): Strings {
	return DICTS[current];
}
