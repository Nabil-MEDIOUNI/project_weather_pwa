const { allTypeDefs } = require('./allTypeDefs');
const { WeatherTypes } = require('./schema/weatherTypes');

const typedef = [WeatherTypes, allTypeDefs];

module.exports = typedef;
