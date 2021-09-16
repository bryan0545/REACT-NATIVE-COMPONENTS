import React, {createContext, useReducer} from 'react';
import {lightTheme, ThemeState} from './interfaces';
import {themeReducer} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(themeReducer, lightTheme);
  const setDarkTheme = () => {
    console.log('Set DarkTheme');
    dispatch({type: 'set_dark_theme'});
  };
  const setLightTheme = () => {
    console.log('Set LigthTheme');
    dispatch({type: 'set_light_theme'});
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
