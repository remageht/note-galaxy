import { LANGUAGES, matchLanguage } from "../src/i18n";

const cases: [string, string][] = [
	["en", "en"],
	["en-GB", "en"],
	["ru", "ru"],
	["ru-RU", "ru"],
	["uk", "uk"],
	["de", "de"],
	["de-AT", "de"],
	["es-419", "es"],
	["fr-CA", "fr"],
	["it-IT", "it"],
	["pt-br", "pt-BR"],
	["pt-PT", "pt-BR"],
	["pl", "pl"],
	["zh", "zh-CN"],
	["zh-TW", "zh-CN"],
	["ja", "ja"],
	["fi", "en"],
	["", "en"],
];

let failed = 0;
for (const [input, expected] of cases) {
	const actual = matchLanguage(input) ?? "en";
	if (actual !== expected) {
		failed++;
		console.log(`FAIL ${JSON.stringify(input)} -> ${actual}, expected ${expected}`);
	}
}

console.log(`languages: ${LANGUAGES.length}`);
console.log(`cases: ${cases.length}, failed: ${failed}`);
process.exit(failed === 0 ? 0 : 1);
