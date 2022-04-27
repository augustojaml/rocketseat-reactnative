import React, { ReactNode } from 'react';

import AppLoading from 'expo-app-loading';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components';

import theme from '@global/theme';
import { AuhProvider } from '@hooks/useAuth';
import { StatusBar } from 'expo-status-bar';
import { Routes } from './src/routes';

interface IProviders {
  children: ReactNode;
}

const Providers = ({ children }: IProviders) => {
  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <ThemeProvider theme={theme}>
        <AuhProvider>{children}</AuhProvider>
      </ThemeProvider>
    </>
  );
};

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Providers>
        <Routes />
      </Providers>
    </>
  );
}
