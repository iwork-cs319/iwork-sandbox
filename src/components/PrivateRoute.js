import React from 'react';
import { Route } from 'react-router-dom';
import Navbar from './Navbar';

function PrivateRoute({
  path,
  component: Component,
  ...rest
}) {
  return (
    <>
      <Navbar />
      <Route
        path={path}
        {...rest}
        render={props => (
          <Component {...props} />
        )}
      />
    </>
  );
}

export default PrivateRoute;
