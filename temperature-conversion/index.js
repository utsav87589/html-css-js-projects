//for our output
let output = document.getElementById("result");

//checking which option is selected by the user
const toFarenight = document.getElementById("toFarenight");
const toCelcius = document. getElementById("toCelcius");

//our submit button
const submit = document.getElementById("submit");

//our function after submit button is pressed
submit.onclick = function(){
    converter();
}

//declaring our coverter function that will be called when we press the submit button inside of other function
function converter() {

    // getting out input value
    let num = document.getElementById("temperature");
    let value;
    value = Number(num.value);

    //our answer value
    let temp;


    if(toFarenight.checked){
        temp = (value * 9)/5 + 32;
        output.innerHTML = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked){
        temp = (value-32) * 5/9;
        output.innerHTML = temp.toFixed(1) + "°C";
    }
    else{
        output.innerHTML = `Please enter a value and select a unit first`;
    }

}