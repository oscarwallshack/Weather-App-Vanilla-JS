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


const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const icon = document.querySelector(".icon");
const description = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");


const weather = {
    apiKey: "670c47e06a966cc34fbe6ea72f070c9d",
    fetchWeather: async function (city) {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        // .then((data) => console.log(data))
        return this.displayWeather(await response.json());
        // console.log(data)
    },

    displayWeather: function (data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main
        const { wind } = data.wind
        console.log(name, description)

    }

}

weather.fetchWeather("warsaw")

