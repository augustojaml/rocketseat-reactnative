import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      Home: undefined;
    }
  }
}

export function Routes() {
  const { user } = useAuth();

  return (
    <>
      <NavigationContainer>{user ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
    </>
  );
}
