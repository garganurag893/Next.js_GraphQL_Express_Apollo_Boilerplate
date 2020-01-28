/**
 * Apollo Client Configuration
 * @author Anurag Garg <garganurag893@gmail.com>
 */
import AsyncStorage from '@react-native-community/async-storage';
import {ApolloClient} from 'apollo-client';
import {split, ApolloLink, concat} from 'apollo-link';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {getMainDefinition} from 'apollo-utilities';
import {HttpLink} from 'apollo-link-http';
import {WebSocketLink} from 'apollo-link-ws';
import {SERVER, WEB_SOCKET_LINK} from './config';

interface Definintion {
  kind: string;
  operation?: string;
}

let authToken = '';

const httpLink = new HttpLink({
  uri: SERVER,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: authToken || null,
    },
  });
  // Add onto payload for WebSocket authentication
  (operation as any & {authToken: string | undefined}).authToken = authToken;

  return forward(operation);
});

const webSocketLink: WebSocketLink = new WebSocketLink({
  uri: WEB_SOCKET_LINK,
  options: {
    reconnect: true,
  },
});

/**
 * Set Token And User Id
 * @param token
 * @param userId
 */
export const setTokenId = async (token: string, userId: string) => {
  try {
    authToken = token ? `Bearer ${token}` : '';
    await AsyncStorage.setItem('token', authToken);
    await AsyncStorage.setItem('userId', userId);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get Token & Set Token In Request
 */
export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    authToken = token ? token : '';
    return authToken;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Destroy Token
 * For logout purpose
 */
export const destroyToken = async () => {
  try {
    await AsyncStorage.removeItem('token');
    authToken = '';
  } catch (error) {
    console.log(error);
  }
};

const link = split(
  ({query}) => {
    const {kind, operation}: Definintion = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  webSocketLink,
  httpLink,
);

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache().restore({}),
});

export default client;
