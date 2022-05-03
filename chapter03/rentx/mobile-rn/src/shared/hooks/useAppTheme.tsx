import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

interface IChildrenNode {
  children: ReactNode;
}

interface IAppThemeContext {
  appTheme: typeof theme.dark | typeof theme.light;
  toggleTheme: () => Promise<void>;
}

const AppThemeContext = createContext({} as IAppThemeContext);

function AppThemeProvider({ children }: IChildrenNode) {
  const [appTheme, setAppTheme] = useState<typeof theme.dark | typeof theme.light>(theme.light);

  async function toggleTheme() {
    appTheme === theme.dark ? setAppTheme(theme.light) : setAppTheme(theme.dark);
  }

  return (
    <>
      <AppThemeContext.Provider value={{ appTheme, toggleTheme }}>
        {children}
      </AppThemeContext.Provider>
    </>
  );
}

function useAppTheme() {
  return useContext(AppThemeContext);
}

function AppTheme({ children }: IChildrenNode) {
  const { appTheme } = useAppTheme();
  return (
    <>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </>
  );
}

function CustomThemeProvider({ children }: IChildrenNode) {
  return (
    <AppThemeProvider>
      <AppTheme>{children}</AppTheme>
    </AppThemeProvider>
  );
}

export { CustomThemeProvider, useAppTheme };
