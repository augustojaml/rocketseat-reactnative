import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { IConfirmation } from '../screens/Confirmation';
import { IUser, useAuth } from '../_shared/hooks/useAuth';
import { CarProvider, ICar } from '../_shared/hooks/useCar';
import { useTabs } from '../_shared/hooks/useTabs';
import { AppTabsRoutes } from './app.tabs.routes';
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
    }
  }
}

export function Routes() {
  const { user } = useAuth();
  const navigationRef = useNavigationContainerRef();
  const { changeShowTabs } = useTabs();

  navigationRef.addListener('state', (e) => {
    const screens = ['ProfileUser', 'CarList', 'CarAppointments'];
    const currentScreen = navigationRef && navigationRef.getCurrentRoute()?.name;
    screens.includes(currentScreen!) ? changeShowTabs(true) : changeShowTabs(false);
  });

  return (
    <>
      <NavigationContainer ref={navigationRef}>
        {!user.id ? (
          <UserStackRoutes />
        ) : (
          <CarProvider>
            <AppTabsRoutes />
          </CarProvider>
        )}
      </NavigationContainer>
    </>
  );
}
