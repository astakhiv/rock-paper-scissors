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
    return ["Rock", "Paper", "Scissors"][choice];
}

