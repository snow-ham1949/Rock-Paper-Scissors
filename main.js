const choices = ["Rock", "Paper", "Scissors"]

function RandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay() {
    let randomchoice = RandomNumber(2, 0);
    return choices[randomchoice];
}

function playsingleRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (computerSelection == playerSelection) {
        let msg = "Tie game!";
        return msg;
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper") ||
    (playerSelection == "paper" && computerSelection == "rock")) {
        let msg = "You win! " + playerSelection + " beats " + computerSelection;
        return msg;
    }
    else {
        let msg = "You lose! " + computerSelection + " beats " + playerSelection;
        return msg;       
    }
}

function game() {
    
    let playerScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Which one do you want to choose? (Rock | Paper | Scissors)");
        let computerSelection = computerPlay();
        let msg = playsingleRound(playerSelection, computerSelection);
        if (msg[4] == 'w') {
            ++playerScore;
        }
        else if (msg[4] == 'l') {
            ++computerScore;
        }
        alert(msg);
        let currentPointsMsg = "Your score: " + playerScore + ", computer score: " + computerScore;
        alert(currentPointsMsg);
    }
}

game();

// const playerSelection = "rock";
// const computerSelection = computerPlay();
// console.log(playsingleRound(playerSelection, computerSelection));