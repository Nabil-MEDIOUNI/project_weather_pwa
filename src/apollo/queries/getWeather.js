import { gql } from 'apollo-boost';

const GET_WEATHER = gql`
  query getWeather($country: String!) {
    getWeather(country: $country) {
      id
      name
      main {
        feels_like
        humidity
        pressure
        temp
      }
      sys {
        country
      }
      weather {
        description
        icon
        id
      }
    }
  }
`;

export default GET_WEATHER;
