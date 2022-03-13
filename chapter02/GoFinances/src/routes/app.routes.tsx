import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { TransactionProvider } from '../hooks/useTransaction';
import { Dashboard } from '../screens/Dashboard';
import { RegisterTransaction } from '../screens/RegisterTransaction';
import { ResumeTransaction } from '../screens/ResumeTransaction';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <>
      <TransactionProvider>
        <Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.secondary,
            tabBarInactiveTintColor: theme.colors.text,
            tabBarLabelPosition: 'beside-icon',
            tabBarStyle: {
              height: 70,
              paddingVertical: Platform.OS === 'ios' ? 20 : 0,
            },
          }}
        >
          <Screen
            name="Dashboard"
            component={Dashboard}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons
                  name="format-list-bulleted"
                  size={size}
                  color={color}
                />
              ),
            }}
          />
          <Screen
            name="Cadastrar"
            component={RegisterTransaction}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="attach-money" size={size} color={color} />
              ),
            }}
          />
          <Screen
            name="Resumo"
            component={ResumeTransaction}
            options={{
              tabBarIcon: ({ size, color }) => (
                <MaterialIcons name="pie-chart" size={size} color={color} />
              ),
            }}
          />
        </Navigator>
      </TransactionProvider>
    </>
  );
}
