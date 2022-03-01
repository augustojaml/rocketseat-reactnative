import React, {useEffect} from 'react';

import SplashScreen from 'react-native-splash-screen';

import {StatusBar} from 'react-native';
import {Home} from './src/pages/Home';
import {appStyle} from './src/styles';

function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={appStyle.colors.black800}
      />
      <Home />
    </>
  );
}

export {App};
