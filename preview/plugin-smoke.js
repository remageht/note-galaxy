const Module = require("module");
const orig = Module._load;

class Plugin {}
class ItemView {}
class PluginSettingTab {}
class Setting {
	setName() {
		return this;
	}
	setDesc() {
		return this;
	}
	addText() {
		return this;
	}
	addToggle() {
		return this;
	}
	addSlider() {
		return this;
	}
	addDropdown() {
		return this;
	}
	setPlaceholder() {
		return this;
	}
	setValue() {
		return this;
	}
	onChange() {
		return this;
	}
}

Module._load = function (request, parent, isMain) {
	if (request === "obsidian") {
		return {
			Plugin,
			ItemView,
			PluginSettingTab,
			Setting,
			setIcon() {},
			getLanguage: () => "de",
		};
	}
	return orig.call(this, request, parent, isMain);
};

try {
	const mod = require("../main.js");
	const Ctor = mod && mod.default ? mod.default : mod;
	if (typeof Ctor !== "function") throw new Error("default export is not a plugin class");
	console.log("plugin loaded:", Ctor.name);
} catch (error) {
	console.error("FAIL:", error && error.message);
	process.exit(1);
}
