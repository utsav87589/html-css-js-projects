// we will declare a function for the random number generations and modifying the inner html and we will call that funciton in the another onclick function of the button onclick

document.getElementById("rollDice").onclick = () => {
    diceRoll();
}

function diceRoll(){
    //fetching our number of dice value
    const numOfDice = document.getElementById("numOfDice").value;

    //to show oue images and dice rolls
    const diceResult =  document.getElementById("diceResults");
    const diceImage = document.getElementById("diceImages");

    //our result and image array to store the values
    const values = [];
    const images = [];

    //generating our dice rolls using the loops
    for(let i = 0; i<numOfDice;i++){
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="images/${value}.png">`)
    }

    diceResult.innerText = `dice : ${values.join(' , ')}`;
    diceImage.innerHTML = images.join(' ');
}