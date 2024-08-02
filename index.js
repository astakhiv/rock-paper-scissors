console.log("Hello, World");

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    
    // Solution without array
    /*
    if (choice === 0) {
        return "Rock";
    } else if (choice === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
    */
    
    // Solution with array
    return ["rock", "paper", "scissors"][choice];
}

function getHumanChoice() {
    let choice;

    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        
        choice = prompt("Please, make a choice: Rock, Paper or Scissors").toLowerCase();
    }

    console.log(choice);
    return choice;
}

function didHumanWin(human, computer) {
    if (human === "rock" && computer === "scissors") {
        return true;
    } else if (human === "paper" && computer === "rock") {
        return true;
    } else if (human === "scissors" && computer === "paper") {
        return true;
    } else {
        return false;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It is a tie");
    } else if (didHumanWin(humanChoice, computerChoice)){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }

    console.log(`Score: ${humanScore}:${computerScore}`);
}

let humanScore = 0;
let computerScore = 0;

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
