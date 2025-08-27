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

function getHumanChoice() {
    return prompt("What's your choice rock, paper, scissors?");
};

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let gameStatus = true;

    while (gameStatus) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const roundResult = playRound(humanSelection, computerSelection);

        if (roundResult === 1) {
            humanScore++;
            console.log("The Player Wins this round");
        } else if (roundResult === 2) {
            computerScore++;
            console.log("The Computer Win this round");
        };

        if (humanScore === 5) {
            gameStatus = false;
            console.log("The Player is the winner of the game");
        } else if (computerScore === 5) {
            gameStatus = false;
            console.log("The Computer is the winner of the game");

        }
    }

}

playGame(); 