import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { CarAppointments } from '../screens/Car/CarAppointments';
import { ProfileUser } from '../screens/User/ProfileUser';
import { useTabs } from '../_shared/hooks/useTabs';
import { CarSvg, HomeSvg, PeopleSvg } from '../_shared/utils/images';
import { CarStackRoutes } from './car.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppTabsRoutes() {
  const theme = useTheme();
  const { showTabs } = useTabs();

  return (
    <>
      <Navigator
        initialRouteName={'Home'}
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: theme.colors.main900,
          tabBarInactiveTintColor: theme.colors.primary400,
          tabBarShowLabel: false,
          tabBarStyle: {
            paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            height: 78,
            backgroundColor: theme.colors.background,
            display: showTabs ? 'flex' : 'none',
          },
        }}
      >
        <Screen
          name="AppStackRoutes"
          component={CarStackRoutes}
          options={{
            tabBarIcon: ({ color }) => <HomeSvg width={24} height={24} fill={color} />,
          }}
        />
        <Screen
          name="CarAppointments"
          component={CarAppointments}
          options={{
            tabBarIcon: ({ color }) => <CarSvg width={24} height={24} fill={color} />,
          }}
        />
        <Screen
          name="ProfileUser"
          component={ProfileUser}
          options={{
            tabBarIcon: ({ color }) => <PeopleSvg width={24} height={24} fill={color} />,
          }}
        />
      </Navigator>
    </>
  );
}
