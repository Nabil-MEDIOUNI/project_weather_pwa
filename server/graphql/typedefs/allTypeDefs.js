const { gql } = require('apollo-server-express');

module.exports.allTypeDefs = gql`
  type Query {
    getWeather(country: String!): Weather
  }
`;
