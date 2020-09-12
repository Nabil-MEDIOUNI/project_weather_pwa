const fetch = require('node-fetch');

const URL = (query) => `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&APPID=${process.env.API_KEY}`;

module.exports.WeatherQueries = {
  getWeather: async (_, { country }) => {
    const weather = await fetch(URL(country), {})
      .then((res) => res.json())
      .then((body) => body);

    if (weather.message) throw new Error('No such country was found!');

    return weather;
  },
};
