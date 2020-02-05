
import React, { createContext, useState } from 'react';

export const NavBarContext = createContext();

const NavContextProvider = ({ children }) => {
  const [content, setContent] = useState({});

  const addHeaderContent = book => {
    setContent({});
  };


  return (
    <NavBarContext.Provider value={{ content, addHeaderContent }}>
      {children}
    </NavBarContext.Provider>
  );
};

export default NavContextProvider;
