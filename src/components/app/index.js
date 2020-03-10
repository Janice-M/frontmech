import React, { Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './home'
import Services from './services'
import MyCar from './myCar'
import Stores from './stores'
import Support from './support'
import Navbar from '../navbar/index'
import BottomTab from '../bottomtabs/'

import NavContextProvider from '../../data/context/navbarContext'

export const AppWrapper = (props) => {
  return (
    <Fragment>
      <Navbar />
        { props.children }
      <BottomTab />
    </Fragment>
  )
}

const App = () => {
  return (
    <NavContextProvider>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/support' component={Support} />
        <Route path='/store' component={Stores} />
        <Route path='/my-car' component={MyCar} />
      </Switch>
    </NavContextProvider>

  );
};

export default App;
