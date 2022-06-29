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

function game() {
    for (let i = 0; i < 5; i++) {
        var userPlay = prompt("Rock, paper, or scissors? ")
        computerPlay();
        console.log(playRound(userPlay.toLowerCase(), COMPCHOICE));
    }
}

// game();