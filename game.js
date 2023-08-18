const arrChoices = ["rock", "paper", "scissors"];

function getComputerChoice()
{
    const computerChoice = arrChoices[Math.floor(Math.random() * arrChoices.length)];
    return computerChoice;
}

function playRound(playerSelection, computerChoice)
{
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock" && computerChoice == "paper")
    {
        console.log("You Lose! Paper beats Rock!");
    }
    
    else if(playerSelection == "rock" && computerChoice == "scissors"){
        console.log("You win! Rock beats Scissors!");
    }

    else if(playerSelection == "paper" && computerChoice == "rock"){
        console.log("You win! Paper beats Rock!");
    }

    else if(playerSelection == "paper" && computerChoice == "scissors"){
        console.log("You Lose! Scissors beats Paper!");
    }

    else if(playerSelection == "scissors" && computerChoice == "rock"){
        console.log("You Lose! Rock beats Scissors!");
    }

    else if(playerSelection == "scissors" && computerChoice == "paper"){
        console.log("You win! Scissors beats Paper!");
    }

    else{
        console.log("It's a draw!");
    }
}

const playerSelection = prompt("Enter your choice: ");
const computerChoice = getComputerChoice();

console.log(playRound(playerSelection, computerChoice));