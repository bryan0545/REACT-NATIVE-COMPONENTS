import React, {createContext, useEffect, useReducer} from 'react';
import {Appearance, AppState} from 'react-native';
import {lightTheme, ThemeState, darkTheme} from './interfaces';
import {themeReducer} from './themeReducer';

interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({children}: any) => {
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'light' ? lightTheme : darkTheme,
  );

  useEffect(() => {
    AppState.addEventListener('change', status => {
      if (status === 'active') {
        Appearance.getColorScheme() === 'light'
          ? setLightTheme()
          : setDarkTheme();
      }
    });
  }, []);
  // useEffect(() => {
  //   colorSchema === 'light' ? setLightTheme : setDarkTheme;
  // }, [colorSchema]);

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
