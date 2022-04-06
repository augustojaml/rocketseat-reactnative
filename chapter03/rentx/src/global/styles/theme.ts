import { rgba } from 'polished';

export const theme = {
  light: {
    name: 'dark',
    colors: {
      main400: rgba('#DC1637', 0.6),
      main900: '#DC1637',

      background: '#F4F5F6',
      shape: '#FFFFFF',

      primary500: '#AEAEB3',
      primary400: '#7A7A80',
      primary600: '#47474D',
      primary800: '#1B1B1F',

      secondary400: rgba('#03B252', 0.6),
      secondary900: '#03B252',
    },
    fonts: {
      regular: 'Archivo_400Regular',
      medium: 'Archivo_500Medium',
      bold: 'Archivo_700Bold',
      text: 'Inter_400Regular',
    },
  },
  dark: {
    name: 'dark',
    colors: {
      main400: rgba('#DC1637', 0.6),
      main900: '#202024',

      background: '#121214',
      shape: '#202024',

      primary500: '#e6ddf9',
      primary400: '#c0abf2',
      primary600: '#9b78ea',
      primary800: '#8257e5',

      secondary400: rgba('#03B252', 0.6),
      secondary900: '#03B252',
    },
    fonts: {
      regular: 'Montserrat_400Regular',
      medium: 'Montserrat_500Medium',
      bold: 'Montserrat_700Bold',
      text: 'Montserrat_400Regular',
    },
  },
};
