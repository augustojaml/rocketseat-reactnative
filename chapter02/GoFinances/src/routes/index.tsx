import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';
import { AppRoutes } from './app.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Dashboard: undefined;
      SignIn: undefined;
    }
  }
}

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </>
  );
}
