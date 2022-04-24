import React from 'react';
import {Home} from './src/pages/home';
import {StatusBar} from 'react-native';

export default function App(): JSX.Element {
  return (
    <>
      <StatusBar backgroundColor="#121015" barStyle="light-content" />
      <Home />
    </>
  );
}
