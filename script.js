document.addEventListener("DOMContentLoaded", () => {

   
  
    const temp = document.getElementById("temp");
    const description = document.getElementById("status");

    const weatherInfo = document.querySelector(".weather-status");



    const cityName = document.getElementById("location");

    const searchButton = document.getElementById("search");

    searchButton.addEventListener("click", () => {

        const city = document.getElementById("location").value;
        if(city == "")
        {
            alert("Enter City To Get Temperature");
        }
        else 
        {
   
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b71be8aee5b3d4a93b5f98b6abef559c`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            const temperature = Math.round(data.main.temp -273.15);
            const description = data.weather[0].description;
            const cityName = data.name;

            console.log(data);

            const weatherHtml = 
            `
              <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
              <h1 id="city">${cityName}</h1>
              <h3><span id="temp">${temperature}</span>&deg;C</h3>
              <h1 id="status" class="lead">${description}</h1>`;

            weatherInfo.innerHTML = weatherHtml; 
        })
        .catch((err) => console.log(err));

        }
        
    });

});