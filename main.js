let playerScore = 0;
let botScore = 0;
let botSelection;
let playerSelection;


function botPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
    }

function playRound (playerSelection, botSelection) {
    botSelection = botPlay()
    playerSelection = prompt(`Choose rock, paper or scissors. `);

        if (playerSelection == 'rock' && botSelection == 'scissors' || playerSelection == 'paper' && botSelection == 'rock' || playerSelection == 'scissors' && botSelection == 'paper') {
            playerScore = ++playerScore;
            alert(`You win! ${playerSelection} beats ${botSelection}. The score is ${playerScore}-${botScore}.`)
        } else if (playerSelection == 'rock' && botSelection == 'paper' || playerSelection == 'paper' && botSelection == 'scissors' || playerSelection == 'scissors' && botSelection == 'rock') {
            botScore = ++botScore;
            alert(`You lose! ${botSelection} beats ${playerSelection}. The score is ${playerScore}-${botScore}.`)
        } else {
            alert(`It\'s a tie! You both chose ${playerSelection}. The score is ${playerScore}-${botScore}.`)
        }

        if (playerScore < 5 && botScore < 5) {
            playRound (playerSelection, botSelection)
        } else if (playerScore == 5) {
            alert('Game over, You win!!!')
        } else if (botScore == 5) {
            alert('Game over, You lost. :(')
        } else {
            alert('an error occured, please refresh the page.')
        }
    }

    playRound (playerSelection, botSelection)
