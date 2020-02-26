
import React, { createContext, useReducer } from 'react';

import {productReducer} from '../api/reducer'

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {
  const [content, dispatch] = useReducer(productReducer, { data: {}});

  return (
    <ProductsContext.Provider value={{ content, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
