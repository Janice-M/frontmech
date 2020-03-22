
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './login'
import SignUp from './signup'

const AuthRoutes = () => {
  return (
      <Fragment>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Fragment>
  );
};

export default AuthRoutes;
