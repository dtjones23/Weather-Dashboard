var APIKey = "77b36f0b538c7a1670c61ea56e310e4a"
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

fetch(queryURL)
// Remember that the query URL won't work automatically as it's written. You'll need to adjust your application to accept user input, to store in the city variable that you've created