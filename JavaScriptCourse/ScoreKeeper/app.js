//selectors
//const player1Display = document.querySelector("#player1-score-display");
//const player2Display = document.querySelector("#player2-score-display");

const selectScore = document.querySelector("#play-to-select");
//const player1Button = document.querySelector("#player1-add-score-button");
//const player2Button = document.querySelector("#player2-add-score-button");
const resetButton = document.querySelector("#reset-button");

//refactor to objects
const player1 = {
	display: document.querySelector("#player1-score-display"),
	button: document.querySelector("#player1-add-score-button"),
	score: 0,
};

const player2 = {
	display: document.querySelector("#player2-score-display"),
	button: document.querySelector("#player2-add-score-button"),
	score: 0,
};

//variables
//let p1Score = 0;
//let p2Score = 0;
let winningScore = 5;
let gameOver = false;

function updateScore(player, opponent) {
	if (player.score !== winningScore && !gameOver) {
		player.score++;
		player.display.textContent = player.score;
		if (player.score === winningScore) {
			gameOver = true;
			player.display.classList.add("winner");
			opponent.display.classList.add("loser");
		}
	}
}

//events **arrow function do not see this.value
selectScore.addEventListener("change", function () {
	winningScore = parseInt(this.value);
});

player1.button.addEventListener("click", () => {
	updateScore(player1, player2);
});

player2.button.addEventListener("click", () => {
	updateScore(player2, player1);
});

resetButton.addEventListener("click", () => {
	gameOver = false;
	player1.score = 0;
	player2.score = 0;
	player1.display.textContent = 0;
	player2.display.textContent = 0;

	player2.display.classList.remove("winner", "loser");
	player1.display.classList.remove("winner", "loser");
});
