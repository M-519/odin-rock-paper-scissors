console.log("test");

function getComputerChoice () {
    var pcChoice = (Math.floor(Math.random()*3)+1);
    if (pcChoice === 1) {return "rock"};
    if (pcChoice === 2) {return "paper"};
    if (pcChoice === 3) {return "scissors"};
} 

function getPlayerChoice() {
    var playerSelection = prompt("Please select rock, paper or scissors", "here").toLowerCase();
    return playerSelection;
}

function playRound(a, b) {
    var pcChoice = getComputerChoice();
    console.log(`Hint, the computer chose ${pcChoice}`);

    var playerSelection = getPlayerChoice();

    if (playerSelection == pcChoice) {console.log("Draw")}
    else {
        if (playerSelection == "rock" && pcChoice == "paper") 
        {console.log("Player loses, due to Rock vs Paper");
        b++;}
        
        if (playerSelection == "rock" && pcChoice == "scissors") 
        {console.log("Player wins, due to Rock vs Scissors");
        a++;}
    
        if (playerSelection == "paper" && pcChoice == "rock") 
        {console.log("Player wins, due to Paper vs Rock");
        a++;}

        if (playerSelection == "paper" && pcChoice == "scissors") 
        {console.log("Player loses, due to Paper vs Scissors");
        b++;}

        if (playerSelection == "scissors" && pcChoice == "rock") 
        {console.log("Player loses, due to Scissors vs Rock");
        b++;}

        if (playerSelection == "scissors" && pcChoice == "paper") 
        {console.log("Player wins, due to Scissors vs Paper");
        a++;}
    }
}

// add loop
var pcWins = 0, playerWins = 0;
playRound(pcWins, playerWins);
playRound(pcWins, playerWins);
playRound(pcWins, playerWins);
playRound(pcWins, playerWins);
playRound(pcWins, playerWins);

console.log(`Result: ${pcWins} for the machine, to ${playerWins} for the player`)
    if (pcWins > playerWins) {console.log("The machine wins")}
    else if (pcWins < playerWins) {console.log("The player wins")}
    else {console.log("It's a draw!")}