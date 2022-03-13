import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { AppTheme, AppThemeProvider } from './src/hooks/useAppTheme';
import { AuthProvider } from './src/hooks/useAuth';
import { Routes } from './src/routes';

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
          <GestureHandlerRootView style={{ flex: 1 }}>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </GestureHandlerRootView>
        </AppTheme>
      </AppThemeProvider>
    </>
  );
}
