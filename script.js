let humanScore = 0;
let computerScore = 0;

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
    humanChoice.toLowerCase();
    let roundResult;
    if (humanChoice === computerChoice) {
        humanScore++;
        computerScore++;
        roundResult = "Tie!";
    } else if ((humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper") || (humanChoice === "rock" && computerChoice === "scissors")) {
        humanScore++;
        roundResult = "Player Wins!";
    } else {
        computerScore++;
        roundResult = "Computer Wins!";

    }
    return roundResult;
}
