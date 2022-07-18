// Initialize variables and lists
var gameChoices = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;

// getComputerChoice function randomly generates rock paper or scissor
function getComputerChoice() {
  let computerSelection =
    gameChoices[Math.floor(Math.random() * gameChoices.length)];
  return computerSelection;
}

// playerSelection prompt for player's selection, make it case insensitive
function getPlayerChoice() {
  let playerSelection = prompt("What do you pick?").toLowerCase();
  while (true) {
    if (gameChoices.includes(playerSelection)) {
      //   console.log("good");
      return playerSelection;
      break;
    } else {
      //   console.log("incorrect option");
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
  switch (true) {
    case playerSelection === computerSelection:
      console.log("Tie!");
      return 0;
      break;
    case playerSelection == "rock" && computerSelection == "scissors":
    case playerSelection == "scissors" && computerSelection == "paper":
    case playerSelection == "paper" && computerSelection == "rock":
      console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
      return 1;
      break;
    default:
      console.log(`You Lost... ${computerSelection} beats ${playerSelection}`);
      return -1;
      break;
  }
}

// Simulates a game of x rounds
function playGame(rounds) {
  for (let i = 0; i < rounds; i++) {
    let score = playRound(getPlayerChoice(), getComputerChoice());
    switch (true) {
      case score == 1:
        playerScore++;
        break;
      case score == -1:
        computerScore++;
        break;
    }
    console.log(`Computer: ${computerScore} \nPlayer: ${playerScore}`);
  }
  console.log(
    `The final score\nComputer: ${computerScore} \nPlayer: ${playerScore}`
  );
  if (playerScore == computerScore) {
    console.log(`You tied best out of ${rounds} rounds`);
  } else if (playerScore > computerScore) {
    console.log(`You won best out of ${rounds} rounds`);
  } else {
    console.log(`You lost best out of ${rounds} rounds`);
  }
}

// Run function game with x rounds
playGame(3);
