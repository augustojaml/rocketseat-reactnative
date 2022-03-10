import { createContext, ReactNode, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../global/styles/theme/theme';

interface IAppThemeProvider {
  children: ReactNode;
}

interface IAppThemeContext {
  appTheme: typeof theme.dark | typeof theme.light;
  toggleTheme: () => void;
}

interface IAppTheme {
  children: ReactNode;
}

const AppThemeContext = createContext({} as IAppThemeContext);

function AppThemeProvider({ children }: IAppThemeProvider) {
  const [appTheme, setAppTheme] = useState<typeof theme.dark | typeof theme.light>(theme.dark);

  function toggleTheme() {
    appTheme === theme.dark ? setAppTheme(theme.light) : setAppTheme(theme.dark);
  }

  return (
    <>
      <AppThemeContext.Provider value={{ appTheme, toggleTheme }}>{children}</AppThemeContext.Provider>
    </>
  );
}

function useAppTheme() {
  return useContext(AppThemeContext);
}

function AppTheme({ children }: IAppTheme) {
  const { appTheme } = useAppTheme();
  return (
    <>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </>
  );
}

export { AppThemeProvider, useAppTheme, AppTheme };
