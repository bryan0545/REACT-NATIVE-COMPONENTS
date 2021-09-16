import {Theme} from '@react-navigation/native';

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'ligth',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.7)',
  colors: {
    primary: '#4d5bd6',
    background: '#ffffff',
    card: 'green',
    text: 'black',
    border: 'orange',
    notification: 'teal',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: '#8e99b1',
  colors: {
    primary: '#4899be',
    background: '#282c49',
    card: 'green',
    text: 'white',
    border: 'orange',
    notification: 'teal',
  },
};
