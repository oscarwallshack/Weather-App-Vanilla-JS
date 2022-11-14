// const weatherEL = document.querySelector('.weather');

// function getWeather(url) {
//     return new Promise((resolve, reject) => {
//         let weather = fetch(url), {
//             "method": "GET",
//             "headers": {
//             }
//         })
//         .then(response => {
//             console.log(response);
//         })
//         .catch(err => {
//             console.error(err);
//         });
// })
// }


// getWeather(url)
//     .then(console.log(weather))





const weather = {
    city: "warsaw",
    apiKey: "670c47e06a966cc34fbe6ea72f070c9d",
    fetchWeather: async function () {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&units=metric&appid=" + this.apiKey)
        // .then((data) => console.log(data))
        return this.displayWeather(await response.json());
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").textContent = `Weather in ${name}`;
        document.querySelector(".temp").textContent = `${Math.floor(temp)}°C`;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}.png`;
        document.querySelector(".description").textContent = description;
        document.querySelector(".humidity").textContent = `Humidity: ${humidity}%`;
        document.querySelector(".wind").textContent = `Wind speed: ${speed}km/h`;

        console.log(speed)
    }

}
weather.fetchWeather()


