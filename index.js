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

const regexRock = /rock/i;
const regexPaper = /paper/i;
const regexScissors = /scissors/i;

function getHumanChoice(humanChoice) {
    if (regexRock.test(humanChoice)) {
        return items[0];
    } else if (regexPaper.test(humanChoice)) {
        return items[1];
    } else if (regexScissors.test(humanChoice)) {
        return items[2];
    } else {
        return "Enter the right choice.";
    }
}

function playGame() {
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice;

        if (!humanSelection) {
        console.log("Invalid choice. Please enter rock, paper, or scissors.");
        return;
}
    function playRound(humanChoice, computerChoice) {
    
        if (regexRock.test(humanChoice) && regexScissors.test(computerChoice)) {
        console.log("You win! Rock beats Scissors");
        humanScore++;
        console.log("Computer: " + computerChoice + ", " + "Yours: " + humanChoice);
    
        } else if (regexScissors.test(humanChoice) && regexRock.test(computerChoice)) {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
            console.log("Computer: " + computerChoice + ", " + "Yours: " + humanChoice);
    
        }  else if (regexScissors.test(humanChoice) && regexPaper.test(computerChoice)) {
            console.log("You win! Scissors beats Paper");
            humanScore++;
            console.log("Computer: " + computerChoice + ", " + "Yours: " + humanChoice);
    
        } else if (regexPaper.test(humanChoice) && regexScissors.test(computerChoice)) {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
            console.log("Computer: " + computerChoice + ", " + "Yours: " + humanChoice);
    
        } else if (regexPaper.test(humanChoice) && regexRock.test(computerChoice)) {
            console.log("You win! Paper beats Rock");
            humanScore++;
            console.log("Computer: " + computerChoice + ", " + "Yours: " + humanChoice);
    
        } else if (regexRock.test(humanChoice) && regexPaper.test(computerChoice)) {
            console.log("You lose! Paper beats Rock");
            computerScore++;
            console.log("Computer: " + computerChoice + ", " + "Yours: " + humanChoice);
    
        } else {
            console.log("That's a tie. Go another round.");
            console.log("Computer: " + computerChoice + ", " + "Yours: " + humanChoice);
        }
    }

    function nextRound(round) {
        if (round < 6) {
            const humanChoice = prompt("Enter your choice (rock, paper, scissors):");
            const humanSelection = getHumanChoice(humanChoice);
            const computerSelection = getComputerChoice();
            playRound(humanSelection, computerSelection);

            setTimeout(() => {
                nextRound(round + 1); // Proceed to the next round after 6 seconds
            }, 1500);
        } else {
            console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
        }
    }

    nextRound(0);
}

setTimeout(playGame, 9000);