let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'), 
        {
            types: ['(cities)'],
            fields: ['geometry', 'name']
        });
    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    const place = autocomplete.getPlace();

    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder = 'Enter a place...';
    } else {
        const latitude = place.geometry.location.lat();
        const longitude = place.geometry.location.lng();
        getWeather([latitude, longitude]);
    }
}

document.querySelector('button').addEventListener('click', () => {
    let city = document.querySelector('#autocomplete');
    getWeather(city.value)
  });
  
const getWeather = async (coords) => {
    const urlDataObj = {
        latitude: coords[0],
        longitude: coords[1]
    };
    try {
        const response = await fetch("./.netlify/functions/get_weather", {
            method: "POST",
            body: JSON.stringify(urlDataObj)
        });
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    };
}

