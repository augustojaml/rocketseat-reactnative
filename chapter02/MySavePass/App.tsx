import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { AppTheme, AppThemeProvider } from './src/hooks/useAppTheme';
import { AuthProvider } from './src/hooks/useAuth';
import { PassProvider } from './src/hooks/usePass';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <AppThemeProvider>
        <AppTheme>
          <AuthProvider>
            <PassProvider>
              <Routes />
            </PassProvider>
          </AuthProvider>
        </AppTheme>
      </AppThemeProvider>
    </>
  );
}
