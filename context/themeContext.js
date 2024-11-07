// context/themeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  const themeStyles = isDarkMode
    ? { backgroundColor: 'black', textColor: 'white' }
    : { backgroundColor: 'white', textColor: 'black' };

  return (
    <ThemeContext.Provider value={{ toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};
