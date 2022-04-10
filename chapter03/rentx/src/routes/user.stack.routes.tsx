import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginUser } from '../screen/User/LoginUser';

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      LoginUser: undefined;
    }
  }
}

export function UserStackRoutes() {
  return (
    <>
      <Navigator initialRouteName={'LoginUser'} screenOptions={{ headerShown: false }}>
        <Screen name="LoginUser" component={LoginUser} />
      </Navigator>
    </>
  );
}
