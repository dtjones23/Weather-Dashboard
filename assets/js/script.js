const APIKey = "6b921455bb49da4e229fc94fe9a6d008"
const requestURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q="
const futureForecastURL = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q="

async function getWeather(city) {
    // fetching current weather conditions
    const response = await fetch(requestURL + city + `&appid=${APIKey}`);
    var data = await response.json();

    console.log(data);

    // sets the innerHTML for the city name class
    document.getElementById("city-name").innerHTML = data.name + dayjs().format(' (MM/DD/YYYY)');
    document.getElementById("temp").innerHTML = "Temp: " + Math.round(data.main.temp) + " °F";
    document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + " mph";
    document.getElementById("humid").innerHTML = "Humidity: " + data.main.humidity + " %";

}
async function futureWeather(city) {
    // fetching future weather conditions
    try {
        const response = await fetch(futureForecastURL + city + `&appid=${APIKey}`)
        if (!response.ok) {
            throw new Error("Network reponse was not ok")
        }
        const data = await response.json();

        // create container for future weather box
        const futureWeatherContainer = document.getElementById("future-weather-container")

        // clears existing innerHTML
        futureWeatherContainer.innerHTML = '';

        const currentDay = dayjs();

        // loops through 5 days, 1 represents the next day
        for (let index = 1; index < 6; index++) {
            const forecastData = data.list[4 * index];

            // calculate date based on index
            const forecastDate = currentDay.add(index, 'day').format('MM/DD/YYYY')

            // creates box for each day
            const weatherBox = document.createElement('div')
            weatherBox.classList.add('has-background-grey', 'column', 'is-one-fifth', 'has-text-centered');

            // styled box
            weatherBox.style.borderRadius = '10px'

            // sets the innerHTML for dynamically generated weather boxes
            weatherBox.innerHTML = `
                <p class="date">${forecastDate}</p>
                <div class="temp" id="future-temp">${Math.round(forecastData.main.temp)} °F</div>
                <div class="wind" id="future-wind">${forecastData.wind.speed} kph</div>
                <div class="humid" id="future-humid">${forecastData.main.humidity} %</div>
            `;
            // appends the weather box to future weather container
            futureWeatherContainer.appendChild(weatherBox)
        }
    } catch (error) {
        console.error("Error fetching future weather data", error);
    }
}

const searchBox = document.getElementById('searchBox')
const searchBtn = document.getElementById('searchBtn')

searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
    // gives city name in the input 

    futureWeather(searchBox.value);
    // gives future weather conditions for 5 day forecast in the input
})




