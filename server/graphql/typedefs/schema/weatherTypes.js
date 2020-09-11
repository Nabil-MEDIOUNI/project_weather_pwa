const { gql } = require('apollo-server-express');

module.exports.WeatherTypes = gql`
  type Weather {
    id: Int
    name: String
    weather: [WeatheDetail]
    main: Main
  }

  type WeatheDetail {
    description: String
    icon: String
    id: Int
  }
  
  type Main {
    feels_like: Float
    humidity: Int
    pressure: Int
    temp: Int
    temp_max: Int
    temp_min: Int
  }
`;
