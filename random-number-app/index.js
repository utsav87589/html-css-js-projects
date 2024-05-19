//in the versoin v2 of this project we will add a tracker and number so far we guessed using an array.

// creating out minimum number and maximum numbers alongisde control statement for the loop
const min = 1;
const max = 100;
let running = true;

//our random number
let answer = Math.floor(Math.random() * 100 + 1);


//targeting html elements to fetch data and change it
let text = document.getElementById("text");



//function to while the guess button is clicked
const guess = document.getElementById("guessBtn");
guess.onclick = function() {
    check();
}


//function to check our guessed number with the random number generated
function check() {

    const userNum = document.getElementById("inputNum");
    let guessNum;
    guessNum = Number(userNum.value);

    // console.log(guessNum, typeof (guessNum));
    // console.log(answer);

    if (guessNum > 100 || guessNum < 0) {
        text.innerHTML = "Enter a valid number";
    }
    else {
        if (guessNum > answer) {
            text.innerHTML = "Your guess is high";
        }
        else if (guessNum < answer) {
            text.innerHTML = "Your guess is bit low";
        }
        else {
            text.innerHTML = `congratulations, you are right!`;
        }
    }    
    
}   