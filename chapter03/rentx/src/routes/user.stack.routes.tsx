import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginUser } from '../screen/User/LoginUser';
import { RegisterUserStepOne } from '../screen/User/RegisterUser/RegisterUserStepOne';
import { RegisterUserStepTwo } from '../screen/User/RegisterUser/RegisterUserStepTwo';
import { Confirmation } from '../screen/Confirmation';

const { Navigator, Screen } = createNativeStackNavigator();

export interface IRegisterUserStepOne {
  name: string;
  email: string;
  driveLicense: string;
}

export interface IScreenConfirmation {
  title: string;
  subTitle: string;
  nextScreen: keyof ReactNavigation.RootParamList;
}

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      LoginUser: undefined;
      RegisterUserStepOne: undefined;
      RegisterUserStepTwo: { stepOne: IRegisterUserStepOne };
      Confirmation: { screen: IScreenConfirmation };
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
        <Screen name="Confirmation" component={Confirmation} />
      </Navigator>
    </>
  );
}
