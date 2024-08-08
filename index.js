console.log("Hello, World");

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);
    
    return ["rock", "paper", "scissors"][choice];
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

function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}

function playRound(humanChoice, computerChoice) {
    let msg = ""; 
    if (humanChoice === computerChoice) {
        msg = "It is a tie";
    } else if (didHumanWin(humanChoice, computerChoice)){
        humanScore++;
        msg = `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}`;
    } else {
        computerScore++;
        msg = `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`;
    }
    
    const p = document.createElement("p");
    p.textContent = msg;

    msgs.appendChild(p);
    score.textContent = `Score: ${humanScore}:${computerScore}`;
}


function finishGame(buttons) {
    buttons.forEach(button => button.setAttribute("disabled", true));
   
    let msg = "";
    if (humanScore > computerScore) {
        msg = `You won with a score of ${humanScore}:${computerScore}`;
    } else {
        msg = `You lost with a score of ${humanScore}:${computerScore}`;
    }

    const p = document.createElement("p");
    p.textContent = msg;
    msgs.appendChild(p);
    score.textContent = msg;

}

let humanScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("button");
const msgs = document.querySelector(".messages");
const score = document.querySelector(".score");

buttons.forEach(button => {
    button.addEventListener('click', () => { 
        const computerChoice = getComputerChoice();
        const humanChoice = button.id;

        playRound(humanChoice, computerChoice);
        
        if (humanScore >= 5 || computerScore >= 5) {
            finishGame(buttons);
        }

    });
});
