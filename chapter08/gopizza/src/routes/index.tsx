import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from '@screens/SignIn';
import { UserStackRoutes } from './user.stack.routes';
import { useAuth } from '@hooks/useAuth';

export type ProductNavigationProps = {
  id?: string;
};

export type OrderNavigationProps = {
  id: string;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      product: ProductNavigationProps;
      order: OrderNavigationProps;
      orders: undefined;
    }
  }
}

export function Routes() {
  const { user } = useAuth();

  return <NavigationContainer>{user ? <UserStackRoutes /> : <SignIn />}</NavigationContainer>;
}
