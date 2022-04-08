import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ICar } from '../hooks/useCar';
import { Details } from '../screens/Car/Details';
import { Scheduling } from '../screens/Car/Scheduling';
import { DetailsPrice } from '../screens/Car/DetailsPrice';

import { Home } from '../screens/Home';
import { Confirmation } from '../screens/Confirmation';

const { Navigator, Screen } = createNativeStackNavigator();

export interface IConfirmation {
  title: string;
  subTitle: string;
  nextScreen: keyof ReactNavigation.RootParamList;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Details: { car: ICar };
      Scheduling: { car: ICar };
      DetailsPrice: { car: ICar };
      Confirmation: IConfirmation;
    }
  }
}

export function AppStackRoutes() {
  return (
    <>
      <Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="Details" component={Details} />
        <Screen name="Scheduling" component={Scheduling} />
        <Screen name="DetailsPrice" component={DetailsPrice} />
        <Screen name="Confirmation" component={Confirmation} />
      </Navigator>
    </>
  );
}
