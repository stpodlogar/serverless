
document.querySelector('button').addEventListener('click', () => {
    let city = document.querySelector('#autocomplete');
    getWeather(city.value)
  });
  
const getWeather = async (city) => {
    const urlDataObj = {
        city: city
    };
    try {
        const response = await fetch("./.netlify/functions/get_weather", {
            method: "POST",
            body: JSON.stringify(urlDataObj)
        });
        // const dataStream = await fetch("./.netlify/serverless/get_weather")
        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    };
}

// const searchElement = document.querySelector('[data-city-search]');
// const searchBox = new google.maps.places.SearchBox(searchElement);
// searchElement.addListener('places_changed', () => {
//     const place = searchBox.getPlaces()[0];
//     if (place === null) return;
//     const latitude = place.geometry.location.lat();
//     const longitude = place.geometry.location.lng();
//     console.log(latitude, longitude);
// })

// let autocomplete;
// function initAutocomplete() {
//     autocomplete = new google.maps.places.Autocomplete(
//         document.getElementById('autocomplete'), 
//         {
//             types: ['cities'],
//             fields: ['place_id', 'geometry', 'name']
//         });
//     autocomplete.addListener('place_changed', onPlaceChanged);
// }

// function onPlaceChanged() {
//     const place = autocomplete.getPlace();

//     if (!place.geometry) {
//         document.getElementById('autocomplete').placeholder = 'Enter a place...';
//     } else {
//         console.log('This happened')
//     }
// }

