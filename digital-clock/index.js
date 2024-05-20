//our clock program

function time(){
    //current time
    const now = new Date();

    let hours = now.getHours();
    let meridiem;
    meridiem =  hours >= 12 ? "PM" : "AM"; 
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);

    const minutes = now.getMinutes().toString().padStart(2 , 0);
    const seconds = now.getSeconds().toString().padStart(2 , 0);

    const currentTime = `${hours}:${minutes}:${seconds} ${meridiem}`;

    document.getElementById("clock").textContent = currentTime;
}

time();
setInterval(time, 1000);