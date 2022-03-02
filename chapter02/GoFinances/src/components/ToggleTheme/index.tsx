import React from 'react';
import { useAppTheme } from '../../hooks/useAppTheme';

import { Container, Symbol } from './styled';

export function ToggleTheme() {
  const { appTheme, toggleTheme } = useAppTheme();

  return (
    <>
      <Container onPress={toggleTheme}>
        <Symbol>{appTheme.theme === 'dark' ? '🌞' : '🌛'}</Symbol>
      </Container>
    </>
  );
}

/**
const { appTheme, toggleTheme } = useAppTheme();
{appTheme.theme === 'dark' ? (
    <TouchableOpacity onPress={toggleTheme}>
      <Text style={{ fontSize: 30 }}>🌛</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={toggleTheme}>
      <Text style={{ fontSize: 30 }}>🌞</Text>
    </TouchableOpacity>
  )}
*/
