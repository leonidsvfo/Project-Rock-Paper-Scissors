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

const humanScore = 0;
const computerScore = 0;

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
        console.log("You Lose")
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win!")
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win!")
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose")
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose")
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win!")
    }
}    


/*
git fix: removed console.log in getHumanChoice function 
fix: removed console.log in getComputerChoice function 
add: argument in getComputerChoice "pcChoice"
*/