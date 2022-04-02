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
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { CustomThemeProvider } from './src/hooks/useAppTheme';
import { AuthHookProvider } from './src/hooks/useAuth';
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

  useEffect(() => {
    fontsLoaded && SplashScreen.hide();
  }, []);

  // if (!fontsLoaded) {
  //   return <AppLoading />;
  // }

  return (
    <>
      <CustomThemeProvider>
        <AuthHookProvider>
          <Routes />
        </AuthHookProvider>
      </CustomThemeProvider>
    </>
  );
}
