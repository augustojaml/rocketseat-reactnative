import 'react-native-gesture-handler';

import '@react-native-firebase/app';

import { registerRootComponent } from 'expo';

// if (__DEV__) {
//   firestore().useEmulator('192.168.101.199', 8080);
// }

// const db = firestore();

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
