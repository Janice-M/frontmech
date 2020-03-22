
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AuthRoutes from './components/auth/index'
import AppRoutes from './components/app/index'

import Store from './data/context/storeContext'
import NavBarContextProvider from './data/context/navbarContext'


import './res/styles/main.scss'

const Routes = () => {
  return (
    <Store>
      <NavBarContextProvider>
        <BrowserRouter>
          <AuthRoutes />
          <AppRoutes />
        </BrowserRouter>
      </NavBarContextProvider>
  </Store>
  );
};

export default Routes;
