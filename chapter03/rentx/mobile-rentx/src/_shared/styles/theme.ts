import { rgba, lighten } from 'polished';

export const theme = {
  light: {
    name: 'dark',
    colors: {
      main900: '#DC1637',

      background: '#e6e6e8',
      shape: '#FFFFFF',

      text: '#1B1B1F',
      placeholders: rgba('#1B1B1F', 0.3),
      buttonTextColor: '#FFFFFF',

      primary400: '#AEAEB3',
      primary500: '#7A7A80',
      primary600: '#47474D',
      primary800: '#1B1B1F',

      secondary900: '#03B252',
    },
    fonts: {
      regular: 'Archivo_400Regular',
      medium: 'Archivo_500Medium',
      bold: 'Archivo_700Bold',
      textRegular: 'Inter_400Regular',
      textMedium: 'Inter_500Medium',
    },
  },
  dark: {
    name: 'dark',
    colors: {
      main900: '#DC1637',

      background: '#121214',
      shape: '#202024',

      text: '#9b78ea',
      placeholders: rgba('#9b78ea', 0.3),
      buttonTextColor: '#9b78ea',

      primary500: '#e6ddf9',
      primary400: '#c0abf2',
      primary600: '#9b78ea',
      primary800: '#8257e5',

      secondary900: '#03B252',
    },
    fonts: {
      regular: 'Montserrat_400Regular',
      medium: 'Montserrat_500Medium',
      bold: 'Montserrat_700Bold',
      textRegular: 'Montserrat_400Regular',
      textMedium: 'Montserrat_500Medium',
    },
  },
};
