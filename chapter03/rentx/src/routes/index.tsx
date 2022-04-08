import { NavigationContainer } from '@react-navigation/native';
import { AppTabsRoutes } from './app.tabs.routes';

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <AppTabsRoutes />
      </NavigationContainer>
    </>
  );
}
