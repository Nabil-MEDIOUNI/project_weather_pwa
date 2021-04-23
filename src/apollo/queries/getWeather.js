import { gql } from 'apollo-boost';

const GET_WEATHER = gql`
  query getWeather($country: String!) {
    getWeather(country: $country) {
      name
      main {
        temp
      }
      sys {
        country
      }
      weather {
        description
        icon
      }
    }
  }
`;

export default GET_WEATHER;
