let playerScore = 0;
let botScore = 0;
let botSelection;
let playerSelection;

const btn = document.querySelectorAll('#btn');
const scoreDisplayYou = document.querySelector('.scoredisplayyou');
const scoreDisplayBot = document.querySelector('.scoredisplaybot');
const alertBox = document.querySelector('.alertbox');

scoreDisplayYou.textContent = '0';
scoreDisplayBot.textContent = '0';


for (let i = 0 ; i < btn.length; i++) {
    btn[i].addEventListener('click', () => {
        if (i === 0) {
            playerSelection = 'rock';
        } else if (i === 1) {
            playerSelection = 'paper';
        } else if (i === 2) {
            playerSelection = 'scissors';
        }

        playRound (playerSelection, botSelection)
    });
}


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
    if (playerScore == 5 || botScore == 5) {
        playerScore = 0;
        botScore = 0;
    }

    botSelection = botPlay()
    alertBox.textContent = ''

        if (playerSelection == 'rock' && botSelection == 'scissors' || playerSelection == 'paper' && botSelection == 'rock' || playerSelection == 'scissors' && botSelection == 'paper') {
            playerScore = ++playerScore;
            alertBox.textContent = `You win! ${playerSelection} beats ${botSelection}.`;
        } else if (playerSelection == 'rock' && botSelection == 'paper' || playerSelection == 'paper' && botSelection == 'scissors' || playerSelection == 'scissors' && botSelection == 'rock') {
            botScore = ++botScore;
            alertBox.textContent = `You lose! ${botSelection} beats ${playerSelection}.`;
        } else {
            alertBox.textContent = `It\'s a tie! You both chose ${playerSelection}.`;
        }

        scoreDisplayYou.textContent = `${playerScore}`
        scoreDisplayBot.textContent = `${botScore}`


        if (playerScore == 5) {
            alertBox.textContent = 'YOU WIN! Choose any option to play again.'
        }
         if (botScore == 5) {
            alertBox.textContent = 'You lost. Choose any option to try again.'
        } 
    
    }

    
    
    
    