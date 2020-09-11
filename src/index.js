import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks';

import { client } from './apollo/initApollo';

import App from './App';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ApolloHooksProvider client={client}>
      <App />
    </ApolloHooksProvider>
  </ApolloProvider>, document.getElementById('root'),
);

window.addEventListener('load', () => {
  navigator.serviceWorker
    .register('./serviceworker.js')
    .then((reg) => console.log('Success: ', reg.scope))
    .catch((err) => console.log('Failure: ', err));
});
