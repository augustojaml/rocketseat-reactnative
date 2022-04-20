import { NavigationContainer } from '@react-navigation/native';
import { IConfirmation } from '../screens/Confirmation';
import { IUser } from '../_shared/hooks/useAuth';
import { ICar } from '../_shared/hooks/useCar';
import { CarStackRoutes } from './car.stack.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      SignInUser: undefined;
      RegisterUserStepOne: undefined;
      RegisterUserStepTwo: { user: IUser };
      Confirmation: { confirmation: IConfirmation };
      ProfileUser: undefined;
      CarList: undefined;
      CarDetails: { car: ICar };
      CarSchedule: { car: ICar };
      CarFinalPrice: { car: ICar };
      CarAppointments: undefined;
    }
  }
}

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <CarStackRoutes />
      </NavigationContainer>
    </>
  );
}
