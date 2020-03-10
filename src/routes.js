
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AuthRoutes from './components/auth/index'
import AppRoutes from './components/app/index'

import Store from './data/context/storeContext'


import './res/styles/main.scss'

const App = () => {
  return (
    <Store>
        <BrowserRouter>
            <AuthRoutes />    
            <AppRoutes />
        </BrowserRouter>
  </Store>
  );
};

export default App;
