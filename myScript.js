// initial plater and computer scores
let humanScore = 0;
let computerScore = 0;
let resultRound = ''
let result = document.querySelector('.result');
result.style.color = 'red';

// random pc choice between rock, paper and scissors
function getComputerChoise(pcChoice) {
    const caseNumber = Math.floor(Math.random() * 3 + 1);
    switch (caseNumber) {
        case 1:
            pcChoice = "rock"
            break;
        case 2:
            pcChoice = "paper"
            break;
        case 3:
            pcChoice = "scissors"
            break;
    }
    return pcChoice
}

// user choice between rock, paper and scissor with three buttons
const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    getHumanChoice = 'rock'
    playRound('rock');
    result.textContent = resultRound;
});
const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    getHumanChoice = 'paper'
    playRound('paper');
    result.textContent = resultRound;
});
const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    getHumanChoice = 'scissors'
    playRound('scissors');
    result.textContent = resultRound;
});


// one round of the game: this function would add a score to the winner according to the game rules

function playRound (getHumanChoice, computerChoice) {
    computerChoice = getComputerChoise();
    if (getHumanChoice === computerChoice) {
        resultRound = "Tie";
    } else if (getHumanChoice === "rock" && computerChoice === "paper" ||
            getHumanChoice === "paper" && computerChoice === "scissors" ||
            getHumanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore; 
        resultRound = `You Lose, ${computerChoice} beats ${getHumanChoice}! Player Score: ${humanScore} Computer Score: ${computerScore}`;
    } else if (getHumanChoice === "paper" && computerChoice === "rock" ||
            getHumanChoice === "scissors" && computerChoice === "paper" ||
            getHumanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore; 
        resultRound = `You Win! ${getHumanChoice} beats ${computerChoice}! Player Score: ${humanScore} Computer Score: ${computerScore}`;
    }
    if ((humanScore + computerScore === 5) && humanScore > computerScore) {
        resultRound = `Game Over, You Win! Player Score: ${humanScore} Computer Score: ${computerScore}`;
    } else if ((humanScore + computerScore === 5) && humanScore < computerScore) {
        resultRound =`Game Over, You Lose! Player Score: ${humanScore} Computer Score: ${computerScore}`;
    } else if (humanScore + computerScore > 5) {
        window.location.reload();
    }
}

// the gameplay, the function would declare a winner after 5 rounds


