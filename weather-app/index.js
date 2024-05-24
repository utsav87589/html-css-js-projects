//our weather program using API

const button = document.getElementById("button");

const apiKey = "8a98fbaedec8a71467ca11f0f7f8e79b";


button.onclick = () =>{

    const cityName = document.getElementById("city").value.toLowerCase();
    fetchWeather(cityName);

}



async function fetchWeather(city) {

    try {

        //first we fetch longitude and latitude using the fetch api then use those co-ordinates to fetch other
        //elements like temp, humidity etc... using another fetch api request
        
        
        //first api fetch request
        const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
        
        if (!response.ok) {
            throw new Error("couldn't fetch resource");
        }
        //data from fetch 1
        let data = await response.json();

        //secoind api fetch request
        const response1 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${apiKey}&units=metric`);

        //data from fetch 2
        let data1 = await response1.json();

        console.log(data);
        console.log(data[0].lon);
        console.log(data[0].lat);

        console.log(data1);
        console.log(data1.main.temp);
        console.log(data1.main.humidity);
        console.log(data1.weather[0].main);

        document.getElementById("lon").textContent = `longitude : ${data[0].lon}`;
        document.getElementById("lat").textContent = `latitude : ${data[0].lat}`;

        document.getElementById("temp").textContent = `temperature in celcius : ${data1.main.temp}`;
        document.getElementById("humidity").textContent = `relative humidity : ${data1.main.humidity}`;
        document.getElementById("cloudy").textContent = `clouds : ${data1.weather[0].main}`;



    }

    catch (error) {
        console.error(error);
    }

}

