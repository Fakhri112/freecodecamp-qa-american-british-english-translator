const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const americanToBritishTitles = require("./american-to-british-titles.js");
const britishOnly = require("./british-only.js");

class Translator {
	translate(params, lang) {
		let text = params;
		if (!lang) return false;

		const selectDict =
			lang == "toAmerican"
				? britishOnly
				: lang == "toBritish"
				? americanOnly
				: null;

		let wordFound = [];
		let time_changed;
		let Pattern =
			lang == "toAmerican"
				? /(?:[01]\d|2[0-3]|[1-9])\.[0-5]\d(?=\.|\s)/g
				: lang == "toBritish"
				? /(?:[01]\d|2[0-3]|[1-9]):[0-5]\d(?=\.|\s)/g
				: null;
		let result = text.match(Pattern);
		if (result) {
			let changeSymbol =
				lang == "toAmerican"
					? result[0].replace(".", ":")
					: lang == "toBritish"
					? result[0].replace(":", ".")
					: null;

			text = text.replace(
				Pattern,
				`<span class="highlight">${changeSymbol}</span>`,
			);
			time_changed = true;
		}

		let processedWord = text;

		for (const key in selectDict) {
			let match = params.toLowerCase().indexOf(key);
			if (match != -1) {
				wordFound.push({
					word: selectDict[key],
					previous: key,
				});
			}
		}

		for (const key in americanToBritishSpelling) {
			let regex = new RegExp(
				`\\b${
					lang == "toAmerican"
						? americanToBritishSpelling[key]
						: lang == "toBritish"
						? key
						: null
				}\\b`,
				"i",
			);
			let execute = regex.exec(params);
			if (execute) {
				wordFound.push({
					word:
						lang == "toAmerican"
							? key
							: lang == "toBritish"
							? americanToBritishSpelling[key]
							: null,
					previous: execute[0],
				});
			}
		}

		for (const key in americanToBritishTitles) {
			let regex = new RegExp(
				lang == "toAmerican"
					? `${americanToBritishTitles[key]}(?=\\s|$)`
					: lang == "toBritish"
					? `${americanToBritishTitles[key]}\\.(?=\\s|$)`
					: null,
				"gi",
			);
			let execute = regex.exec(params);
			if (execute) {
				wordFound.push({
					word:
						lang == "toAmerican"
							? key.charAt(0).toUpperCase() + key.slice(1)
							: lang == "toBritish"
							? americanToBritishTitles[key].charAt(0).toUpperCase() +
							  americanToBritishTitles[key].slice(1)
							: null,

					previous: execute[0],
				});
			}
		}

		if (wordFound.length == 0 && !time_changed)
			return "Everything looks good to me!";
		wordFound.forEach((el) => {
			processedWord = processedWord.replaceAll(
				new RegExp(el.previous, "gi"),
				`<span class="highlight">${el.word}</span>`,
			);
		});
		return processedWord;
	}
}

module.exports = Translator;
