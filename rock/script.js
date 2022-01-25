let playerScore = 0;
let computerScore = 0;
function computerPlay() {
    let num = Math.floor(Math.random()* 3);
    const compChoice = ["Rock", "Paper", "Scissors"][num];
    document.querySelector(".comp-choice").innerText = `Computer plays ${compChoice}`;
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    document.querySelector(".player-choice").innerText = `Player plays ${playerSelection}`;
    if (playerSelection == computerSelection) {
        document.querySelector(".results").innerHTML = "It's a tie!"
        return;
    }
    let player=playerSelection;
    if (player == "Rock") computerSelection == "Paper" ? computerWin(player, computerSelection) : playerWin(player, computerSelection);
    if (player == "Paper") computerSelection == "Scissors" ? computerWin(player, computerSelection) : playerWin(player, computerSelection);
    if (player == "Scissors") computerSelection == "Rock" ? computerWin(player, computerSelection) : playerWin(player, computerSelection);
    document.querySelector(".score").innerText = `Player: ${playerScore} Computer: ${computerScore}`;
} 

function game() {
    document.querySelector(".text").innerText = "What do you play?"
    const choice = document.querySelector(".choice");
    choice.appendChild(div);
}

function playerWin(playerSelection, computerSelection) {
    playerScore += 1;
    document.querySelector(".results").innerHTML =`You win! ${playerSelection} beats ${computerSelection}`;
}

function computerWin(playerSelection, computerSelection) {
    computerScore += 1;
    document.querySelector(".results").innerHTML = `You lose! ${computerSelection} beats ${playerSelection}`;
}

const start = document.querySelector(".start");
start.addEventListener("click", game, {once:"true"});

const div = document.createElement("div");
const rock = document.createElement("button");
rock.innerHTML = "Rock";
const scissors = document.createElement("button");
scissors.innerHTML = "Scissors";
const paper = document.createElement("button");
paper.innerHTML = "Paper";
div.appendChild(rock);
div.appendChild(paper);
div.appendChild(scissors);

scissors.addEventListener("click", () => playRound("Scissors", computerPlay() ));
rock.addEventListener("click", () => playRound("Rock", computerPlay() ));
paper.addEventListener("click", () => playRound("Paper", computerPlay() ));