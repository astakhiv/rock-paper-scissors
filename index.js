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
}
