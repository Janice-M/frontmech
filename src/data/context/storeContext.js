
import React, { createContext, useReducer } from 'react';

import {storeReducer} from '../api/reducer'



const initialState = {
  products: [],
  vehicles: [],
  services: [],
  categories: [],
  parts: []
}

export const storeContext = createContext(initialState);

const Store = ({ children }) => {
  const [content, dispatch] = useReducer(storeReducer, initialState);

  return (
    <storeContext.Provider value={{ content, dispatch }}>
      {children}
    </storeContext.Provider>
  );
};

export default Store;
