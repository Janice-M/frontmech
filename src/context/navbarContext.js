
import React, { createContext, useReducer } from 'react';

import {reducer} from './reducer'

export const NavBarContext = createContext();

const NavContextProvider = ({ children }) => {
  const [content, dispatch] = useReducer(reducer, {
    header: '',
    headerRoute: '',
    showSearch: true
  });

  return (
    <NavBarContext.Provider value={{ content, dispatch }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavContextProvider;
