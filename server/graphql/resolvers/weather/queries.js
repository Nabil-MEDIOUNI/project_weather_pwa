const fetch = require('node-fetch');

const URL = (query) => `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${process.env.API_KEY}`;

module.exports.WeatherQueries = {
  getWeather: (_, { country }) => fetch(URL(country), {})
    .then((res) => res.json())
    .then((body) => body),
};
