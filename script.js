function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase == 'paper') {
        return 'You lose! Paper beats rock!';
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection.toLowerCase == 'scissors') {
        return 'You win! Rock beats paper!';
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection.toLowerCase == 'scissors') {
        console.log('You lose! Paper beats scissors!');
    } 
    else {
        return 0;
    }
}

playRound('paper', 'SCISSORS');