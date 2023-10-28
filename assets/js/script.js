const APIKey = "e5beb6bc1d880661b96160aa52c98fda"
const requestURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=chicago"
async function getWeather(){
    const response = await fetch(requestURL + `&appid=${APIKey}`);
    var data = await response.json()

    console.log(data);

    // document.querySelector('.weather').innerHTML = data.name
    // document.querySelector('.temp').innerHTML = data.main.temp
    // document.querySelector('.weather').innerHTML = data.name
    
}

getWeather();
    


// Remember that the query URL won't work automatically as it's written. You'll need to adjust your application to accept user input, to store in the city variable that you've created
