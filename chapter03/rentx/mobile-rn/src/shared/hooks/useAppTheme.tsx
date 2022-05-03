import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { appThemeStorage } from '../utils/appThemeStorage';

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
    await appThemeStorage.setData(appTheme.name);
  }

  useEffect(() => {
    (async () => {
      const currentTheme = await appThemeStorage.getData();

      if (currentTheme === undefined || currentTheme === 'light') {
        setAppTheme(theme.dark);
        return;
      }

      if (currentTheme === 'dark') {
        setAppTheme(theme.light);
        return;
      }
    })();
  }, [appTheme]);

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
