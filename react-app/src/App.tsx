import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/react-hooks";
import apolloClient from "./configureClient";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Welcome from "./screens/Welcome";
import Users from "./screens/Users";
import Update from "./screens/Update";
import Subscription from "./screens/Subscription";

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/welcome" component={Welcome} />
          <Route path="/users" component={Users} />
          <Route path="/update" component={Update} />
          <Route path="/subscription" component={Subscription} />
        </Switch>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        pauseOnHover
      />
    </ApolloProvider>
  );
};

export default App;
