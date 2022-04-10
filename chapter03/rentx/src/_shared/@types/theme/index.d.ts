import 'styled-components';
import { theme } from '../../styles/theme';

declare module 'styled-components' {
  const Types = theme.dark || theme.light;
  type ThemeType = typeof Types;
  export interface DefaultTheme extends ThemeType {}
}
