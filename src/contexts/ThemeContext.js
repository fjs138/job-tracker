import React, { useContext, useState, createContext } from "react";
const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useDarkTheme(){
  return useContext(ThemeContext)
}

export function useDarkThemeUpdate(){
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleDarkTheme() {
    setDarkTheme((darkThemeState) => !darkThemeState);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleDarkTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
}
