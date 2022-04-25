import 'styled-components';
import { theme } from '../../global/styles/theme/theme';

declare module 'styled-components' {
  const Types = theme.dark || theme.light;
  type ThemeType = typeof Types;
  export interface DefaultTheme extends ThemeType {}
}
