import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from '../screens/Home';
import { RegisterPasswords } from '../screens/RegisterPasswords';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <>
      <NavigationContainer>
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen name="Home" component={Home} />
          <Screen name="RegisterPasswords" component={RegisterPasswords} />
        </Navigator>
      </NavigationContainer>
    </>
  );
}
