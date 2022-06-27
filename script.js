var COMPCHOICE = -1;

function computerPlay () {
    var choice = Math.floor(Math.random() * 3)

    if (choice == 0) {
        COMPCHOICE = 'rock'
    }
    else if (choice = 1) {
        COMPCHOICE = 'paper'
    }
    else {
        COMPCHOICE = 'scissors'
    }
}

computerPlay()


function playRound(playerSelection, computerSelection) {
	if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'scissors') {
  return 'Loser'
  }
  else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase() == 'rock') {
  return 'Winner'
  }
  else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'paper') {
  return 'Winner'
  }
  else if (playerSelection.toLowerCase() == 'scissors' && computerSelection.toLowerCase() == 'rock') {
  return 'Loser'
  }
  else if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
  return 'Tie'
  }
  else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'scissors') {
  return 'Winner'
  }
  else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase() == 'paper') {
  return 'Loser'
  }
  else {
  return 'Invalid responses'
  }
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound('paper', COMPCHOICE)
    }
}

console.log(game())