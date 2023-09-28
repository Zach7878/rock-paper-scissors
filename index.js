let playerSelection;
let computerSelection;
function getComputerChoice(){
    let computerChoice=Math.floor(Math.random()*3)+1
    let computerChoiceWord;
    if (computerChoice===1){
        computerChoiceWord="rock";
    }
    else if (computerChoice===2){
        computerChoiceWord="paper";
    }
    else{
        computerChoiceWord="scissors";
    }
    return computerChoiceWord;
}
let score=0;

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt("Rock Paper or Scissors?","").toLowerCase();
    computerSelection = getComputerChoice();
    switch(playerSelection){
        case "rock":
            if (computerSelection==="rock"){
                console.log("tie rock and rock");
            }
            if(computerSelection==="paper"){
                console.log("you lose paper beats rock")
            }
            if(computerSelection==="scissors"){
                console.log("you win rock beats scissors")
                score++;
            }
            break;
        case "paper":
            if (computerSelection==="rock"){
                console.log("you win paper beats rock");
                score++;
            }
            if(computerSelection==="paper"){
                console.log("tie paper and paper")
            }
            if(computerSelection==="scissors"){
                console.log("you lose scissors beats paper")
            }
            break;
        case "scissors":
            if (computerSelection==="rock"){
                console.log("you lose rock beats scissors");
            }
            if(computerSelection==="paper"){
                console.log("you win scissors beats paper")
                score++;
            }
            if(computerSelection==="scissors"){
                console.log("tie scisssors and scissors")
            }
            break;
        default:
            console.log("thats not a valid choice stupid")
    }
  }
   
function game(){
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(score)
}
game()