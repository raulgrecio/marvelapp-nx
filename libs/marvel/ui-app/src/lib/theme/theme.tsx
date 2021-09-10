import { DefaultTheme, Theme } from '@react-navigation/native';

export const theme: Theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    primary: 'rgb(212, 212, 212)',
    background: '#2b2b2b',
    card: 'rgba(28, 28, 30)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(48, 48, 49)',
    notification: '#131313',
  },
};
