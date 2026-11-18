const Module = require("module");
const orig = Module._load;
Module._load = function (request, parent, isMain) {
	if (request === "obsidian") return { getLanguage: () => "ru" };
	return orig.call(this, request, parent, isMain);
};
require("./i18n-test.cjs");
