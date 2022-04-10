import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginUser } from '../screen/User/LoginUser';
import { RegisterUserStepOne } from '../screen/User/RegisterUser/RegisterUserStepOne';
import { RegisterUserStepTwo } from '../screen/User/RegisterUser/RegisterUserStepTwo';

const { Navigator, Screen } = createNativeStackNavigator();

interface IRegisterUserStepOne {
  name: string;
  email: string;
  driveLicense: string;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      LoginUser: undefined;
      RegisterUserStepOne: undefined;
      RegisterUserStepTwo: { stepOne: IRegisterUserStepOne };
    }
  }
}

export function UserStackRoutes() {
  return (
    <>
      <Navigator initialRouteName={'LoginUser'} screenOptions={{ headerShown: false }}>
        <Screen name="LoginUser" component={LoginUser} />
        <Screen name="RegisterUserStepOne" component={RegisterUserStepOne} />
        <Screen name="RegisterUserStepTwo" component={RegisterUserStepTwo} />
      </Navigator>
    </>
  );
}
