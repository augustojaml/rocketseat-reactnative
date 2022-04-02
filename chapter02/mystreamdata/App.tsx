import { DMSans_400Regular, DMSans_500Medium, DMSans_700Bold } from '@expo-google-fonts/dm-sans';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { Routes } from './src/routes';

export default function App() {
  const [isLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
  });

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <Routes />
    </>
  );
}
