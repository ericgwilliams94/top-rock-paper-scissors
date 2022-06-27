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

playRound('paper', 'SCISSORS');