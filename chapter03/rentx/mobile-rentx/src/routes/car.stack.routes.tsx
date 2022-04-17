import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CarAppointments } from '../screens/Car/CarAppointments';
import { CarDetails } from '../screens/Car/CarDetails';
import { CarFinalPrice } from '../screens/Car/CarFinalPrice';
import { CarList } from '../screens/Car/CarList';
import { CarSchedule } from '../screens/Car/CarSchedule';
import { Confirmation } from '../screens/Confirmation';

const { Navigator, Screen } = createNativeStackNavigator();

export function CarStackRoutes() {
  return (
    <>
      <Navigator initialRouteName={'CarList'} screenOptions={{ headerShown: false }}>
        <Screen name="CarList" component={CarList} />
        <Screen name="CarDetails" component={CarDetails} />
        <Screen name="CarSchedule" component={CarSchedule} />
        <Screen name="CarFinalPrice" component={CarFinalPrice} />
        <Screen name="CarAppointments" component={CarAppointments} />
        <Screen name="Confirmation" component={Confirmation} />
      </Navigator>
    </>
  );
}
