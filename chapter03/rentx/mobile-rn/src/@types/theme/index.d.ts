import 'styled-components';
import { theme } from '../../shared/styles/theme';

declare module 'styled-components' {
  const Types = theme.dark || theme.light;
  type ThemeType = typeof Types;
  export interface DefaultTheme extends ThemeType {}
}
