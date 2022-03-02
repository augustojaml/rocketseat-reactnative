import React from 'react';
import AppLoading from 'expo-app-loading';

import { AppTheme, AppThemeProvider } from './src/hooks/useAppTheme';

import { Dashboard } from './src/pages/Dashboard';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { Montserrat_400Regular, Montserrat_500Medium, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppThemeProvider>
        <AppTheme>
          <Dashboard />
        </AppTheme>
      </AppThemeProvider>
    </>
  );
}
