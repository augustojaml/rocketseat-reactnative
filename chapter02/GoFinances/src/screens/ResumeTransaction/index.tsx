import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Header } from '../../global/components/Header';
import { Container, ScreenTitle } from './styled';

export function ResumeTransaction() {
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <ScreenTitle>Resumo</ScreenTitle>
        </Header>
      </Container>
    </>
  );
}
