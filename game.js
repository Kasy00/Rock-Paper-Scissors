const startB = document.getElementById('start');
const gameSection = document.getElementById('game-section');
const playerPick = document.getElementById('playerPicked');
const computerPick = document.getElementById('computerPicked');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const showPlayerPick = document.getElementById('playerPick');
const showComputerPick = document.getElementById('computerPick');

let playerSelection = "";
let computerChoice = "";
let playerCounter = 0;
let computerCounter = 0;
let actualPlayerScore = document.getElementById('playerScore');
let actualComputerScore = document.getElementById('computerScore');

startB.addEventListener('click', () => {
    startB.style.display = 'none';
    gameSection.style.display = 'block';
    playerPick.style.display = 'block';
    computerPick.style.display = 'block';
    showPlayerPick.innerHTML = "";
    showComputerPick.innerHTML = "";
    playerCounter = 0;
    computerCounter = 0;
    actualPlayerScore.textContent = playerCounter.toString();
    actualComputerScore.textContent = computerCounter.toString();

});

rock.addEventListener('click', () => {
    playerSelection = "rock";
    computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
    //showPicks(playerSelection, computerChoice);
});

paper.addEventListener('click', () => {
    playerSelection = "paper";
    computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
    //showPicks(playerSelection, computerChoice);
});

scissors.addEventListener('click', () => {
    playerSelection = "scissors";
    computerChoice = getComputerChoice();
    playRound(playerSelection, computerChoice);
    //showPicks(playerSelection, computerChoice);
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
            playerPick.style.display = 'none';
            computerPick.style.display = 'none';
          }, 2000);

    }
    else if(computerCounter === 5){
        actualComputerScore.textContent = "WON";
        actualPlayerScore.textContent = "LOST";
        setTimeout(() => {
            startB.style.display = 'block';
            gameSection.style.display = 'none';
            playerPick.style.display = 'none';
            computerPick.style.display = 'none';
          }, 2000);

    }
}

function playRound(playerSelection, computerChoice){
    if(playerSelection == "rock" && computerChoice == "paper")
    {
        computerCounter++;
        actualComputerScore.textContent = computerCounter.toString();
        showPicks(playerSelection, computerChoice);
        showComputerPick.style.color = "green";
        showPlayerPick.style.color = "red";
    }
    
    else if(playerSelection == "rock" && computerChoice == "scissors"){

        playerCounter++;
        actualPlayerScore.textContent = playerCounter.toString();
        showPicks(playerSelection, computerChoice);
        showComputerPick.style.color = "red";
        showPlayerPick.style.color = "green";
    }

    else if(playerSelection == "paper" && computerChoice == "rock"){
        playerCounter++;
        actualPlayerScore.textContent = playerCounter.toString();
        showPicks(playerSelection, computerChoice);
        showComputerPick.style.color = "red";
        showPlayerPick.style.color = "green";
    }

    else if(playerSelection == "paper" && computerChoice == "scissors"){
        computerCounter++;
        actualComputerScore.textContent = computerCounter.toString();
        showPicks(playerSelection, computerChoice);
        showComputerPick.style.color = "green";
        showPlayerPick.style.color = "red";
    }

    else if(playerSelection == "scissors" && computerChoice == "rock"){
        computerCounter++;
        actualComputerScore.textContent = computerCounter.toString();
        showPicks(playerSelection, computerChoice);
        showComputerPick.style.color = "green";
        showPlayerPick.style.color = "red";
    }

    else if(playerSelection == "scissors" && computerChoice == "paper"){
        playerCounter++;
        actualPlayerScore.textContent = playerCounter.toString();
        showPicks(playerSelection, computerChoice);
        showComputerPick.style.color = "red";
        showPlayerPick.style.color = "green";
    }
    else{
        showPicks(playerSelection, computerChoice);
        showComputerPick.style.color = "black";
        showPlayerPick.style.color = "black";
    }

    checkResult();
}

function showPicks(playerSelection, computerChoice){
    showPlayerPick.innerHTML = playerSelection;
    showComputerPick.innerHTML = computerChoice;
}