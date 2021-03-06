const fetch = require('node-fetch');

const { API_KEY } = process.env;

exports.handler = async (event, context) => {
    const params = JSON.parse(event.body);
    const { latitude, longitude } = params;
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={minutely}&appid=${API_KEY}`;
    // const encodedUrl = encodeURI(url);
    try {
        const response = await fetch(url);
        const data = await response.json();
        return {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(data)
        };
    } catch (err) {
        return { statusCode: 422, body: err.stack }
    }
}