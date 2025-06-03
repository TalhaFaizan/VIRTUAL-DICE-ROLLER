const dicefaces = ["\u2680","\u2681","\u2682","\u2683","\u2684","\u2685"];

function rollDice(){

const random = Math.floor(Math.random() * 6);
document.getElementById("dice").textContent = dicefaces[random];
}