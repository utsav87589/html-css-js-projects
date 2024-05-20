//to fetch our number from the html
let count = document.getElementById("counterLabel").innerText;

//here, we converted our data type to number because initial data type was string
count = Number(count);


// we update the value when the button is pressed
document.getElementById("decreaseBtn").onclick = () => {
    count -= 1;
    // console.log(count, typeof count); this is to check our data type before updating the final value
    document.getElementById("counterLabel").textContent = count;
}

document.getElementById("resetBtn").onclick = () => {
    count = 0;
    document.getElementById("counterLabel").textContent = count;
}

document.getElementById("increaseBtn").onclick =() => {
    count += 1;
    document.getElementById("counterLabel").textContent = count;
}