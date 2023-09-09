const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();

suite("Unit Tests", () => {
	suite("Translate to British English", () => {
		test("Translate Mangoes are my favorite fruit. to British English", (done) => {
			assert.include(
				translator.translate("Mangoes are my favorite fruit.", "toBritish"),
				"favourite",
			);
			done();
		});
		test("Translate I ate yogurt for breakfast. to British English", (done) => {
			assert.include(
				translator.translate("I ate yogurt for breakfast.", "toBritish"),
				"yoghurt",
			);
			done();
		});
		test("Translate We had a party at my friend's condo. to British English", (done) => {
			assert.include(
				translator.translate(
					"We had a party at my friend's condo.",
					"toBritish",
				),
				"flat",
			);
			done();
		});
		test("Translate Can you toss this in the trashcan for me? to British English", (done) => {
			assert.include(
				translator.translate(
					"Can you toss this in the trashcan for me?",
					"toBritish",
				),
				"rubbish",
			);
			done();
		});
		test("Translate The parking lot was full. to British English", (done) => {
			assert.include(
				translator.translate("The parking lot was full.", "toBritish"),
				"car park",
			);
			done();
		});
		test("Translate Like a high tech Rube Goldberg machine. to British English", (done) => {
			assert.include(
				translator.translate(
					"Like a high tech Rube Goldberg machine.",
					"toBritish",
				),
				"Heath Robinson device",
			);
			done();
		});
		test("Translate To play hooky means to skip class or work. to British English", (done) => {
			assert.include(
				translator.translate(
					"To play hooky means to skip class or work.",
					"toBritish",
				),
				"bunk of",
			);
			done();
		});

		test("Translate No Mr. Bond, I expect you to die. to British English", (done) => {
			assert.include(
				translator.translate("No Mr. Bond, I expect you to die", "toBritish"),
				"Mr</span>",
			);
			done();
		});
		test("Translate Dr. Grosh will see you now. to British English", (done) => {
			assert.include(
				translator.translate("Dr. Grosh will see you now.", "toBritish"),
				"Dr</span>",
			);
			done();
		});
		test("Translate Lunch is at 12:15 today. to British English", (done) => {
			assert.include(
				translator.translate("Lunch is at 12:15 today.", "toBritish"),
				"12.15",
			);
			done();
		});
	});
	suite("Translate to American English", () => {
		test("Translate We watched the footie match for a while. to American English", (done) => {
			assert.include(
				translator.translate(
					"We watched the footie match for a while.",
					"toAmerican",
				),
				"soccer",
			);
			done();
		});
		test("Translate Paracetamol takes up to an hour to work. to American English", (done) => {
			assert.include(
				translator.translate(
					"Paracetamol takes up to an hour to work.",
					"toAmerican",
				),
				"Tylenol",
			);
			done();
		});
		test("Translate First, caramelise the onions. to American English", (done) => {
			assert.include(
				translator.translate("First, caramelise the onions.", "toAmerican"),
				"caramelize",
			);
			done();
		});
		test("Translate I spent the bank holiday at the funfair. to American English", (done) => {
			let stringToCheck = ["public holiday", "carnival"];
			for (let index = 0; index < stringToCheck.length; index++) {
				assert.include(
					translator.translate(
						"I spent the bank holiday at the funfair.",
						"toAmerican",
					),
					stringToCheck[index],
				);
			}
			done();
		});
		test("Translate I had a bicky then went to the chippy. to American English", (done) => {
			let stringToCheck = ["cookie", "fish-and-chip shop"];
			for (let index = 0; index < stringToCheck.length; index++) {
				assert.include(
					translator.translate(
						"I had a bicky then went to the chippy.",
						"toAmerican",
					),
					stringToCheck[index],
				);
			}
			done();
		});
		test("Translate I've just got bits and bobs in my bum bag. to American English", (done) => {
			let stringToCheck = ["odds and ends", "fanny pack"];
			for (let index = 0; index < stringToCheck.length; index++) {
				assert.include(
					translator.translate(
						"I've just got bits and bobs in my bum bag.",
						"toAmerican",
					),
					stringToCheck[index],
				);
			}
			done();
		});
		test("Translate The car boot sale at Boxted Airfield was called off. to American English", (done) => {
			assert.include(
				translator.translate(
					"The car boot sale at Boxted Airfield was called off.",
					"toAmerican",
				),
				"swap meet",
			);
			done();
		});
		test("Translate Have you met Mrs Kalyani? to American English", (done) => {
			assert.include(
				translator.translate("Have you met Mrs Kalyani?.", "toAmerican"),
				"Mrs.</span>",
			);
			done();
		});
		test("Translate Prof Joyner of King's College, London. to American English", (done) => {
			assert.include(
				translator.translate(
					"Prof Joyner of King's College, London.",
					"toAmerican",
				),
				"Prof.</span>",
			);
			done();
		});
		test("Translate Tea time is usually around 4 or 4.30. to American English", (done) => {
			assert.include(
				translator.translate(
					"Tea time is usually around 4 or 4.30.",
					"toAmerican",
				),
				"4:30",
			);
			done();
		});
	});
	suite("Highlight translation", () => {
		test("Highlight translation in Mangoes are my favorite fruit.", (done) => {
			assert.include(
				translator.translate("Mangoes are my favorite fruit.", "toBritish"),
				">favourite</span>",
			);
			done();
		});
		test("Highlight translation in I ate yogurt for breakfast.", (done) => {
			assert.include(
				translator.translate("I ate yogurt for breakfast.", "toBritish"),
				">yoghurt</span>",
			);
			done();
		});
		test("Highlight translation in We watched the footie match for a while.", (done) => {
			assert.include(
				translator.translate(
					"We watched the footie match for a while.",
					"toAmerican",
				),
				">soccer</span>",
			);
			done();
		});
		test("Highlight translation in Paracetamol takes up to an hour to work.", (done) => {
			assert.include(
				translator.translate(
					"Paracetamol takes up to an hour to work",
					"toAmerican",
				),
				">Tylenol</span>",
			);
			done();
		});
	});
});
