import { App, TFile } from "obsidian";

export type QuoteCategory = "all" | "quran_sunnah" | "bible" | "science" | "vault";

export interface Quote {
	id: string;
	text: string;
	source: string;
	category: Exclude<QuoteCategory, "all">;
	reference?: string;
}

export const BUILTIN_QUOTES: Quote[] = [
	// Коран (Знамения, небеса, орбиты, сотворение, разум)
	{
		id: "q-21-33",
		text: "И Он — Тот, Кто сотворил ночь и день, солнце и луну. Все плывут по орбитам.",
		source: "Коран",
		category: "quran_sunnah",
		reference: "Сура Аль-Анбийа (21:33)",
	},
	{
		id: "q-20-114",
		text: "И говори: «Господи! Приумножь мне знание».",
		source: "Коран",
		category: "quran_sunnah",
		reference: "Сура Та Ха (20:114)",
	},
	{
		id: "q-3-190",
		text: "Воистину, в сотворении небес и земли, и в смене ночи и дня — знамения для обладающих разумом.",
		source: "Коран",
		category: "quran_sunnah",
		reference: "Сура Аль Имран (3:190)",
	},
	{
		id: "q-6-97",
		text: "Он — Тот, Кто сотворил для вас звёзды, чтобы вы находили по ним путь во мраке суши и моря.",
		source: "Коран",
		category: "quran_sunnah",
		reference: "Сура Аль-Ан'ам (6:97)",
	},
	{
		id: "q-51-7",
		text: "Клянусь небом, полным звёздных путей и сплетений.",
		source: "Коран",
		category: "quran_sunnah",
		reference: "Сура Аз-Зарийат (51:7)",
	},
	{
		id: "q-67-3",
		text: "Тот, Кто создал семь небес одно над другим. Ты не увидишь в творении Милостивого никакой несоразмерности.",
		source: "Коран",
		category: "quran_sunnah",
		reference: "Сура Аль-Мульк (67:3)",
	},
	{
		id: "q-6-96",
		text: "Он раскрывает утреннюю зарю. Он сотворил ночь для покоя, а солнце и луну — для исчисления времени.",
		source: "Коран",
		category: "quran_sunnah",
		reference: "Сура Аль-Ан'ам (6:96)",
	},
	{
		id: "q-55-5",
		text: "Солнце и луна движутся согласно строгому расчету.",
		source: "Коран",
		category: "quran_sunnah",
		reference: "Сура Ар-Рахман (55:5)",
	},

	// Сунна и Хадисы (Знание, мудрость, познание)
	{
		id: "s-1",
		text: "Поиск знания — обязанность каждого мусульманина.",
		source: "Хадис",
		category: "quran_sunnah",
		reference: "Сунан Ибн Маджа",
	},
	{
		id: "s-2",
		text: "Мудрость — это утерянное достояние верующего: где бы он её ни нашёл, он имеет на неё наибольшее право.",
		source: "Хадис",
		category: "quran_sunnah",
		reference: "Джами ат-Тирмизи",
	},
	{
		id: "s-3",
		text: "Тому, кто встал на путь в поисках знания, Аллах облегчит путь в Рай.",
		source: "Хадис",
		category: "quran_sunnah",
		reference: "Сахих Муслим",
	},
	{
		id: "s-4",
		text: "Учёные — наследники пророков, а пророки оставляют в наследство не динары, а знание.",
		source: "Хадис",
		category: "quran_sunnah",
		reference: "Сунан Абу Давуда",
	},

	// Библия, Притчи, Псалмы (Свет, мудрость, звезды)
	{
		id: "b-1",
		text: "Небеса проповедуют славу Божию, и о делах рук Его вещает твердь.",
		source: "Библия",
		category: "bible",
		reference: "Псалом 18:2",
	},
	{
		id: "b-2",
		text: "Главное — мудрость: приобретай мудрость, и всем имением твоим приобретай разум.",
		source: "Библия",
		category: "bible",
		reference: "Притчи 4:7",
	},
	{
		id: "b-3",
		text: "Он исчисляет количество звезд; всех их называет именами их.",
		source: "Библия",
		category: "bible",
		reference: "Псалом 146:4",
	},
	{
		id: "b-4",
		text: "Поднимите глаза ваши на высоту небес и посмотрите, кто сотворил их? Он всех их называет по имени.",
		source: "Библия",
		category: "bible",
		reference: "Книга пророка Исаии 40:26",
	},
	{
		id: "b-5",
		text: "Сердце разумного приобретает знание, и ухо мудрых ищет знания.",
		source: "Библия",
		category: "bible",
		reference: "Притчи 18:15",
	},
	{
		id: "b-6",
		text: "И разумные будут сиять, как светила на тверди, и обратившие многих к правде — как звезды, вовеки, навсегда.",
		source: "Библия",
		category: "bible",
		reference: "Книга пророка Даниила 12:3",
	},

	// Наука, мыслители, астрономы и космос
	{
		id: "sci-1",
		text: "Мы — способ для космоса познать самого себя.",
		source: "Карл Саган",
		category: "science",
		reference: "Космос",
	},
	{
		id: "sci-2",
		text: "Самое непостижимое в этом мире — это то, что он постижим.",
		source: "Альберт Эйнштейн",
		category: "science",
	},
	{
		id: "sci-3",
		text: "Знание — это сокровищница, а ключ к ней — вопрошание и наблюдение.",
		source: "Абу Райхан аль-Бируни",
		category: "science",
	},
	{
		id: "sci-4",
		text: "Тот, кто ищет истину, не должен полагаться на авторитеты, а обязан подвергать проверке доказательства и логику.",
		source: "Ибн аль-Хайсам (Альхазен)",
		category: "science",
	},
	{
		id: "sci-5",
		text: "Две вещи наполняют душу новым удивлением: звездное небо надо мной и нравственный закон во мне.",
		source: "Иммануил Кант",
		category: "science",
		reference: "Критика практического разума",
	},
	{
		id: "sci-6",
		text: "Книга природы написана на языке математики.",
		source: "Галилео Галилей",
		category: "science",
	},
	{
		id: "sci-7",
		text: "Время — это то, что не дает всем событиям случиться сразу, а пространство — то, что не дает им случиться в одном месте.",
		source: "Джон Арчибальд Уилер",
		category: "science",
	},
	{
		id: "sci-8",
		text: "Мы стоим на плечах гигантов, чтобы видеть дальше горизонта.",
		source: "Исаак Ньютон",
		category: "science",
	},
];

/**
 * Searches user vault for quotes in notes named "Цитаты", "Quotes",
 * or files tagged with #quote / #цитата.
 */
export async function loadVaultQuotes(app: App): Promise<Quote[]> {
	const quotes: Quote[] = [];
	const files = app.vault.getMarkdownFiles();

	const targetFiles = new Set<TFile>();
	for (const file of files) {
		const base = file.basename.toLowerCase();
		if (base === "цитаты" || base === "quotes" || base === "quote" || base.includes("цитат")) {
			targetFiles.add(file);
			continue;
		}
		const cache = app.metadataCache.getFileCache(file);
		if (cache?.tags) {
			for (const t of cache.tags) {
				const tag = t.tag.toLowerCase();
				if (tag === "#цитата" || tag === "#quote" || tag === "#quotes" || tag.startsWith("#цитат")) {
					targetFiles.add(file);
					break;
				}
			}
		}
	}

	for (const file of targetFiles) {
		try {
			const content = await app.vault.read(file);
			const lines = content.split(/\r?\n/);
			let currentBlock = "";

			for (let i = 0; i < lines.length; i++) {
				const line = lines[i].trim();
				// Markdown blockquote: > Quote text
				if (line.startsWith(">")) {
					const clean = line.replace(/^>+\s*/, "").trim();
					if (clean) {
						if (currentBlock) currentBlock += " " + clean;
						else currentBlock = clean;
					}
				} else {
					if (currentBlock) {
						addParsedQuote(currentBlock, file.basename, quotes);
						currentBlock = "";
					}
					// Bullet list with quotation marks: - "..." or * "..."
					if ((line.startsWith("-") || line.startsWith("*")) && line.includes('"')) {
						const clean = line.replace(/^[-*]\s*/, "").trim();
						addParsedQuote(clean, file.basename, quotes);
					}
				}
			}
			if (currentBlock) {
				addParsedQuote(currentBlock, file.basename, quotes);
			}
		} catch {
			// ignore read errors
		}
	}

	return quotes;
}

function addParsedQuote(raw: string, filename: string, out: Quote[]): void {
	if (!raw || raw.length < 10) return;
	// Separate text and author/source if separated by — or --
	const parts = raw.split(/\s+[—–-]\s+/);
	let text = parts[0].trim();
	let source = parts[1]?.trim() || filename;

	// Strip enclosing quotes if present
	text = text.replace(/^["«'“]+|["»'”]+$/g, "").trim();

	if (text.length >= 8) {
		out.push({
			id: `vault-${out.length + 1}`,
			text,
			source,
			category: "vault",
			reference: filename,
		});
	}
}

/** Returns a random quote matching category from combined list */
export function selectQuote(
	category: QuoteCategory,
	vaultQuotes: Quote[],
	excludeId?: string,
): Quote | null {
	const pool = category === "vault"
		? vaultQuotes
		: category === "all"
		? [...BUILTIN_QUOTES, ...vaultQuotes]
		: BUILTIN_QUOTES.filter((q) => q.category === category);

	if (pool.length === 0) return null;

	const filtered = pool.length > 1 && excludeId
		? pool.filter((q) => q.id !== excludeId)
		: pool;

	const list = filtered.length > 0 ? filtered : pool;
	const index = Math.floor(Math.random() * list.length);
	return list[index] ?? null;
}
