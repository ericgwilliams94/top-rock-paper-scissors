// document variables
const gameInfo = document.getElementById("gameInfo");
const gameMessage = document.getElementById("gameMessage");
const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");
const rockBtn = document.getElementById("rock-btn");
const scissorsBtn = document.getElementById("scissors-btn");
const paperBtn = document.getElementById("paper-btn");
const playAgainDiv = document.getElementById("playAgain");
const playAgainBtn = document.getElementById("play-again-btn");

// variables for functions
var userScore = 0;
var computerScore = 0;
var gameResult = "";


function computerPlay () {
    var choice = Math.floor(Math.random() * 3)

    if (choice == 0) {
        compChoice = 'rock'
    }
    else if (choice == 1) {
        compChoice = 'paper'
    }
    else if (choice == 2) {
        compChoice = 'scissors'
    }
}

// function to play round
function playRound(playerSelection, computerSelection) {
	// declare tie
    if (playerSelection == computerSelection) {
        gameResult = "Tie";
    }
    // player wins
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        gameResult = "Player";
        userScore += 1
    }
    // computer wins
    if (playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "rock") {
        gameResult ="Computer";
        compScore += 1;
    }
    gameResultMessage(gameResult, playerSelection, computerSelection);
}

// function to check for winner
function isWinner() {
    return (userScore == 5 || compScore == 5);
}

// function to update screen on who won
function gameWinnerMessage() {
    if (gameResult == "Tie") {
        gameInfo.textContent("It's a tie!");
    }
    else if (gameResult == "Player") {
        gameInfo.textContent("WINNER! 👍 ")
    }
    else {
        gameInfo.textContent("You lose... 👎")
    }

    playerScore.textContent("${userScore}");
    compScore.textContent("${computerScore}");
}

// function to display game result
function gameResultMessage(gameResult, playerSelection, computerSelection) {
    if (gameResult == "Player") {
        gameMessage.textContent("${playerSelection.toUpperCase()} beats ${computerSelection}");
        return 0;
    }

    if (gameResult == "Computer") {
        gameMessage.textContent("${computerSelection.toUpperCase()} beats ${playerSelection");
        return -1;
    }

    gameMessage.textContent("${computerSelection.toUpperCase()} ties ${playerSelection");
}

// listeners
rockBtn.addEventListener("click", () => game("rock"));
scissorsBtn.addEventListener("click", () => game("scissors"));
paperBtn.addEventListener("click", () => game("paper"));

// final game

function game(playerSelection) {
    // see if someone won
    if (isWinner()) {
        // display play again button
        playAgainDiv.style.visibility = "visible";
    }
    // make computer select
    const compChoice = computerPlay();
    // play a round
    playRound(playerSelection, compChoice);
    // show result
    gameWinnerMessage();


}


