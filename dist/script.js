const apiKey = "42ef5c5b16905a9e3c2527995eda378c"
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=newyork"

async function checkweather() {
    const response = await fetch(apiURL + `&appid=${apiKey}`)
    var data = await response.json()

    console.log(data);
    
}