// document variables
const container = document.getElementsByClassName("container");
const gameResult = document.getElementsByClassName("gameResult");
const playAgain = document.getElementById("playAgain");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// variables for functions
var userScore = 0;
var compScore = 0;
var gameMsg;


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
        message ="Tie";
    }
    // player wins
    if (playerSelection == "rock" && computerSelection == "scissors" ||
    playerSelection == "paper" && computerSelection == "rock" ||
    playerSelection == "scissors" && computerSelection == "paper") {
        var message = "You win!";
        userScore += 1
    }
    // computer wins
    if (playerSelection == "rock" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "scissors" ||
    playerSelection == "scissors" && computerSelection == "rock") {
        var message = "You lose!";
        compScore += 1;
    }
}