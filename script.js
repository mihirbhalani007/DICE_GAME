let currentPlayer = 1;
let player1Score = 0;
let player2Score = 0;

const dice = document.getElementById("dice");
const rollDiceBtn = document.getElementById("rollDice");
const resetBtn = document.getElementById("reset");
const score1 = document.getElementById("score1");
const score2 = document.getElementById("score2");
const result = document.getElementById("result");

function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  dice.classList.add("shake"); // add animation
  dice.classList.add("spin");
  dice.src = `assets/${roll}.svg`;

  setTimeout(() => {
    dice.classList.remove("shake");
    dice.classList.remove("spin");

    // Update the score for the current player
    if (currentPlayer === 1) {
      player1Score = roll;
      score1.textContent = player1Score;
      currentPlayer = 2;
    } else {
      player2Score = roll;
      score2.textContent = player2Score;
      determineWinner();
      currentPlayer = 1;
    }
  }, 500);
}

function determineWinner() {
  if (player1Score > player2Score) {
    result.textContent = "Player A Wins!";
  } else if (player2Score > player1Score) {
    result.textContent = "Player B Wins!";
  } else {
    result.textContent = "It's a Tie!";
  }
}

function resetGame() {
  player1Score = 0;
  player2Score = 0;
  currentPlayer = 1;
  score1.textContent = 0;
  score2.textContent = 0;
  dice.textContent = "";
  result.textContent = "";
  dice.src = "assets/1.svg";
}

rollDiceBtn.addEventListener("click", rollDice);
resetBtn.addEventListener("click", resetGame);
