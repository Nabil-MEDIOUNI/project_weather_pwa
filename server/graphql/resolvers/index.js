const { WeatherQueries } = require('./weather/queries');

const resolvers = {
  Query: {
    ...WeatherQueries,
  },
};

module.exports = resolvers;
