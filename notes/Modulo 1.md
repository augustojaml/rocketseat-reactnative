---
tags: [reactnative]
title: Modulo 1
created: '2022-02-26T02:51:52.765Z'
modified: '2022-03-02T13:24:44.029Z'
---

# Modulo 1

## Fundamentos - Desenvolvimento Mobile com React Native

### O que é React Native

- Framework de criação de aplicação nativas mobile
- Projeto Open Source mantido pelo Facebook, desde 2015
- Multiplataforma
- Podemos manipular cada plataforma de forma diferente

### Características React Native

- Fast Refresh que da feedback quase que instantâneo
- Uma base de código para plataforma IOS e Android
- Javascript, uma linguagem muito popular
- Comunidade ativa com inúmeras bibliotecas e UI frameworks

### Criando um projeto React Native

  ```bash
  npx react-native init app_name
  ```

#### Alterando a versão

  ```bash
  npx react-native init app_name --version version_number
  ```

## Rodando aplicação

```bash
yarn run android
```

```bash
npx react-native run adroid
```

## Estrutura do jsx
```js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text>React Native</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

```







