import { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    secondaryColor: string;
    bgPrimary: string;
    accentColor: string;

    fontRegular: string;
    fontMedium: string;
    fontBold: string;
  }
}

export const lightTheme: DefaultTheme = {
  primaryColor: '#333',
  secondaryColor: '#878686',
  bgPrimary: '#E3E3E3',
  accentColor: '#4A5AEF',

  fontRegular: 'Montserrat-Regular',
  fontMedium: 'Montserrat-Medium',
  fontBold: 'Montserrat-SemiBold',
};

export const darkTheme: DefaultTheme = {
  primaryColor: '#fff',
  secondaryColor: '#cacaca',
  bgPrimary: '#E3E3E3',
  accentColor: '#4A5AEF',

  fontRegular: 'Montserrat-Regular',
  fontMedium: 'Montserrat-Medium',
  fontBold: 'Montserrat-SemiBold',
};
