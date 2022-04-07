import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ICar } from '../hooks/useCar';
import { CarDetails } from '../screens/CarDetails';
import { Home } from '../screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      CarDetails: { car: ICar };
    }
  }
}

export function AppStackRoutes() {
  return (
    <>
      <Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
        <Screen name="CarDetails" component={CarDetails} />
      </Navigator>
    </>
  );
}
