//selectors
const player1Display = document.querySelector("#player1-score-display");
const player2Display = document.querySelector("#player2-score-display");

const selectScore = document.querySelector("#play-to-select");
const player1Button = document.querySelector("#player1-add-score-button");
const player2Button = document.querySelector("#player2-add-score-button");
const resetButton = document.querySelector("#reset-button");

//variables
let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let gameOver = false;

//events **arrow function do not see this.value
selectScore.addEventListener("change", function () {
	winningScore = parseInt(this.value);
});

player1Button.addEventListener("click", () => {
	if (p1Score !== winningScore && !gameOver) {
		p1Score++;
		player1Display.textContent = p1Score;
		if (p1Score === winningScore) {
			gameOver = true;
			player1Display.classList.add("winner");
			player2Display.classList.add("loser");
		}
	}
});

player2Button.addEventListener("click", () => {
	if (p2Score !== winningScore && !gameOver) {
		p2Score++;
		player2Display.textContent = p2Score;
		if (p2Score === winningScore) {
			gameOver = true;
			player2Display.classList.add("winner");
			player1Display.classList.add("loser");
		}
	}
});

resetButton.addEventListener("click", () => {
	gameOver = false;
	p1Score = 0;
	p2Score = 0;
	player1Display.textContent = 0;
	player2Display.textContent = 0;

	player2Display.classList.remove("winner", "loser");
	player1Display.classList.remove("winner", "loser");
});
