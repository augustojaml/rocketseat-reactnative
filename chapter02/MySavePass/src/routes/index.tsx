import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.route';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      RegisterPasswords: undefined;
      SignIn: undefined;
    }
  }
}

export function Routes() {
  const user = null;

  return (
    <>
      <NavigationContainer>{user ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
    </>
  );
}
