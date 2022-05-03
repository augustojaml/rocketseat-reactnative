import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { IConfirmation } from '../screens/Confirmation';
import { IUser, useAuth } from '../shared/hooks/useAuth';
import { CarProvider, ICar } from '../shared/hooks/useCar';
import { useTabs } from '../shared/hooks/useTabs';
import { AppTabsRoutes } from './app.tabs.routes';
import { CarStackRoutes } from './car.stack.routes';
import { UserStackRoutes } from './user.stack.routes';

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
      CarFinalPrice: { car: ICar; dates: string[] };
      CarAppointments: undefined;
      CarStackRoutes: undefined;
    }
  }
}

export function Routes() {
  const navigationRef = useNavigationContainerRef();
  const { changeShowTabs, showTabs } = useTabs();
  const { user } = useAuth();

  navigationRef.addListener('state', (e) => {
    const screens = ['ProfileUser', 'CarList', 'CarAppointments'];
    const currentScreen = navigationRef && navigationRef.getCurrentRoute()?.name;
    screens.includes(currentScreen!) ? changeShowTabs(true) : changeShowTabs(false);
  });

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {user ? (
          <CarProvider>
            <AppTabsRoutes />
          </CarProvider>
        ) : (
          <UserStackRoutes />
        )}
      </NavigationContainer>
    </>
  );
}
