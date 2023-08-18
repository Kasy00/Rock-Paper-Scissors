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

function game()
{
    let computerCounter = 0,
        playerCounter = 0;
    for(let i = 0; i < 5; i++)
    {
        let computerChoice = getComputerChoice();
        let playerSelection = prompt("Enter your choice: ");
        let result = playRound(playerSelection, computerChoice);

        if(result == "computer")
            computerCounter++;
        else if(result == "player")
            playerCounter++;
    }
    if(computerCounter > playerCounter)
        console.log("Computer has won!");
    else
        console.log("You won!");
}

game();