/**
 * App Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ApolloProvider } from '@apollo/react-hooks';
import apolloClient from './configureClient';
import PrivateRoute from './utils/auth';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Welcome from './screens/Welcome';
import Users from './screens/Users';
import Update from './screens/Update';
import NoMatch from './screens/NoMatch';
import Subscription from './screens/Subscription';

const App = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/welcome" component={Welcome} />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/update" component={Update} />
          <PrivateRoute path="/subscription" component={Subscription} />
          <Route path="*" component={NoMatch} />
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
