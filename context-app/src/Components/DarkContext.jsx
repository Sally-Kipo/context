import React, { createContext, useState } from 'react';

export const DarkContext = createContext({});

export const DarkProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkContext.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </DarkContext.Provider>
  );
};
