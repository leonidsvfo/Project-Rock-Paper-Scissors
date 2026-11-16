/*

Pseudocode of Rock, Paper, Scissors:

1. The console pick a random decision between Rock, Paper and scissors, that should be invisible to the player:
2. The player should choice between Rock, Paper and Scissors;
3. Rock beats scissors;
4. paper beats rock
4. scissors beat paper;
5. rock rock parity
6. paper paper parity
7. scissors scissor parity
8. The winner should be shown once you pick your choice;



*/

// initial plater and computer scores
let humanScore = 0;
let computerScore = 0;


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

// user text choice between rock, paper and scissor (you can use both lowercase or uppurcase as text input)
function getHumanChoice() {
    const result = prompt("Rock, Paper or Scissors?", "").toLowerCase();
    switch (result) {
        case "rock":
        break;
        case "paper":
        break;
        case "scissors":
        break;
        default:
            console.log("Invalid choice");
    }
    return result
}

// one round of the game: after pc and the player choice, this function would add a score to the winner according to the game rules
function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoise();
    if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Parity")
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Parity")
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Parity")
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        ++computerScore && console.log(`You Lose, Paper beats Rock! Player Score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        ++humanScore && console.log(`You Win! Paper beats Rock! Player Score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        ++humanScore && console.log(`You Win! Scissors beats paper!  Player Score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        ++computerScore && console.log(`You Lose, Scissors beats paper! Player Score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        ++computerScore && console.log(`You Lose, Rock beats Scissors! Player Score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        ++humanScore && console.log(`You Win! Rock beats Scissors! Player Score: ${humanScore} Computer Score: ${computerScore}`);
    }
}

// the gameplay, the function would declare a winner after 5 rounds
function playGame () {
    let result = humanScore + computerScore
    playRound();
    while(result < 5) {
        playRound()
    }
    if (result = 5 && humanScore > computerScore) {
        console.log(`Game Over, You Win! Player Score: ${humanScore} Computer Score: ${computerScore}`);
    } else if (result = 5 && humanScore < computerScore) {
        console.log(`Game Over, You Lose! Player Score: ${humanScore} Computer Score: ${computerScore}`);
    }
    }

