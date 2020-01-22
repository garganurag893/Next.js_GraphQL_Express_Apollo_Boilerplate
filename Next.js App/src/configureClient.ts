import { ApolloClient } from 'apollo-client';
import { split, ApolloLink, concat } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { getMainDefinition } from 'apollo-utilities';
import withApollo from 'next-with-apollo';
import { HttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import { WebSocketLink } from 'apollo-link-ws';
import Cookies from 'js-cookie';
import { SERVER, WEB_SOCKET_LINK } from './config';

interface Definintion {
  kind: string;
  operation?: string;
}

let authToken = null;

const httpLink = new HttpLink({
  fetch,
  uri: SERVER,
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: authToken || null,
    },
  });

  return forward(operation);
});

const webSocketLink: any = process.browser
  ? new WebSocketLink({
      uri: WEB_SOCKET_LINK,
      options: {
        reconnect: true,
      },
    })
  : null;

// Set the token
export const setToken = async token => {
  try {
    let autorizationToken = token ? `Bearer ${token}` : null;
    authToken = autorizationToken;
    webSocketLink.subscriptionClient.connectionParams = () => ({
      Authorization: authToken || null,
    });
    Cookies.set('token', autorizationToken, { expires: 7 });
  } catch (error) {
    console.log(error);
  }
};

// Set the token in request
export const setTokenInRequest = async token => {
  try {
    authToken = token ? token : null;
    webSocketLink.subscriptionClient.connectionParams = () => ({
      Authorization: authToken,
    });
    return authToken;
  } catch (error) {
    console.log(error);
  }
};

// Destroy token
export const destroyToken = async () => {
  try {
    Cookies.remove('token');
    authToken = null;
  } catch (error) {
    console.log(error);
  }
};

const link = process.browser
  ? split(
      ({ query }) => {
        const { kind, operation }: Definintion = getMainDefinition(query);
        return kind === 'OperationDefinition' && operation === 'subscription';
      },
      webSocketLink,
      httpLink
    )
  : httpLink;

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      link: concat(authMiddleware, link),
      cache: new InMemoryCache().restore(initialState || {}),
    })
);
