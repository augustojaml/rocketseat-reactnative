import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';
import { SignIn } from '../screens/SignIn';
import { auth } from '../services/firestore';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

export function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged((user) => {
      setUser(user);
    });

    return subscribe;
  }, []);

  return <NavigationContainer>{user ? <AppRoutes /> : <SignIn />}</NavigationContainer>;
}
