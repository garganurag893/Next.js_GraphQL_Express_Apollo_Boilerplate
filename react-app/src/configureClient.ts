/**
 * Apollo Client Configuration
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import { ApolloClient } from "apollo-client";
import { split, ApolloLink, concat } from "apollo-link";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from "apollo-utilities";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";
import { WebSocketLink } from "apollo-link-ws";
import Cookies from "js-cookie";
import { SERVER, WEB_SOCKET_LINK } from "./config";

interface Definintion {
  kind: string;
  operation?: string;
}

let authToken: string = "";

const httpLink = new HttpLink({
  fetch,
  uri: SERVER
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: authToken || null
    }
  });
  // Add onto payload for WebSocket authentication
  (operation as any & { authToken: string | undefined }).authToken = authToken;

  return forward(operation);
});

const webSocketLink: WebSocketLink = new WebSocketLink({
  uri: WEB_SOCKET_LINK,
  options: {
    reconnect: true
  }
});

/**
 * Set Token
 * @param token
 */
export const setToken = async (token: string) => {
  try {
    authToken = token ? `Bearer ${token}` : "";
    Cookies.set("token", authToken, { expires: 7 });
  } catch (error) {
    console.log(error);
  }
};

/**
 * Get Token & Set Token In Request
 */
export const getToken = async () => {
  try {
    const token = Cookies.get("token");
    authToken = token ? token : "";
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
    Cookies.remove("token");
    authToken = "";
  } catch (error) {
    console.log(error);
  }
};

const link = split(
  ({ query }) => {
    const { kind, operation }: Definintion = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  webSocketLink,
  httpLink
);

const client = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache().restore({}),
  connectToDevTools: true
});

export default client;
