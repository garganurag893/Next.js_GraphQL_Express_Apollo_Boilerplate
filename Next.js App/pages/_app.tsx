import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withData from "../src/configureClient";

class MyApp extends App<any> {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

// Wraps all components in the tree with the data provider
export default withData(MyApp);
