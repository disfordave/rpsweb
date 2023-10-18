let userChoice;
let comChoice;

const options = ["rock", "paper", "scissors"];

let attempts = 0;
let win = 0;
let draw = 0;
let lose = 0;

const result = document.getElementById("result-p");


/* function getComputerChoice(params) {
    return 
} */

function getLocalStorage() {
    attempts = Number(localStorage.getItem("attempts"));
    win = Number(localStorage.getItem("win"));
    draw = Number(localStorage.getItem("draw"));
    lose = Number(localStorage.getItem("lose"));
    updateScoreboard();
}

getLocalStorage();




function updateScoreboard() {
    
    document.getElementById("attempts").innerHTML = attempts;
    document.getElementById("win").innerHTML = win;
    document.getElementById("draw").innerHTML = draw;
    document.getElementById("lose").innerHTML = lose;
    
}

function setLocalStorage() {
    localStorage.setItem("attempts", attempts);
    localStorage.setItem("win", win);
    localStorage.setItem("draw", draw);
    localStorage.setItem("lose", lose);
}

const confirmAction = () => {
    const response = confirm("Are you sure you want to reset the scoreboard?");
    if (response) {
        localStorage.clear();
        getLocalStorage();
        result.innerHTML = "Choose one!"
    } else {
        return
    }
}

document.getElementById("reset-result-button").addEventListener("click", confirmAction);


const rockBtn = document.getElementById("rock-button");
const paperBtn = document.getElementById("paper-button");
const scissorsBtn = document.getElementById("scissors-button");



rockBtn.addEventListener("click", rockButton);
paperBtn.addEventListener("click", paperButton);
scissorsBtn.addEventListener("click", scissorsButton)

function rockButton() {
    userChoice = "rock";
    playRPS();
}
function paperButton() {
    userChoice = "paper";
    playRPS();
}
function scissorsButton() {
    userChoice = "scissors";
    playRPS();
}


function playRPS() {
    comChoice = options[Math.floor(Math.random() * options.length)];

    /*userChoice = prompt("Rock, paper, scissors?");
    userChoice = userChoice.toLowerCase()*/
    attempts += 1;

    if (comChoice == userChoice) {
        console.log("DRAW.")
        result.innerHTML = `Your choice was ${userChoice}, computer's choice was ${comChoice}, DRAW.`;
        draw += 1;
    } else if (userChoice == "rock" && comChoice == "paper" || userChoice == "paper" && comChoice =="scissors" || userChoice=="scissors" && comChoice == "rock") {
        console.log("YOU LOSE!")
        result.innerHTML = `Your choice was ${userChoice}, computer's choice was ${comChoice}, YOU LOSE!`;
        lose += 1;
    } else if (comChoice == "rock" && userChoice == "paper" || comChoice == "paper" && userChoice =="scissors" || comChoice=="scissors" && userChoice == "rock") {
        console.log("YOU WIN!")
        result.innerHTML = `Your choice was ${userChoice}, computer's choice was ${comChoice}, YOU WIN!`;
        win += 1;
    } else {
        console.log("INVALID INPUT.")
        result.innerHTML = `INVALID INPUT.`;
    }

    updateScoreboard();
    setLocalStorage();
}
