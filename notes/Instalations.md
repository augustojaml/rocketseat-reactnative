---
title: Instalations
created: '2022-04-03T19:05:16.523Z'
modified: '2022-04-03T19:06:39.530Z'
---

# Instalations

```bash
expo install @expo-google-fonts/montserrat expo-font expo-app-loading && yarn add styled-components && yarn add -D @types/styled-components-react-native
```

```tsx
import React from 'react';
import {
useFonts,
Montserrat_400Regular,
Montserrat_500Medium,
Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import { Home } from './src/screens/Home';

import 'react-native-reanimated';

export default function App() {
  const [fontLoading] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  if (!fontLoading) {
    return <AppLoading />;
  }

  return (
    <>
      <Home />
    </>
  );
}


```
