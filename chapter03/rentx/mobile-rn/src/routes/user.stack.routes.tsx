import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Confirmation } from '../screens/Confirmation';
import { ProfileUser } from '../screens/User/ProfileUser';
import { RegisterUserStepOne } from '../screens/User/RegisterUser/RegisterUserStepOne';
import { RegisterUserStepTwo } from '../screens/User/RegisterUser/RegisterUserStepTwo';
import { SignInUser } from '../screens/User/SignInUser';

const { Navigator, Screen } = createNativeStackNavigator();

export function UserStackRoutes() {
  return (
    <>
      <Navigator initialRouteName={'SignInUser'} screenOptions={{ headerShown: false }}>
        <Screen name="SignInUser" component={SignInUser} />
        <Screen name="RegisterUserStepOne" component={RegisterUserStepOne} />
        <Screen name="RegisterUserStepTwo" component={RegisterUserStepTwo} />
        <Screen name="Confirmation" component={Confirmation} />
      </Navigator>
    </>
  );
}
