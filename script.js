// Initialize variables and lists
var gameChoices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;
let gamesTied = 0;
let roundsPlayed = 0;
let playerSelection = null;
let winner = null;
let roundsToPlay = 5;

// getComputerChoice function randomly generates rock paper or scissor
function getComputerChoice() {
  let computerSelection =
    gameChoices[Math.floor(Math.random() * gameChoices.length)];
  return computerSelection;
}

// playerSelection prompt for player's selection, make it case insensitive
function getPlayerChoice() {
  while (true) {
    if (gameChoices.includes(playerSelection)) {
      return playerSelection;
      break;
    } else {
      playerSelection = prompt(
        `Invalid\n Pick only: ${gameChoices[0]}, ${gameChoices[1]}, or ${gameChoices[2]}`
      ).toLowerCase();
    }
  }
}

// Determine winner using similar syntax: You Won! Paper beats Rock
function playRound(playerSelection, computerSelection) {
  console.log(`playerSelection: ${playerSelection}`);
  console.log(`computerSelection: ${computerSelection}`);

  const container1 = document.querySelector("#choices-played");
  const content1 = document.createElement("div");
  content1.textContent = `Player: ${playerSelection} vs. Computer: ${computerSelection}`;
  container1.appendChild(content1);
  roundsPlayed++;

  switch (true) {
    case playerSelection === computerSelection:
      console.log("Tie!");
      gamesTied++;
      return 0;
      break;
    case playerSelection == "rock" && computerSelection == "scissors":
    case playerSelection == "scissors" && computerSelection == "paper":
    case playerSelection == "paper" && computerSelection == "rock":
      console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
      playerScore++;
      return 1;
      break;
    default:
      console.log(`You Lost... ${computerSelection} beats ${playerSelection}`);
      computerScore++;
      return -1;
      break;
  }
}

// Run function game with x rounds
window.addEventListener("click", function (e) {
  let playerSelection = e.target.dataset.choice;
  if (gameChoices.includes(playerSelection)) {
    playRound(playerSelection, getComputerChoice());
  }

  const playerScore1 = document.querySelector("#player-score");
  const computer1 = document.querySelector("#computer-score");
  const roundsPlayed1 = document.querySelector("#rounds-played");
  const gamesTied1 = document.querySelector("#tied-score");
  playerScore1.textContent = `${playerScore}`;
  computer1.textContent = `${computerScore}`;
  roundsPlayed1.textContent = `${roundsPlayed}`;
  gamesTied1.textContent = `${gamesTied}`;

  if (playerScore == roundsToPlay || computerScore == roundsToPlay) {
    if (
      playerScore > computerScore ? (winner = "Player") : (winner = "Computer")
    )
      alert(
        `${winner} is the winner!\nFinal Score:\nPlayer: ${playerScore}\nComputer: ${computerScore}`
      );
  }
});
