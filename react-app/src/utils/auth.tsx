/**
 * Auth Middlerware Component
 * @author Anurag Garg <garganurag893@gmail.com>
 */

import * as React from "react";
import { getToken } from "../configureClient";
import { Route, Redirect } from "react-router-dom";

export const auth = async () => {
  const token = await getToken();
  if (token && token !== "") {
    return true;
  }
  return false;
};

const PrivateRoute = async ({ children, ...rest }: any) => {
  const isAuthenticated = await auth();
  return (
    <Route
      {...rest}
      render={({ location }: any) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
