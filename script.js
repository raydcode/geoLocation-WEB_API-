const userLocation = document.querySelector('.location');
const btn = document.querySelector('.btn');
const gMaps = document.querySelector('.g-maps');


btn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(getPosition);
  
});

function getPosition (position) {
    userLocation.innerHTML = `
    Latitude:${position.coords.latitude} ,
    Longitude:${position.coords.longitude}
    `
    gMaps.style.visibility = 'visible';
    gMaps.href = `https://www.google.com/maps/@${position.coords.latitude},${position.coords.longitude},15z`
    gMaps.innerHTML="Click here to Gmaps"
}



