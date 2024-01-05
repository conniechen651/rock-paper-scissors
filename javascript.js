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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (computerSelection == "rock"){
        if (playerSelection == "rock"){
            return "Tie!";
        } else if (playerSelection == "paper"){
            return "You win! Paper beats rock!";
        } else {
            return "You lose! Rock beats scissors.";
        }
    } else if (computerSelection == "paper"){
        if(playerSelection == "rock"){
            return "You lose! Paper beats rock.";
        } else if (playerSelection == "paper") {
            return "Tie!";
        } else {
            return "You win! Scissors beats paper!";
        }
    } else {
        if (playerSelection == "rock") {
            return "You win! Rock beats scissors!";
        } else if (playerSelection == "paper") {
            return "You lose! Scissors beats paper";
        } else {
            return "Tie!";
        }
    }
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));