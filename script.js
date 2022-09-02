function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        choice = "rock";
    } else if (choice === 2) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
    return choice;
}

function playRound(playerChoice, computerChoice) {
    playerChoice = playerChoice.toLowerCase();
    computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        playerWins = 0;
        return "It's a draw!";
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerWins = 1;
        return playerChoice + " beats " + computerChoice + " so Player Wins!";
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerWins = 1;
        return playerChoice + " beats " + computerChoice + " so Player Wins!";
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerWins = 1;
        return playerChoice + " beats " + computerChoice + " so Player Wins!";
    } else {
        playerWins = 2;
        return computerChoice + " beats " + playerChoice + " so Computer Wins!";
    }
}

let playerWins;
let playerChoice = "ROCK";
const computerChoice = getComputerChoice();

function game() {
    let playerCounter = 0;
    let computerCounter = 0;
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Select your weapon");
        console.log(playRound(playerChoice, computerChoice));
        if (playerWins === 1) {
            playerCounter++;
        } else if (playerWins === 2) {
            computerCounter++;
        }
        console.log("Player score: " + playerCounter + " - Computer score: " + computerCounter);
    }
    if (computerCounter > playerCounter) {
        return "COMPUTER WINS!";
    } else if (playerCounter > computerCounter) {
        return "PLAYER WINS!";
    } else {
        return "NOBODY WON =(";
    }
}
