import { rgba } from 'polished';

export const theme = {
  light: {
    theme: 'light',
    colors: {
      primary: '#5636D3',

      secondary: '#FF872C',
      secondary_light: rgba('#FF872C', 0.3),

      success: '#12A454',
      success_light: rgba('#12A454', 0.3),

      attention: '#E83F5B',
      attention_light: rgba('#E83F5B', 0.3),

      shape: '#fff',
      title: '#363F5F',
      text: '#969CB2',
      background: '#F0F2F5',
    },
  },

  dark: {
    theme: 'dark',
    colors: {
      primary: '#202024',

      secondary: '#29292e',
      secondary_light: rgba('#29292e', 0.3),

      success: '#12A454',
      success_light: rgba('#12A454', 0.3),

      attention: '#E83F5B',
      attention_light: rgba('#E83F5B', 0.3),

      shape: '#8257e5',
      title: '#969CB2',
      text: '#363F5F',
      background: '#121214',
    },
  },
};
