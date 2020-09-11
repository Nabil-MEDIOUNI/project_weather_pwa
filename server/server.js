const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const bodyParser = require('body-parser');
const cors = require('cors');

const typeDefs = require('./src/graphql/typedefs');
const resolvers = require('./src/graphql/resolvers');

const app = express();

app.use(
  cors({
    origin:
      process.env.REACT_APP_API_URL || 'https://app-weather-pwa.netlify.app',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
  }),
);

app.use(bodyParser.json({ limit: '4mb' })); // ability to upload data less than 2mb

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.applyMiddleware({ app });

app.listen(process.env.PORT, () => {
  console.log(`> 🚀 Ready on ${process.env.LOCALHOST_PORT}`);
});
