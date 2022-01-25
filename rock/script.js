let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    let num = Math.floor(Math.random()* 3);
    return ["rock", "paper", "scissors"][num];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!"
    }
    let player = playerSelection.toLowerCase();
    if (player == "rock") return computerSelection == "paper" ? computerWin(player, computerSelection) : playerWin(player, computerSelection);
    if (player == "paper") return computerSelection == "scissors" ? computerWin(player, computerSelection) : playerWin(player, computerSelection);
    if (player == "scissors") return computerSelection == "rock" ? computerWin(player, computerSelection) : playerWin(player, computerSelection);
} 

function game() {
    let playerSelection = prompt("What do you play?")
    console.log(playRound(playerSelection, computerPlay()));
    console.log("You: " + playerScore + " " + "Computer: " + computerScore);
    let playAgain = prompt("Play again?");
    if (playAgain.toLowerCase() == "yes") {
        game();
    }
}
function playerWin(playerSelection, computerSelection) {
    playerScore += 1;
    return `You win! ${playerSelection} beats ${computerSelection}`;
}

function computerWin(playerSelection, computerSelection) {
    computerScore += 1;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
}