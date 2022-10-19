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

function finishGame () {
    if (playerCounter === 5 || computerCounter === 5) {
        if (computerCounter > playerCounter) {
            info.textContent = "Computer has reached 5 points, you lost!";
            playerCounter = 0;
            computerCounter = 0;
            counter1.innerText = "Your score: " + playerCounter;
            counter2.innerText = "Computer score is: " + computerCounter;
        } else {
            info.textContent = "You have reached 5 points, you won!";
            playerCounter = 0;
            computerCounter = 0;
            counter1.innerText = "Your score: " + playerCounter;
            counter2.innerText = "Computer score is: " + computerCounter;
        }
    }
}





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
            info.textContent = "It's a draw!";
            counter1.innerText = "Your score: " + playerCounter;
            counter2.innerText = "Computer score is: " + computerCounter;
        } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
            playerCounter++;
            info.textContent = playerChoice + " beats " + computerChoice + " so Player Wins!";
            counter1.innerText = "Your score: " + playerCounter;
            counter2.innerText = "Computer score is: " + computerCounter;
            finishGame();
        } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
            playerCounter++;
            info.textContent = playerChoice + " beats " + computerChoice + " so Player Wins!";
            counter1.innerText = "Your score: " + playerCounter;
            counter2.innerText = "Computer score is: " + computerCounter;
            finishGame();
        } else if (playerChoice === "Paper" && computerChoice === "Rock") {
            playerCounter++;
            info.textContent = playerChoice + " beats " + computerChoice + " so Player Wins!";
            counter1.innerText = "Your score: " + playerCounter;
            counter2.innerText = "Computer score is: " + computerCounter;
            finishGame();
        } else {
            computerCounter++;
            info.textContent = computerChoice + " beats " + playerChoice + " so Computer Wins!";
            counter1.innerText = "Your score: " + playerCounter;
            counter2.innerText = "Computer score is: " + computerCounter;
            finishGame();
        };
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