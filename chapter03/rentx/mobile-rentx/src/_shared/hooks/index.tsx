import { ReactNode } from 'react';
import { CustomThemeProvider } from './useAppTheme';
import { AuthProvider } from './useAuth';
import { CarProvider } from './useCar';

interface IAppProvider {
  children: ReactNode;
}

export function AppProvider({ children }: IAppProvider) {
  return (
    <>
      <CustomThemeProvider>
        <AuthProvider>
          <CarProvider>{children}</CarProvider>
        </AuthProvider>
      </CustomThemeProvider>
    </>
  );
}
