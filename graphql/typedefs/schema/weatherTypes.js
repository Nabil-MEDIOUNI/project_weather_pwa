const { gql } = require('apollo-server-express');

module.exports.WeatherTypes = gql`
  type Weather {
    id: Int
    name: String
    weather: [WeatheDetail]
    main: Main
    sys: Sys
  }

  type WeatheDetail {
    description: String
    icon: String
    id: Int
  }
  
  type Sys {
    country: String
  }

  type Main {
    feels_like: Float
    humidity: Int
    pressure: Int
    temp: Float
    temp_max: Int
    temp_min: Int
  }
`;
