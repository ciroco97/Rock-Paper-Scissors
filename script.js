let playerWins;
let playerChoice;
let computerChoice;
let playerCounter = 0;
let computerCounter = 0;
let counter1 = document.getElementById("counter1");
let counter2 = document.getElementById("counter2");
counter1.innerText = "Your score: " + playerCounter;
counter2.innerText = "Computer score is: " + computerCounter;
let info = document.getElementById("info");
info.textContent = "Wish you best of lucks";





function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        choice = "Rock";
    } else if (choice === 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
};

function playRound(playerChoice) {
    computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        playerWins = 0;
        console.log("It's a draw!");
    } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
        playerWins = 1;
        console.log(playerChoice + " beats " + computerChoice + " so Player Wins!");
    } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
        playerWins = 1;
        console.log(playerChoice + " beats " + computerChoice + " so Player Wins!");
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
        playerWins = 1;
        console.log(playerChoice + " beats " + computerChoice + " so Player Wins!");
    } else {
        playerWins = 2;
        console.log(computerChoice + " beats " + playerChoice + " so Computer Wins!");
    }
}



const btn1 = document.getElementById('rockBtn');
btn1.addEventListener('click', () => playRound("Rock", getComputerChoice()));

const btn2 = document.getElementById('paperBtn');
btn2.addEventListener('click', () => playRound("Paper", getComputerChoice()));

const btn3 = document.getElementById('scissorBtn');
btn3.addEventListener('click', () => playRound("Scissors", getComputerChoice()));
/*function game() {
    computerChoice = getComputerChoice();
    let playerCounter = 0;
    let computerCounter = 0;
    while (playerCounter < 5 && computerCounter < 5) {
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
        console.log("COMPUTER WINS!");
    } else if (playerCounter > computerCounter) {
        console.log("PLAYER WINS!");
    } else {
        console.log("NOBODY WON =(");
    }
}
 game();*/