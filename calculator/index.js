//our calculator program, there is not much to write, we will use .eval() function
//which is kind of a built-in javascript function

const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = error;
    }
  
}