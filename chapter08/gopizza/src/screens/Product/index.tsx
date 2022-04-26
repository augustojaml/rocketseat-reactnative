import { ButtonBack } from '@components/ButtonBack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Container, DeleteLabel, Header, Title } from './styled';

export function Product() {
  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <Header>
          <ButtonBack onPress={() => {}} />
          <Title>Cadastrar</Title>
          <TouchableOpacity>
            <DeleteLabel>Deletar</DeleteLabel>
          </TouchableOpacity>
        </Header>
      </Container>
    </>
  );
}
