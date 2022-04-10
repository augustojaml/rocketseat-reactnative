import React from 'react';

import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_700Bold,
  useFonts,
} from '@expo-google-fonts/archivo';

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { CustomThemeProvider } from './src/hook/useAppTheme';
import { Routes } from './src/routes';

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
      <CustomThemeProvider>
        <Routes />
      </CustomThemeProvider>
    </>
  );
}