# Fundamentos do Firebase no React Native

- Desenvolver plataformas efetivas rápidas
- Firebase é um backend
- Provê a infraestrutura e o back-end de uma aplicação
- Oferece vários recursos e funcionalidades
- Foco no front-end

# Vantagens

- Versão gratuita
- Escalável
- Possui suporte para diversas plataformas
- Reduz o tempo de desenvolvimento
- Possui fácil implementação

# Projeto

- [Link](https://github.com/rocketseat-education/myshopping-rn-ignite.git)

# Criando um projeto no Firebase

- Criar uma conta e clicar na opção ir para o console
- Adicionar um projeto | Informe o `nome do projeto` | confirmar | continuar
- Deixar Ativo o Google Analytics neste projeto | continuar
- Escolha Default Account for Firebase | Criar projeto | Continuar

# Instalar o firebase no projeto

- [link](https://rnfirebase.io/)

  ```bash
  # Using Yarn
  yarn add @react-native-firebase/app
  ```

# Configurando o firebase no Android

- Acesso o projeto `nome do seu projeto` e click no ícone do android
- Vá até `android/app/src/main/java/com/myshopping/MainActivity.java` e pegue o nome do pacote e insira em nome do pacote android
- Em `Apelido do app (opcional)` coloque um nome para identificar o projeto
- Gera o certicado SHA-1. Dentro da pasta do projeto
  ```bash
  cd android && ./gradlew signingReport
  ```
- Procure pela variante `debugAndroidTest` e copie o valor `SHA-1` e cole em Certificado de assinatura de depuração SHA-1 (opcional) | Registrar app | Fazer download do arquivo google-services.json e colar em `android/app`

- Procure o arquivo `android/build.gradle` e segui instruções do firebase sdk

- Procure o arquivo `android/app/build.gradle` e segui instruções do firebase sdk

# Firestore

- Banco de dados noSQL
- Flexibilidade
- Atualização em tempo real
- Suporte para offline
- Banco de performático | grande escala
- Armazena os dodos em documentos e coleções
- Documento (Objeto)
- Coleções (Conjunto de documentos)
- Coleções não pode conter outros documentos e coleções não podem conter outras coleções

# Realtime Database | Could Firestore

- Could Firestore | mais novo mais completo

# Criar banco de dados

- Acesso no menu lateral esquerdo do seu projeto | Friestore Database | Criar banco de dados
- Selecione o modo de teste | Avança | ativar

# Criar Coleção

- Iniciar uma coleção | `nome da coleção` | próximo

# Utilização do Firestore na aplicação

- [link] https://rnfirebase.io/firestore/usage

# Adicionar um documento no Firestore via aplicação.

- Ver o arquivo [myshopping] `src/components/FormBox/index.tsx`

# Consultar vários documentos

- Ver arquivo [myshopping] `src/components/ShoppingList`

# Atualizar e deletar documento

- ver arquivo [myshopping] `src/components/Product`

# Capacidade Offline

# Emulador do firebase

- [link](https://rnfirebase.io/firestore/emulator)

# Cloud Store

- Ativando o cloud store | sidebar | storage
- Alterar rules
  ```json
  rules_version = '2';
  service firebase.storage {
    match /b/{bucket}/o {
      match /{allPaths=**} {
        allow read, write
      }
    }
  }
  ```
- [link](https://rnfirebase.io/storage/usage)
