let userChoice;
let comChoice;

const options = ["rock", "paper", "scissors"];



/* function getComputerChoice(params) {
    return 
} */
function PlayRPS() {
    comChoice = options[Math.floor(Math.random() * options.length)];

    userChoice = prompt("Rock, paper, scissors?");
    userChoice = userChoice.toLowerCase()

    if (comChoice == userChoice) {
        console.log("DRAW.")
        alert(`Your choice was ${userChoice}, computer's choice was ${comChoice}, DRAW.`)
    } else if (userChoice == "rock" && comChoice == "paper" || userChoice == "paper" && comChoice =="scissors" || userChoice=="scissors" && comChoice == "rock") {
        console.log("YOU LOSE!")
        alert(`Your choice was ${userChoice}, computer's choice was ${comChoice}, YOU LOSE!`)
    } else if (comChoice == "rock" && userChoice == "paper" || comChoice == "paper" && userChoice =="scissors" || comChoice=="scissors" && userChoice == "rock") {
        console.log("YOU WIN!")
        alert(`Your choice was ${userChoice}, computer's choice was ${comChoice}, YOU WIN!`)
    } else {
        console.log("INVALID INPUT.")
        alert(`INVALID INPUT.`)
    }
}
