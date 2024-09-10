const items = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const grouping = Math.floor(Math.random() * 3);

    if (grouping === 0) {
        return items[0];
    } else if (grouping === 1) {
        return items[1];
    } else {
        return items[2];
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === "rock" && computerChoice === "scissors") {
        gameplayText.textContent = "You win! Rock beats Scissors";
        humanScore++;
        humanScoreElement.textContent = `Your score: ${humanScore}`;
        computerScoreElement.textContent = `Computer score: ${computerScore}`;
        yoursText.textContent = `Yours: ${humanChoice}`;
        computerText.textContent = `Computer: ${computerChoice}`;
    
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        gameplayText.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        computerScoreElement.textContent = `Computer score: ${computerScore}`;
        humanScoreElement.textContent = `Your score: ${humanScore}`;
        yoursText.textContent = `Yours: ${humanChoice}`;
        computerText.textContent = `Computer: ${computerChoice}`;
    
    }  else if (humanChoice === "scissors" && computerChoice === "paper") {
        gameplayText.textContent = "You win! Scissors beats Paper";
        humanScore++;
        humanScoreElement.textContent = `Your score: ${humanScore}`;
        computerScoreElement.textContent = `Computer score: ${computerScore}`;
        yoursText.textContent = `Yours: ${humanChoice}`;
        computerText.textContent = `Computer: ${computerChoice}`;
    
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        gameplayText.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        computerScoreElement.textContent = `Computer score: ${computerScore}`;
        humanScoreElement.textContent = `Your score: ${humanScore}`;
        yoursText.textContent = `Yours: ${humanChoice}`;
        computerText.textContent = `Computer: ${computerChoice}`;
    
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        gameplayText.textContent = "You win! Paper beats Rock";
        humanScore++;
        humanScoreElement.textContent = `Your score: ${humanScore}`;
        computerScoreElement.textContent = `Computer score: ${computerScore}`;
        yoursText.textContent = `Yours: ${humanChoice}`;
        computerText.textContent = `Computer: ${computerChoice}`;
    
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        gameplayText.textContent = "You lose! Paper beats Rock";
        computerScore++;
        computerScoreElement.textContent = `Computer score: ${computerScore}`;
        humanScoreElement.textContent = `Your score: ${humanScore}`;
        yoursText.textContent = `Yours: ${humanChoice}`;
        computerText.textContent = `Computer: ${computerChoice}`;
    
    } else {
        gameplayText.textContent = "That's a tie. Go another round.";
        yoursText.textContent = `Yours: ${humanChoice}`;
        computerText.textContent = `Computer: ${computerChoice}`;
    }
}

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");

rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));

/* Your Text and Computer Text elements */
const yoursText = document.querySelector(".yoursText");
const computerText = document.querySelector(".computerText");

const humanScoreElement = document.querySelector(".humanScore"); // Query p element for human score text
const displayContainer = document.querySelector("#game-display-container");
const computerScoreElement = document.querySelector(".computerScore"); // Query p element for computer score text
// Query another element for gameplay text
const gameplayText = document.querySelector(".gameplayText");
// Query an element for the final gameplay text
const finalGpText = document.querySelector(".finalGpText");
