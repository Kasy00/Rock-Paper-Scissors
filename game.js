const startB = document.getElementById('start');
const gameSection = document.getElementById('game-section');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
let playerSelection = "";
let computerChoice = "";

startB.addEventListener('click', () => {
    startB.style.display = 'none';
    gameSection.style.display = 'block';
});

rock.addEventListener('click', () => {
    playerSelection = "rock";
    computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
});

paper.addEventListener('click', () => {
    playerSelection = "paper";
    computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
});

scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
});

const arrChoices = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    const computerChoice = arrChoices[Math.floor(Math.random() * arrChoices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerChoice){
    if(playerSelection == "rock" && computerChoice == "paper")
    {
        console.log("You Lose! Paper beats Rock!");
        return "computer";
    }
    
    else if(playerSelection == "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock beats Scissors!");
        return "player";
    }

    else if(playerSelection == "paper" && computerChoice == "rock"){
        console.log("You Win! Paper beats Rock!");
        return "player";
    }

    else if(playerSelection == "paper" && computerChoice == "scissors"){
        console.log("You Lose! Scissors beats Paper!");
        return "computer";
    }

    else if(playerSelection == "scissors" && computerChoice == "rock"){
        console.log("You Lose! Rock beats Scissors!");
        return "computer";
    }

    else if(playerSelection == "scissors" && computerChoice == "paper"){
        console.log("You Win! Scissors beats Paper!");
        return "player";
    }

    else{
        console.log("It's a draw!");
    }
}