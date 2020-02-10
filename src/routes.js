
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home'
import Services from './components/services'
import MyCar from './components/myCar'
import Stores from './components/stores'
import Navbar from './components/navbar/index'
import BottomTab from './components/bottomtabs/'
import NavContextProvider from './context/navbarContext'


import './res/styles/main.scss'

const App = () => {
  return (
    <NavContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/store' component={Stores} />
          <Route path='/my-car' component={MyCar} />
        </Switch>
        <BottomTab />
      </BrowserRouter>
    </NavContextProvider>
  );
};

export default App;
