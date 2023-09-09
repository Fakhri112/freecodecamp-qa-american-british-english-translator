"use strict";

const Translator = require("../components/translator.js");

module.exports = function (app) {
	const translator = new Translator();
	app.route("/api/translate").post((req, res) => {
		let text = req.body.text;
		let locale = req.body.locale;
		if (text == "") {
			return res.json({ error: "No text to translate" });
		}
		if (!text || !locale) {
			return res.json({ error: "Required field(s) missing" });
		}
		if (locale != "british-to-american" && locale != "american-to-british") {
			return res.json({ error: "Invalid value for locale field" });
		}
		if (locale == "british-to-american") {
			return res.json({
				text: req.body.text,
				translation: translator.translate(req.body.text, "toAmerican"),
			});
		}
		if (locale == "american-to-british") {
			return res.json({
				text: req.body.text,
				translation: translator.translate(req.body.text, "toBritish"),
			});
		}
	});
};
