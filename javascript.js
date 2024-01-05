// random generation of computer choice
function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if (num==0){
        return "Rock";
    } else if(num==1){
        return "Paper";
    } else {
        return "Scissors";
    }
}

// one round of a game
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toString().toLowerCase();
    computerSelection = computerSelection.toString().toLowerCase();
    if (computerSelection == "rock"){
        if (playerSelection == "rock"){
            return 0;
        } else if (playerSelection == "paper"){
            return 1;
        } else {
            return -1;
        }
    } else if (computerSelection == "paper"){
        if(playerSelection == "rock"){
            return -1;
        } else if (playerSelection == "paper") {
            return 0;
        } else {
            return 1;
        }
    } else {
        if (playerSelection == "rock") {
            return 1;
        } else if (playerSelection == "paper") {
            return -1;
        } else {
            return 0;
        }
    }
}


// 5 total rounds in a game (ties don't count as a round)
function game(){
    let computerScore = 0;
    let playerScore = 0;
    let numRounds = 5;
    for (let i = 0; i < numRounds; i++){
        let computerChoice = getComputerChoice();
        let round = playRound(prompt("Rock, paper, or scissors?"), computerChoice);
        console.log("Computer chooses: "+computerChoice);
        if (round < 0) {
            computerScore++;
        } else if (round > 0) {
            playerScore++;
        } else {
            numRounds++;
        }
        console.log("Your score: "+playerScore+"      Computer score: "+computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You win!");
    } else {
        console.log("You lose!");
    }
}

console.log(game());