import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterUserStepOne } from '../screens/User/RegisterUser/RegisterUserStepOne';
import { RegisterUserStepTwo } from '../screens/User/RegisterUser/RegisterUserStepTwo';
import { SignInUser } from '../screens/User/SignInUser';

const { Navigator, Screen } = createNativeStackNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignInUser: undefined;
      RegisterUserStepOne: undefined;
      RegisterUserStepTwo: undefined;
    }
  }
}

export function UserStackRoutes() {
  return (
    <>
      <Navigator initialRouteName={'SignInUser'} screenOptions={{ headerShown: false }}>
        <Screen name="SignInUser" component={SignInUser} />
        <Screen name="RegisterUserStepOne" component={RegisterUserStepOne} />
        <Screen name="RegisterUserStepTwo" component={RegisterUserStepTwo} />
      </Navigator>
    </>
  );
}
