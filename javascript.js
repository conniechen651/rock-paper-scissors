// random generation of computer choice
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num==0){
        return "rock";
    } else if(num==1){
        return "paper";
    } else {
        return "scissors";
    }
}

let computerScore = 0;
let playerScore = 0;

// one round of a game
function playRound(playerSelection, computerSelection){
    if (computerSelection == "rock"){
        if (playerSelection == "rock"){
            return 0;
        } else if (playerSelection == "paper"){
            playerScore++;
            return 1;
        } else {
            computerScore++;
            return -1;
        }
    } else if (computerSelection == "paper"){
        if(playerSelection == "rock"){
            computerScore++;
            return -1;
        } else if (playerSelection == "paper") {
            return 0;
        } else {
            playerScore++;
            return 1;
        }
    } else {
        if (playerSelection == "rock") {
            playerScore++;
            return 1;
        } else if (playerSelection == "paper") {
            computerScore++;
            return -1;
        } else {
            return 0;
        }
    }
}

const btn = document.querySelector(".buttons");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const playerChoiceText = document.querySelector("#player-choice");
const computerChoiceText = document.querySelector("#computer-choice");

function createButtons() {
    const rockBtn = document.createElement("button");
    rockBtn.setAttribute("id","rock");
    rockBtn.textContent = "Rock";
    btn.appendChild(rockBtn);

    const paperBtn = document.createElement("button");
    paperBtn.setAttribute("id","paper");
    paperBtn.textContent = "Paper";
    btn.appendChild(paperBtn);

    const scissorsBtn = document.createElement("button");
    scissorsBtn.setAttribute("id","scissors");
    scissorsBtn.textContent = "Scissors";
    btn.appendChild(scissorsBtn);
}

createButtons();

btn.addEventListener("click", play);

function play(event) {
    let playerChoice = event.target.id;
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);

    playerChoiceText.textContent = `You chose: ${playerChoice}`;
    computerChoiceText.textContent = `Computer chose: ${computerChoice}`;

    playerScoreText.textContent = `Your score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;

    gameOver();

    const replayBtn = document.querySelector("#replay");
    replayBtn.addEventListener("click", replay);
};

const results = document.querySelector("#results");

// continue to play rounds until a player reaches 5 points
function gameOver(){
    if (playerScore == 5 || computerScore == 5){           
        if (playerScore > computerScore) {
            const win = document.createElement("p");
            win.textContent = "You win!";
            win.classList.add("win");
            results.appendChild(win);
        } else {
            const lose = document.createElement("p");
            lose.textContent = "You lose!";
            lose.classList.add("lose");
            results.appendChild(lose);
        }
    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    rockButton.remove();
    paperButton.remove();
    scissorsButton.remove();
    
    const replayBtn = document.createElement("button");
    replayBtn.setAttribute("id","replay");
    replayBtn.textContent = "🔁 Replay";
    results.appendChild(replayBtn);
    }
    
}

// reset the game
function replay(){
    computerScore = 0;
    playerScore = 0;

    document.getElementById("results").innerHTML = "";
    
    playerChoiceText.textContent = "";
    computerChoiceText.textContent = "";
    playerScoreText.textContent = `Your score: ${playerScore}`;
    computerScoreText.textContent = `Computer score: ${computerScore}`;

    createButtons();
}
