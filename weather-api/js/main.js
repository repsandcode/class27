//Example fetch using pokemonapi.co
document.querySelector('#location').addEventListener('click', getFetch)

// const url = 'http://api.weatherstack.com/forecast?access_key=3d043bf2f574dcc5e44af77a9e104994&query='+choice


// fetch(url)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//     console.log(data)
//   })
//   .catch(err => {
//     console.log(`error ${err}`)
//   });

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
} else {
  alert('Your Browser does not support Geolocation')
}

let latitude = 0
let longitude = 0 
function successCallback(position) {
  latitude = position.coords.latitude
  longitude = position.coords.longitude
  
  console.log(position.coords.latitude);
  console.log(position.coords.longitude);
}

function errorCallback(error){
  console.log(error.message);
}
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)

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