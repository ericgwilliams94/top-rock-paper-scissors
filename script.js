// document variables
const gameInfo = document.getElementById("gameInfo");
const gameMessage = document.getElementById("gameMessage");
const playerScore = document.getElementById("playerScore");
const compScore = document.getElementById("compScore");)

// variables for functions
var userScore = 0;
var compScore = 0;
var gameResult = "";


// function for computer selection
var COMPCHOICE;

function computerPlay () {
    var choice = Math.floor(Math.random() * 3)

    if (choice == 0) {
        COMPCHOICE = 'rock'
    }
    else if (choice == 1) {
        COMPCHOICE = 'paper'
    }
    else if (choice == 2) {
        COMPCHOICE = 'scissors'
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
    updateMessage(gameResult, playerSelection, computerSelection);
}

// function to update score
function updateScore() {
    if (gameResult == "Tie") {
        gameInfo.textContent("It's a tie!");
    }
    else if (gameResult == "Player") {
        gameInfo.textContent("WINNER! 👍 ")
    }
    else {
        gameInfo.textContent("You lose... 👎")
    }
}
