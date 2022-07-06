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
  compScore += 1;
  }
  else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
  return 'You win! Paper beats rock!';
  userScore += 1;
  }
  else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
  return 'You win! Scissors beats paper!';
  userScore += 1;
  }
  else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
  return 'You lose! Rock beats scissors!';
  compScore += 1;
  }
  else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
  return 'Tie! You and the computer selected the same!';
  }
  else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
  return 'You win! Rock beats scissors!';
  userScore += 1;
  }
  else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
  return 'You lose! Paper beats rock!';
  compScore += 1;
  }
  else {
  return 'Invalid responses';
  }
}

// player select
rock.onclick = () => alert('ROCK CLICKED');
paper.onclick = () => alert('PAPER CLICKED');
scissors.onclick = () => alert('SCISSORS CLICKED');

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
    // reset scores
    userScore, compScore = 0;
    // update scores on screen
    // run game script
}

// play again button
const btnPlayAgain = document.getElementById("btn-play-again");
btnPlayAgain.onclick = () => anotherOne();

/* 
while user score or compuer score not equal to 5
listen for user selection,
generate comp selection & play game,
display result and add score approriately
check for winner, display winner if met
*/
function game() {
    return 'Waiting for input...';
}
