import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { PassProvider } from '../hooks/usePass';
import { Home } from '../screens/Home';
import { SavePass } from '../screens/SavePass';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <>
      <PassProvider>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Home" component={Home} />
          <Screen name="SavePass" component={SavePass} />
        </Navigator>
      </PassProvider>
    </>
  );
}
