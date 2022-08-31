const { franc } = require("franc");
const langs = require("langs");

const form = document.querySelector("#verify-form");
const outcomeContainer = document.querySelector("#outcome-container");
//console.dir(form);

form.addEventListener("submit", async function (e) {
	e.preventDefault();

	const inputValue = form.elements.query.value;
	const francTest = franc(inputValue.toString());
	outcomeLanguage(francTest);
	form.elements.query.value = ""; // czyszczenie forma
});

const outcomeLanguage = function (guess) {
	outcomeContainer.innerHTML = "";
	if (langs.where("3", guess)) {
		printGuessedLanguage(langs.where("3", guess).name);
	} else {
		printGuessedLanguage("I can't guess :<");
	}
};

const printGuessedLanguage = function (language) {
	const guessedLang = document.createElement("P");
	if (language !== "I can't guess :<") {
		guessedLang.innerText = `Is it ${language} ?`;
	} else {
		guessedLang.innerText = language;
	}
	outcomeContainer.appendChild(guessedLang);
	guessedLang.classList.add("guessed-language");
};
