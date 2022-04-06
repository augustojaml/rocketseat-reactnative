---
deleted: true
tags: [reactnative]
title: Packages
created: '2022-02-26T03:09:58.393Z'
modified: '2022-04-06T14:22:04.411Z'
---

# Packages


#### [Polished](https://polished.js.org/docs/)
```bash
yarn add polished
```
---

#### [Styled Components](https://styled-components.com)
```bash
yarn add styled-components && yarn add -D @types/styled-components-react-native
```
---

#### [Google fonts](https://github.com/expo/google-fonts)
```bash
expo install expo-font @expo-google-fonts/poppins @expo-google-fonts/montserrat
```
---

#### [AppLoading](https://docs.expo.dev/versions/latest/sdk/app-loading/)
```bash
expo install expo-app-loading
```
---

#### [React Native Responsive Fontsize](https://github.com/heyman333/react-native-responsive-fontsize/blob/master/README.md)
```bash
yarn add react-native-responsive-fontsize
```
---

#### [Expo Vector Icon](https://docs.expo.dev/guides/icons/)
- [Icons](https://icons.expo.fyi)

---

#### [Iphone X Helper](https://github.com/ptelad/react-native-iphone-x-helper)
```bash
yarn add react-native-iphone-x-helper
```

#### [Expo Status Bar](https://docs.expo.dev/versions/latest/sdk/status-bar/)
```bash
expo install expo-status-bar
```

#### [React Hook Form](https://react-hook-form.com/)
```bash
yarn add react-hook-form
```

#### [Schema Validation]
```bash
yarn add @hookform/resolvers yup
```

#### [React Navigation](https://reactnavigation.org/docs/getting-started/)
```bash
yarn add @react-navigation/native
```

```bash
expo install react-native-screens react-native-safe-area-context
```

```bash
yarn add @react-navigation/bottom-tabs
```

#### [Victory](https://formidable.com/open-source/victory/docs/native)
```bash
yarn add victory-native
```

#### [Authentication With Google](https://docs.expo.dev/guides/authentication/#google)

- Acesse => [Console Cloud Google](https://console.cloud.google.com/apis/credentials?pli=1)
- Crie um novo projeto -> (nome do projeto) -> criar
- Tela de permissão OAuth -> Externo -> Criar
- Preencha o `nome do app` -> Dados de Contato do Desenvolvedor `Endereço de e-mail`
- Adicione novo escopop -> selecione `auth/userinfo.email` e `auth/userinfo.profile` -> atualizar -> salvar e continuar -> salvar e continuar -> voltar para o painel
- Tela de permissão OAuth e clique em publicar aplicativo -> confirmar
- Acesse credenciais -> criar credenciais -> selecione id do cliente oauth -> Selecione Aplicativo da web -> newgofinance -> acione URIS autorizados -> Origens Javascript autorizadas -> adicionar uri `https://auth.expo.io` | Adicionar uris de 
- Open `https://expo.dev/accounts/augustojaml/settings/members` e pegue Account owner login
- Update app.json
```json
{
  "expo": {
    "name": "GoFinances",
    "slug": "GoFinances",
    "schema":"GoFinances",
    "version": "1.0.0",
    "assetBundlePatterns": [
      "**/*"
    ]
  }
}
```
- URIs de redirecionamento autorizados -> `https://auth.expo.io/@augustojaml/GoFinances`
- [Documentação](https://developers.google.com/identity/protocols/oauth2/javascript-implicit-flow?hl=en#oauth-2.0-endpoints_1)


[Babel Plugin Inline Dotenv](babel-plugin-inline-dotenv)
```bash
yarn add babel-plugin-inline-dotenv
```




