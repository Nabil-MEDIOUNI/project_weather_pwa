import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createUploadLink } from 'apollo-upload-client';
import { API } from './config';

const link = createUploadLink({ uri: API });

export const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
