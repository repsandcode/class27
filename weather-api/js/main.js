// event listener to run ONLY WHEN THERE IS AN LOCATION INPUT
document.querySelector('#search').addEventListener('click', getFetch)

// initialize the variables needed for URL queries
let latitude = 0
let longitude = 0 

// check if the user's browser is compatible for geolocation
// this will prompt the user to turn on their device's location mode
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else { 
  alert('Your Browser does not support Geolocation')
}

// get the latitude and longtitude of your current location
function successCallback(position) {
  latitude = position.coords.latitude
  longitude = position.coords.longitude
}

function errorCallback(error){
  console.log(error.message);
}

// timezone
const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
console.log(timezone)
// url needed to get data
const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&timezone=${timezone}`
const locationName = document.querySelector('#loc-name')
const temperature = document.querySelector('#temperature');
const tempUnit = document.querySelector('#temp-unit')
const weatherCode = document.querySelector('#weather-code')
const windSpeed = document.querySelector('#wind-speed');
const windDirection = document.querySelector('#wind-direction');
const precipitation = document.querySelector('#precip')
const humidity = document.querySelector('#humidity')
const feelsLike = document.querySelector('#feels-like');
const uvIndex = document.querySelector('#uv-index');

fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    weatherCode.innerText = weatherCodes(data.current_weather.weathercode)
    temperature.innerText = data.current_weather.temperature 
    windSpeed.innerText = data.current_weather.windspeed + " km/h"
    windDirection.innerText = data.current_weather.winddirection
  })
  .catch(err => {
      console.log(`error ${err}`)
  });


// THIS FETCH API will only run if button is clicked
function getFetch(){
  // const choice = document.querySelector('input').value

  const url = `http://api.weatherstack.com/current?access_key=3d043bf2f574dcc5e44af77a9e104994&query=${latitude},${longitude}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(latitude)
        console.log(longitude)
        temperature.innerText = data.current.temperature 
        weatherCode.innerText = data.current.weather_descriptions
        windSpeed.innerText = data.current.wind_speed + " km/h"
        windDirection.innerText = data.current.wind_dir
        precipitation.innerText = data.current.precip + " mm"
        humidity.innerText = data.current.humidity
        feelsLike.innerText = data.current.feelslike
        uvIndex.innerText = data.current.uv_index
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}


// function will return description of a specific weather code
function weatherCodes(code) {
  switch (code) {
    case 0: return "Clear sky"
    case 1: return "Mainly clear"
    case 2: return "Partly cloudy" 
    case 3: return "Overcast"
    case 45: return "Fog"
    case 48: return "Depositing rime fog"
    case 51: return "Light Drizzle"
    case 53: return "Moderate Drizzle"
    case 55: return "Dense Drizzle"
    case 56: return "Freezing Drizzle: Light Intensity"
    case 57: return "Freezing Drizzle: Dense Intensity"
    case 61: return "Slight Rain"
    case 63: return "Moderate Rain"
    case 65: return "Heavy Rain"
    case 66: return "Freezing Rain: Light Intensity"
    case 67: return "Freezing Rain: Heavy Intensity"
    case 71: return "Slight Snow Fall"
    case 73: return "Moderate Snow Fall"
    case 75: return "Heavy Snow Fall"
    case 77: return "Snow grains"
    case 80: return "Slight rain showers"
    case 81: return "Moderate rain showers"
    case 82: return "Heavy rain showers"
    case 85: return "Slight snow showers"
    case 86: return "Heavy snow showers"
    case 95: return "Slight to Moderate Thunderstom"
    case 96: return "Thunderstorm with slight hail"
    case 99: return "Thunderstorm with heavy hail"
  }
}