---
tags: [reactnative]
title: Modulo 2
created: '2022-03-01T22:43:18.192Z'
modified: '2022-03-02T13:25:17.853Z'
---

# Modulo 2

## Expo e Styled Components

#### [Desgin do Projeto](https://www.figma.com/file/EwGtJv3Tc0x3Qt5q1OPxzU/Chapter-II---GoFinances-Ignite?node-id=0%3A1)

#### [Expo](https://expo.dev/)

#### [Whimsical](https://whimsical.com/augusto-monteiro-6dT8uQk3v2vjsrYew4mTTM)

#### Instalando o Expo

```bash
npm install --global expo-cli
```

#### Criando aplicação

```bash
expo init AppTest
```

`Escolha a opção  Bare workflow | minimal`

#### Adicione o Typescript

Crie o arquivo `tsconfig.json` na raiz do projeto

#### Execute
```bash
expo start
```

#### Confirme a instalação do `typescript`

#### Edite o arquivo `tsconfig.json`
```json
{
  "compilerOptions": {
    "strict": true
  },
  "extends": "expo/tsconfig.base"
}
```

#### Altere o os arquivos `*.js` para `*.tsx`

### Adicionando Typescript

#### instalar Dependências

```bash
yarn add -D typescript @types/jest @types/react @types/react-native @types/react-test-renderer
```

#### criar arquivo tsconfig.json
```json
{
  "compilerOptions": {
    "allowJs": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "jsx": "react-native",
    "lib": ["es2017"],
    "moduleResolution": "node",
    "noEmit": true,
    "strict": true,
    "target": "esnext"
  },
  "exclude": [
    "node_modules",
    "babel.config.js",
    "metro.config.js",
    "jest.config.js"
  ]
}
```

### Documentação diversas

```bash
https://devdocs.io/
```




