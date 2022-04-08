import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { CarSvg, HomeSvg, PeopleSvg } from '../assets/images';
import { useCustomRoute } from '../hooks/useCustomRoute';
import { Appointments } from '../screens/Car/Appointments';
import { Profile } from '../screens/User/Profile';
import { AppStackRoutes } from './app.stack.routes';

const { Navigator, Screen } = createBottomTabNavigator();

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Appointments: undefined;
      Profile: undefined;
    }
  }
}

export function AppTabsRoutes() {
  const theme = useTheme();
  const { showTab } = useCustomRoute();

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
            display: showTab ? 'flex' : 'none',
          },
        }}
      >
        <Screen
          name="AppStackRoutes"
          component={AppStackRoutes}
          options={{
            tabBarIcon: ({ color }) => <HomeSvg width={24} height={24} fill={color} />,
          }}
        />

        <Screen
          name="MyCars"
          component={Appointments}
          options={{
            tabBarIcon: ({ color }) => <CarSvg width={24} height={24} fill={color} />,
          }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({ color }) => <PeopleSvg width={24} height={24} fill={color} />,
          }}
        />
      </Navigator>
    </>
  );
}
