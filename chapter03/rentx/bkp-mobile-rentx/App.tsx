import React, { ReactNode } from 'react';
import { SignInUser } from './src/screens/User/SignInUser';
import { CustomThemeProvider } from './src/_shared/hooks/useAppTheme';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';
import { CarProvider } from './src/_shared/hooks/useCar';

interface IAppProvider {
  children: ReactNode;
}

function AppProvider({ children }: IAppProvider) {
  return (
    <>
      <CustomThemeProvider>
        <CarProvider>{children}</CarProvider>
      </CustomThemeProvider>
    </>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_700Bold,

    Inter_400Regular,
    Inter_500Medium,

    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
}
