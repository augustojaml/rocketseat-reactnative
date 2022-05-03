import React from 'react';
import { useAppTheme } from '../../hooks/useAppTheme';
import { Container, Title } from './styled';

export function ToggleTheme() {
  const { appTheme, toggleTheme } = useAppTheme();

  return (
    <>
      <Container onPress={toggleTheme}>
        {appTheme.name === 'dark' ? <Title>🌞</Title> : <Title>🌛</Title>}
      </Container>
    </>
  );
}
