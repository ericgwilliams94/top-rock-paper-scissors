// document variables
const container = document.getElementsByClassName("container");
const gameResult = document.getElementsByClassName("gameResult");
const playAgain = document.getElementById("playAgain");

// variables for functions
var userScore = 0;
var compScore = 0;


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
	if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
  return 'You lose! Scissors beats paper!';
  }
  else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
  return 'You win! Paper beats rock!';
  }
  else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
  return 'You win! Scissors beats paper!';
  }
  else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
  return 'You lose! Rock beats scissors!';
  }
  else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
  return 'Tie! You and the computer selected the same!';
  }
  else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
  return 'You win! Rock beats scissors!';
  }
  else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
  return 'You lose! Paper beats rock!';
  }
  else {
  return 'Invalid responses';
  }
}

// player select
const userPlay = document.querySelectorAll("#btn-choice");
userPlay.onclick = () => alert('BUTTON CLICKED');

// function to check for a winner
function isWinner() {
    if (userScore == 5  || compScore == 5) {
        /* 
        declare winner
        show play again button
        */
    }
}

// play again function
function anotherOne() {
    userScore = 0;
    compScore = 0;
    alert('Playing again');
}

// play again button
const btnPlayAgain = document.getElementById("btn-play-again");
btnPlayAgain.onclick = () => anotherOne();

// game();