import { ReactNode } from 'react';
import { CustomThemeProvider } from './useAppTheme';
import { AuthProvider } from './useAuth';
import { CarProvider } from './useCar';
import { TabProvider } from './useTabs';

interface IAppProvider {
  children: ReactNode;
}

export function AppProvider({ children }: IAppProvider) {
  return (
    <>
      <CustomThemeProvider>
        <TabProvider>
          <AuthProvider>{children}</AuthProvider>
        </TabProvider>
      </CustomThemeProvider>
    </>
  );
}
