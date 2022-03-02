import 'styled-components';
import { theme } from './theme';

declare module 'styled-components' {
  const Types = theme.dark || theme.light;
  type ThemeType = typeof Types;
  export interface DefaultTheme extends ThemeType {}
}
