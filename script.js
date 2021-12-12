const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(getPosition);
  
});

function getPosition (position) {
    userLocation.innerHTML = `
    Latitude:${position.coords.latitude} ,
    Longitude:${position.coords.longitude}
    `
}

