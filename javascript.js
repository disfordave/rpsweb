let userChoice 
const choices = [1, 2, 3];
let comChoice

comChoice=choices[Math.floor(Math.random() * choices.length)];

console.log(`let’s play rock, paper, scissors. Press 1 for ‘rock’, press 2 for ‘paper’, press 3 for ‘scissors’`)

userChoice = prompt(`Press 1 for ‘rock’, press 2 for ‘paper’, press 3 for ‘scissors’`);

if (userChoice == 1) {
    console.log("You chose Rock.")
  if (comChoice == 1) {
    console.log("Computer choice was Rock.")
    console.log("Draw.")
  } else if (comChoice == 2) {
    console.log("Computer choice was Paper.")
    console.log("You lose!")
  } else if (comChoice == 3) {
    console.log("Computer choice was Scissors.")
    console.log("You Win!")
  } else {
    console.log("Invalid input.")
  }
} else if (userChoice == 2) {
    console.log("You chose Paper.")
    if (comChoice == 1) {
        console.log("Computer choice was Rock.")
        console.log("You Win!")
    } else if (comChoice == 2) {
        console.log("Computer choice was Paper.")
        console.log("Draw")
    } else if (comChoice == 3) {
        console.log("Computer choice was Scissors.")
        console.log("You lose!")
    } else {
    console.log("Invalid input.")
  }
}   else if (userChoice == 3) {
        console.log("You chose Scissors.")
        if (comChoice == 1) {
            console.log("Computer choice was Rock.")
            console.log("You lose!")
        } else if (comChoice == 2) {
            console.log("Computer choice was Paper.")
            console.log("You Win!")
        } else if (comChoice == 3) {
            console.log("Computer choice was Scissors.")
            console.log("Draw.")
        } else {
    console.log("Invalid input.")
  }
}