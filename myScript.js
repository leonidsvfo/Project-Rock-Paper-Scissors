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
    const result = Math.random() * 3 + 1; 
    return Math.floor(result);
}

console.log(getComputerChoise())