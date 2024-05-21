//we will create a timer to get the time when we pressed the start button and when we pressed the other buttons we will keep track by subtracting value from current time

const display = document.getElementById("display");
let startTime = 0;
let elapsedTime = 0;
let timer = null;
let isRunning = false;

document.getElementById("startBtn").onclick = () =>{
    if(!isRunning){
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update,10);
    isRunning = true;
    }
}

document.getElementById("stopBtn").onclick = () =>{

    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

document.getElementById("resetBtn").onclick = () =>{
    display.textContent = "00:00:00:00";
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = flase;
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime/(1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime/(1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let miliSeconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    miliSeconds = String(miliSeconds).padStart(2 , 0);

    display.textContent = `${hours}:${minutes}:${seconds}:${miliSeconds}`;
   
}