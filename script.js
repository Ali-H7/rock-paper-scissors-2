function getComputerChoice() {
    // random number 0, 1, 2
    const randomNumber = Math.floor(Math.random() * 3);;
    let choice;
    switch (randomNumber) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;

        case 2:
            choice = "scissors";
            break;

    }
    return choice;

};

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let roundResult;
    if (humanChoice === computerChoice) {
        roundResult = 0;
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
        roundResult = 1;
    } else {
        roundResult = 2;
    }
    return roundResult;
}

function playGame(humanChoice) {
    const result = playRound(humanChoice);
    handleRoundResult(result);
    if (humanScore === 5 || computerScore === 5) endGame();
}

function handleRoundResult(roundResult) {
    if (roundResult === 1) {
        humanScore++;
        updateLog(1)
        updateScores("player");
        console.log("The Player Wins this round");
    } else if (roundResult === 2) {
        updateLog(2)
        computerScore++;
        updateScores("computer");
        console.log("The Computer Win this round");
    } else {
        updateLog(0)
        console.log("It's a Tie!");
    }
}

function updateLog(result) {
    const log = document.querySelector(".game-log")
    const logElementCount = log.childElementCount;
    const logResult = document.createElement("p");

    logElementCount >= 5 && clearLog(log);

    if (result === 1) {
        logResult.textContent = "The Player Wins this round";
        log.appendChild(logResult);
    } else if (result === 2) {
        logResult.textContent = "The Computer Win this round";
        log.appendChild(logResult);
    } else {
        logResult.textContent = "It's a Tie!";
        log.appendChild(logResult);
    }
}

function clearLog(logElement) {
    while (logElement.firstChild) {
        logElement.removeChild(logElement.firstChild);
    }
}

function addEvents() {
    const rockBtn = document.querySelector(".rock-btn");
    const paperBtn = document.querySelector(".paper-btn");
    const scissorsBtn = document.querySelector(".scissors-btn");
    rockBtn.addEventListener("click", () => playGame("rock"));
    paperBtn.addEventListener("click", () => playGame("paper"));
    scissorsBtn.addEventListener("click", () => playGame("scissors"));
}

function updateScores(winner) {
    if (winner === "player") {
        const scoreElement = document.querySelector(".player-score");
        scoreElement.textContent = humanScore;
    } else {
        const scoreElement = document.querySelector(".computer-score");
        scoreElement.textContent = computerScore;
    }
}

function endGame() {
    announceWinner();
    addRestartBtn();
}

function addRestartBtn() {
    const rockBtn = document.querySelector(".rock-btn");
    const paperBtn = document.querySelector(".paper-btn");
    const scissorsBtn = document.querySelector(".scissors-btn");

    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart";
    restartBtn.addEventListener("click", () => restartEvenets(restartBtn, rockBtn, paperBtn, scissorsBtn));
    rockBtn.after(restartBtn);

    rockBtn.style.display = "none";
    paperBtn.style.display = "none";
    scissorsBtn.style.display = "none";
};

function announceWinner() {
    const log = document.querySelector(".game-log")
    const logResult = document.createElement("p");
    clearLog(log);

    if (humanScore === 5) {
        logResult.textContent = "The Player is the winner of the game";
    } else {
        logResult.textContent = "The Computer is the winner of the game";
    }
    log.appendChild(logResult);
}

function restartEvenets(restartBtn, rockBtn, paperBtn, scissorsBtn) {
    const log = document.querySelector(".game-log")
    rockBtn.style.display = "inline-block";
    paperBtn.style.display = "inline-block";
    scissorsBtn.style.display = "inline-block";
    restartBtn.remove();
    resetScore();
    clearLog(log);
}

function resetScore() {
    humanScore = 0;
    computerScore = 0;
    const scoreElementPlayer = document.querySelector(".player-score");
    scoreElementPlayer.textContent = humanScore;
    const scoreElementComputer = document.querySelector(".computer-score");
    scoreElementComputer.textContent = computerScore;
}

let humanScore = 0;
let computerScore = 0;
let gameStatus = false;
addEvents();