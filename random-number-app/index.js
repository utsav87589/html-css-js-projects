//in the versoin v2 of this project we will add a tracker and number so far we guessed using an array.

// creating out minimum number and maximum numbers alongisde control statement for the loop
const min = 1;
const max = 100;
let running = true;

//our tracker
let guessed = [];

//our random number
let answer = Math.floor(Math.random() * 100 + 1);


//targeting html elements to fetch data and change it
let text = document.getElementById("text");

//function to while the guess button is clicked
document.getElementById("guessBtn").onclick = () => {
    check();
}


//function to check our guessed number with the random number generated
function check() {

    const userNum = document.getElementById("inputNum");
    let guessNum;
    guessNum = Number(userNum.value);

    if (guessNum > 100 || guessNum < 0) {
        text.innerHTML = "Enter a valid number";
    }
    else {
        if (guessNum > answer) {
            text.innerHTML = "Your guess is high";
            guessed.push(guessNum);
        }
        else if (guessNum < answer) {
            text.innerHTML = "Your guess is bit low";
            guessed.push(guessNum);
        }
        else {
            text.innerHTML = `congratulations, you are right!, you took ${guessed.length} attempts`;
        }
    }    
    
}

document.getElementById("hint").onclick = () => {
    document.getElementById("hintNum").textContent = `guessed number so far : ${[...guessed]}`;
}