/**
 * @format
 */

import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import client from './src/configureClient';
import {ApolloProvider} from '@apollo/react-hooks';
import {name as appName} from './app.json';

const AppCont = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

AppRegistry.registerComponent(appName, () => AppCont);
