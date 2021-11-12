const fetch = require("node-fetch");

const { API_KEY } = process.env;

exports.handler = async (event, context) => {
    // const params = JSON.parse(event.body);
    // const { city } = params;
    console.log(API_KEY);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=fishers&appid=${API_KEY}`;
    // const encodedUrl = encodeURI(url);
    try {
        const dataStream = await fetch(url);
        const data = await dataStream.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (err) {
        return { statusCode: 422, body: err.stack }
    }
}