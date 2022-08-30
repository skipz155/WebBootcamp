const form = document.querySelector("#search-form");
const div = document.querySelector("#img-container");

form.addEventListener("submit", async function (e) {
	e.preventDefault();
	//console.log("submitted");
	const searchValue = form.elements.query.value;
	//console.log(searchValue); //zwraca to co wpisane w form
	const response = await axios.get(
		//`https://api.tvmaze.com/search/shows?q=${searchValue}`    // jedno podejscie
		`https://api.tvmaze.com/search/shows`,
		{ params: { q: searchValue } } // drugie podejscie -- mozna tez wrzucic w zmienną
	);
	addImages(response.data);
	form.elements.query.value = ""; // czyszczenie forma
});

const addImages = (shows) => {
	document.getElementById("img-container").innerHTML = "";
	for (let result of shows) {
		if (result.show.image) {
			const img = document.createElement("IMG");
			img.src = result.show.image.medium; //pobiera obrazek z danych z axiosa
			//document.body.append(img);
			document.getElementById("img-container").appendChild(img); //wrzuca img do diva
			img.classList.add("result-images"); // ostylowanie
		}
	}
};
