const startB = document.getElementById('start');
const gameSection = document.getElementById('game-section');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

let playerSelection = "";
let computerChoice = "";
let playerCounter = 0;
let computerCounter = 0;
let actualPlayerScore = document.getElementById('playerScore');
let actualComputerScore = document.getElementById('computerScore');

startB.addEventListener('click', () => {
    startB.style.display = 'none';
    gameSection.style.display = 'block';
    playerCounter = 0;
    computerCounter = 0;
    actualPlayerScore.textContent = playerCounter.toString();
    actualComputerScore.textContent = computerCounter.toString();
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

function checkResult(){
    if(playerCounter === 5){
        actualComputerScore.textContent = "LOST";
        actualPlayerScore.textContent = "WON";
        setTimeout(() => {
            startB.style.display = 'block';
            gameSection.style.display = 'none';
          }, "2000");

    }
    else if(computerCounter === 5){
        actualComputerScore.textContent = "WON";
        actualPlayerScore.textContent = "LOST";
        setTimeout(() => {
            startB.style.display = 'block';
            gameSection.style.display = 'none';
          }, "2000");

    }
}

function playRound(playerSelection, computerChoice){
    if(playerSelection == "rock" && computerChoice == "paper")
    {
        computerCounter++;
        actualComputerScore.textContent = computerCounter.toString();
    }
    
    else if(playerSelection == "rock" && computerChoice == "scissors"){

        playerCounter++;
        actualPlayerScore.textContent = playerCounter.toString();
    }

    else if(playerSelection == "paper" && computerChoice == "rock"){
        playerCounter++;
        actualPlayerScore.textContent = playerCounter.toString();
    }

    else if(playerSelection == "paper" && computerChoice == "scissors"){
        computerCounter++;
        actualComputerScore.textContent = computerCounter.toString();
    }

    else if(playerSelection == "scissors" && computerChoice == "rock"){
        computerCounter++;
        actualComputerScore.textContent = computerCounter.toString();
    }

    else if(playerSelection == "scissors" && computerChoice == "paper"){
        playerCounter++;
        actualPlayerScore.textContent = playerCounter.toString();
    }

    checkResult();
}