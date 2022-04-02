import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../global/styles/theme';
import { AppThemeStorage } from '../../services/storage/AppThemeStorage';

interface IAppThemeProvider {
  children: ReactNode;
}

interface IAppThemeContext {
  appTheme: typeof theme.dark | typeof theme.light;
  toggleTheme: () => Promise<void>;
}

interface IAppTheme {
  children: ReactNode;
}

const AppThemeContext = createContext({} as IAppThemeContext);

function AppThemeProvider({ children }: IAppThemeProvider) {
  const [appTheme, setAppTheme] = useState<typeof theme.dark | typeof theme.light>(theme.dark);

  async function toggleTheme() {
    appTheme === theme.dark ? setAppTheme(theme.light) : setAppTheme(theme.dark);
    await AppThemeStorage.setData(appTheme.theme);
  }

  useEffect(() => {
    (async () => {
      const currentTheme = await AppThemeStorage.getData();
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

function AppTheme({ children }: IAppTheme) {
  const { appTheme } = useAppTheme();
  return (
    <>
      <ThemeProvider theme={appTheme}>{children}</ThemeProvider>
    </>
  );
}

function CustomThemeProvider({ children }: IAppThemeProvider) {
  return (
    <AppThemeProvider>
      <AppTheme>{children}</AppTheme>
    </AppThemeProvider>
  );
}

export { CustomThemeProvider, useAppTheme };
