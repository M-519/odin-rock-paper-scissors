console.log("test");



function getComputerChoice () {
    var pcChoice =  (Math.floor(Math.random()*3)+1);
    if (pcChoice === 1) {return "Rock"};
    if (pcChoice === 2) {return "Paper"};
    if (pcChoice === 3) {return "Scissors"};
} 

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
