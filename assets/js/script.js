const APIKey = "e5beb6bc1d880661b96160aa52c98fda"
const requestURL = "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=chicago"
const futureForecast = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=chicago"

async function getWeather(){
    // fetching current weather conditions
    const response = await fetch(requestURL + `&appid=${APIKey}`);
    var data = await response.json();

    console.log(data);

    document.getElementById("city-name").innerHTML = data.name + dayjs().format(' (MM/DD/YYYY)');
    document.getElementById("temp").innerHTML = "Temp: " + Math.round(data.main.temp) + " °F";
    document.getElementById("wind").innerHTML = "Wind: " + data.wind.speed + " mph";
    document.getElementById("humid").innerHTML = "Humidity: " + data.main.humidity + " %";
   
}
async function futureWeather() {
    // fetching future weather conditions
    const response = await fetch(futureForecast + `&appid=${APIKey}`)
    var data = await response.json();
    console.log(data);

    document.querySelector('.date').innerHTML = dayjs().format('MM/DD/YYYY');
    document.getElementById("future-temp").innerHTML = data.list[4].main.temp + " °F";
    document.getElementById("future-wind").innerHTML = data.list[4].wind. speed + " kph"
    document.getElementById("future-humid").innerHTML = data.list[4].main.humidity + " %"

}
getWeather();
futureWeather()


