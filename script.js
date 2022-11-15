
const weather = {
    city: "Warsaw",
    apiKey: "670c47e06a966cc34fbe6ea72f070c9d",
    fetchWeather: async function () {
        const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + this.city + "&units=metric&appid=" + this.apiKey)
        try {
            if (!response.ok)
                throw new Error(response.statusText);
            return this.displayWeather(await response.json());
        } catch (error) {
            console.log(error);
            document.querySelector(".city").textContent = `City "${this.city}" not found.`;
        }
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
    }
}


document.querySelector('#search_city').addEventListener('click', () => {
    let city = document.querySelector('#city_input').value;
    let notif = document.querySelector('.notif');
    if (city && city != '') {
        notif.textContent = null;
        weather.city = city;
        weather.fetchWeather();
    } else {
        notif.textContent = 'Enter city!'
    }
})


weather.fetchWeather()
