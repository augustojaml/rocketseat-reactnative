import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { AuthRoutes } from './auth.routes';

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
        <AuthRoutes />
      </NavigationContainer>
    </>
  );
}
