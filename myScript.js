/*

Pseudocode of Rock, Paper, Scissors:

1. The console pick a random decision between Rock, Paper and scissors, that should be invisible to the player:

function getComputerChoise() {
    const result = Math.random() * 3 + 1 
    return Math.floor(result)
}

console.log(getComputerChoise())

2. The player should choice between Rock, Paper and Scissors;
3. Rock beats scissors and loses to paper;
4. Paper beats rock, but loses to scissors;
5. Scissors beat paper but loses to rock.
6. The winner should be shown once you pick your choice;


*/

function getComputerChoise() {
    const result = Math.floor(Math.random() * 3 + 1);
    switch (result) {
        case 1:
            console.log("Rock");
            break;
        case 2:
            console.log("Paper");
            break;
        case 3:
            console.log("Scissors");
            break;
    }
    return result
}

function getHumanChoice() {
    const result = prompt("Rock, Paper or Scissors?", "").toLowerCase();
    switch (result) {
        case "rock":
            console.log("You choose Rock");
        break;
        case "paper":
            console.log("You choose Paper");
        break;
        case "scissors":
            console.log("You choose Scissors");
        break;
        default:
            console.log("Invalid choice");
    }
    return result
}


