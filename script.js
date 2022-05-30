
function computerPlay(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let randChoice = Math.floor(Math.random() * choices.length);

    console.log(choices[randChoice]);

}

let playerSelection = 'rock';
let computerSelection = 'scissors';

function playGame(playerSelection, computerSelection){
    
    if (playerSelection == 'rock') {
        console.log('you win')
    } 
    else {
        console.log('fail')
    }

}

playGame(playerSelection, computerSelection);