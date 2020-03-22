import React, { useContext, Fragment} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './home'
import Services from './services'
import MyCar from './myCar'
import Stores from './stores'
import Support from './support'
import Navbar from '../navbar/index'
import BottomTab from '../bottomtabs/'

import NavContextProvider from '../../data/context/navbarContext'
import { storeContext } from '../../data/context/storeContext'

const App = () => {
  let store = useContext(storeContext)
  const { content,  dispatch } = store


  const PrivateRoutes = ({ component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        content.isAuthenticated === true
          ? (
            <Fragment>
              <Navbar />
                <Component {...props} />
              <BottomTab />
            </Fragment>
          )
          : <Redirect to='/login' />
      )} />
  )
  return (
    <Fragment>
        <PrivateRoutes exact path='/' component={Home} />
        <PrivateRoutes path='/services' component={Services} />
        <PrivateRoutes path='/support' component={Support} />
        <PrivateRoutes path='/store' component={Stores} />
        <PrivateRoutes path='/my-car' component={MyCar} />
    </Fragment>

  );
};

export default App;
