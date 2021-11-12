
document.querySelector('button').addEventListener('click', () => {
    let city = document.querySelector('#location');
    getWeather(city.value)
  });
  
  const getWeather = async (city) => {
    const urlDataObj = {
        city: city
    };
    try {
        const dataStream = await fetch("./.netlify/serverless/get_coords", {
            method: "POST",
            body: JSON.stringify(urlDataObj)
        });
        const data = await dataStream.json();
        return data;
    } catch (err) {
        console.log(err);
    };
  
    const url = "./.netlify/functions/get_coords"
    const response = await fetch(url);
    const data = await response.json();
  
    console.log(data);
  }