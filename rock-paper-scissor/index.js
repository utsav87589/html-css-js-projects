// Rock, paper and scissor game

const choices = ["rock", "paper", "scissor"];

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
 
const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");

let computer = 0;
let player = 0;

function playGame(playerChoice){

    const computerChoice  = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(playerChoice === computerChoice){
        result =  "It's a Tie!";
    }

    else{
        switch (playerChoice) {
            case ("rock"):
                result = (computerChoice === "paper") ? "You lose" : "You win!";
                break;

            case ("paper"):
                result = (computerChoice === "scissor") ? "You lose" : "You win!";
                break;

            case ("scissor"):
                result = (computerChoice === "rock") ? "You lose" : "You win!";
                break;
        }

    }

    playerDisplay.textContent = `Player choice : ${playerChoice}`;
    computerDisplay.textContent = `Computer choice : ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    switch(result){

        case "You win!":
            resultDisplay.classList.add("greenText");
            player++;
            playerScore.textContent = player;
            break;

        case "You lose":
            resultDisplay.classList.add("redText");
            computer++;
            computerScore.textContent = computer;
            break;

      
    }

}