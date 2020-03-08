
import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './login'
import SignUp from './signup'

const App = () => {
  return (
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
  );
};

export default App;
