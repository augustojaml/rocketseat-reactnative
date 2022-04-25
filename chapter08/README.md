# GoPizza

- [Link do Aplicativo Pronto](https://github.com/rodrigorgtic/gopizza/blob/master/src/routes/index.tsx)
- [Link dos Assets](https://storage.googleapis.com/xesque.rocketseat.dev/ignite/react-native-assets/assets-app-de-pizzas.zip)
- [Link do Projeto](https://www.figma.com/file/FdHynpD8BRO19arMNVCjG7/augustojaml-gopizza)

# Criação do projeto

- Iniciando o projeto

  ```bash
  expo init gopizza
  ```

- Escolha a opção `minimal bare and minimal, just the essentials to get you started`

- Renomeio o arquivo `App.js` para `App.tsx` | expo start |yes => para instalar typescript

- Configurando o Path Mapping

  - [link](https://github.com/tleunen/babel-plugin-module-resolver#readme)

  ```bash
  yarn add babel-plugin-module-resolver -D
  ```

  - Abra o arquivo `gopizza/babel.config.js`

    ```js
    module.exports = function (api) {
      api.cache(true);
      return {
        presets: ['babel-preset-expo'],
        plugins: [
          [
            'module-resolver',
            {
              root: ['./src'],
              extensions: ['.ts', '.tsx', '.js', '.json'],
              alias: {
                '@components': './src/components',
                '@screens': './src/screens',
                '@assets': './src/assets',
              },
            },
          ],
        ],
      };
    };
    ```

  - Abra o arquivo tsconfig.json

  ```json
  {
    "extends": "expo/tsconfig.base",
    "compilerOptions": {
      "strict": true,
      "baseUrl": "./",
      "paths": {
        "@src/*": ["./src/*"],
        "@components/*": ["./src/components/*"],
        "@screens/*": ["./src/screens/*"],
        "@assets/*": ["./src/assets/*"]
      }
    }
  }
  ```

- Fonts Personalizadas

  ```bash
  expo install @expo-google-fonts/dm-sans @expo-google-fonts/dm-serif-display  expo-font expo-app-loading
  ```

  - App.tsx

  ```tsx
  import { Test } from '@screens/Test';
  import React from 'react';

  import AppLoading from 'expo-app-loading';
  import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
  import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';

  export default function App() {
    const [fontsLoaded] = useFonts({
      DMSans_400Regular,
      DMSerifDisplay_400Regular,
    });

    if (!fontsLoaded) {
      return <AppLoading />;
    }

    return (
      <>
        <Test />
      </>
    );
  }
  ```

- Styled Components

  ```bash
  yarn add styled-components && yarn add -D @types/styled-components-react-native
  ```

  - Default theme

    ```ts
    export default {
      COLORS: {
        BACKGROUND: '#F7F7F7',

        PRIMARY_900: '#B83341',
        PRIMARY_800: '#E03F50',
        PRIMARY_100: '#D16470',
        PRIMARY_50: '#FFABB3',

        SECONDARY_900: '#572D31',
        SECONDARY_500: '#7A6769',
        SECONDARY_400: '#93797B',

        SUCCESS_900: '#528F33',
        SUCCESS_50: '#F7FFF9',

        ALERT_900: '#B27F00',
        ALERT_800: '#C5941A',
        ALERT_50: '#F3EFE5',

        SHAPE: '#DCDCDC',
        TITLE: '#FFF',

        GRADIENT: ['#B83341', '#E03F50'],
      },
      FONTS: {
        TITLE: 'DMSerifDisplay_400Regular',
        TEXT: 'DMSans_400Regular',
      },
    };
    ```

    - styled.d.ts

    ```ts
    import 'styled-components';
    import theme from '.';

    declare module 'styled-components' {
      type ThemeType = typeof theme;

      export interface DefaultTheme extends ThemeType {}
    }
    ```

- Expo Linear Gradient
  [link](https://docs.expo.dev/versions/latest/sdk/linear-gradient/)

  ```bash
  expo install expo-linear-gradient
  ```

- Expo GestureHandler
  [link](https://docs.expo.dev/versions/latest/sdk/gesture-handler/)

```bash
expo install react-native-gesture-handler
```

- react-native-iphone-x-helper
  [link](https://github.com/ptelad/react-native-iphone-x-helper)

  ```bash
  yarn add react-native-iphone-x-helper
  ```

- Criando um projeto com Firebase;

  - [Acesse o link](https://console.firebase.google.com/?hl=pt)
  - Clique em adicionar Projeto | Nome do Projeto | Continuar | Continuar
  - Escolha ou crie uma conta do Google Analytics | Default Account for Firebase | Criar Projeto | Continuar
  - Instalar firebase

    ```bash
    yarn add @react-native-firebase/app
    ```

  - Abra o arquivo `android/app/src/main/java/com/gopizza/MainActivity.java` e copie o nome do package ex: `com.name_do_pacote`
  - Abra o projeto e clique no icone do Android
  - Adicione o nome do package
  - informe o apelido `android`
  - Registrar SHA-1
    ```bash
    cd android && ./gradlew signingReport
    ```
  - copie SHA1 debugAndroidTest gerando no início e cole em Certificado de assinatura de depuração SHA-1 (opcional) | Registrar app
  - Caso de erro saia e entre no projeto novamente, clique no icone do android, icone de configuração, role até o final e veja se a chave foi inserido
  - Clique em Ver instruções do SDK
  - Faça download do arquivo .json
  - Salve o arquivo na pasta `android/app` | clique em próximo
  - Siga as instruções de configuração nativa | próximo

- Ativar Autenticação

  - Vá na siderbar | Authetication | Primeiros passos | E-mail/senha | Ativar | Salvar
  - Clique em Users e adicione dois usuários(email, senha)
  - Siderbar Firestore Database | Criar Banco | Mode de Teste | Avança | Ativar
  - Clique em iniciar coleção | users | próximo
