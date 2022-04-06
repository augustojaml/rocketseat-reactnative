---
title: Modulo 03
created: '2022-04-06T14:22:44.966Z'
modified: '2022-04-06T20:26:12.406Z'
---

# Modulo 03

### [Layout da aplicação](https://www.figma.com/file/e8Kkb8QImQV0Z0F8WXkgju/RentX-Ignite---Offline-First?node-id=22%3A583)

### Creação de snippets

- Modulo 3 -> Criação do projeto e dica ninja
- Vscode -> file -> preferences -> User Snippets

```json
{
  "Basic React Native Interface": {
    "prefix": "rnfc",
    "body": [
      "import React from 'react';",
      "",
      "import { Container } from './styled';",
      "",
      "export function ${TM_DIRECTORY/.*[\\\\|\\/]+(.*)/$1/}() {",
      "  return (",
      "    <>",
      "      <Container />",
      "    </>",
      " );",
      "}"
    ],
    "description": "Basic React Native Interface with Styled Component"
  },
  "Basic React Native Styled Component": {
    "prefix": "rnsc",
    "body": [
      "import styled from 'styled-components/native';",
      "",
      "export const Container = styled.View`",
      "  flex: 1;",
      "`;",
      "",
      "export const Title = styled.Text``;"
    ],
    "description": "Basic Styled Component for React Native"
  }
}
```

