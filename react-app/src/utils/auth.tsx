/**
 * Auth Middlerware Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import * as React from 'react';
import { setToken } from '../configureClient';
import Cookies from 'js-cookie';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }: any) => {
  const token = Cookies.get('token');
  setToken(token);
  if (!token) {
    return <Redirect to="/" />;
  }
  return (
    <Route
      {...rest}
      render={({ location }: any) =>
        token ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
