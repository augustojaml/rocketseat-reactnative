import { NavigationContainer } from '@react-navigation/native';
import { AppStackRoutes } from './app.routes';

export function Routes() {
  return (
    <>
      <NavigationContainer>
        <AppStackRoutes />
      </NavigationContainer>
    </>
  );
}
