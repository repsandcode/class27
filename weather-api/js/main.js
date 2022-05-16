// event listener to run ONLY WHEN THERE IS AN LOCATION INPUT
document.querySelector('#search').addEventListener('click', getFetch)

// initialize the variables needed for URL queries
let latitude = 0
let longitude = 0 

// check if the user's browser is compatible for geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else { 
  alert('Your Browser does not support Geolocation')
}


function successCallback(position) {
  latitude = position.coords.latitude
  longitude = position.coords.longitude

  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
  console.log('this is the latitude (up to 5 decimal places) '+latitude);
  console.log('this is the longitude (up to 5 decimal places) '+longitude);
}

function errorCallback(error){
  console.log(error.message);
}

// // timezone
// const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
// console.log(timezone)
const url = `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`
const temperature = document.querySelector('#temperature')
const windSpeed = document.querySelector('#wind-speed')
const windDirection = document.querySelector('#wind-direction')

fetch(url)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data)
    // temperature.innerText = data.current_weather.temperature
    // windSpeed.innerText = data.current_weather.windspeed + " km/h"
    // windDirection.innerText = data.current_weather.winddirection
  })
  .catch(err => {
      console.log(`error ${err}`)
  });


// THIS FETCH API will only run if button is clicked
function getFetch(){
  const choice = document.querySelector('input').value
  const url = 'http://api.weatherstack.com/forecast?access_key=3d043bf2f574dcc5e44af77a9e104994&query='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}