import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarList } from '../screen/Car/CarList';
import { CarDetails } from '../screen/Car/CarDetails';
import { ICar } from '../hook/useCar';

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      CarList: undefined;
      CarDetails: { car: ICar };
    }
  }
}

export function AppStackRoutes() {
  return (
    <>
      <Navigator initialRouteName={'CarList'} screenOptions={{ headerShown: false }}>
        <Screen name="CarList" component={CarList} />
        <Screen name="CarDetails" component={CarDetails} />
      </Navigator>
    </>
  );
}
