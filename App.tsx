import React from 'react';
import Navigation from './src/navigation/Navigation';
import {ThemeProvider} from './src/context/ThemeContext/ThemeContext';

export const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const App = () => {
  return (
    <AppState>
      <Navigation />
    </AppState>
  );
};

export default App;
