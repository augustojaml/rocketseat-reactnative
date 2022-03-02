import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components';
import { useAppTheme } from '../../hooks/useAppTheme';

import { Container, Title } from './styled';

export function Dashboard() {
  const { appTheme, toggleTheme } = useAppTheme();

  return (
    <>
      <Container>
        <Title>Dashboard</Title>

        {appTheme.theme === 'dark' ? (
          <TouchableOpacity onPress={toggleTheme}>
            <Text style={{ fontSize: 30 }}>🌛</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={toggleTheme}>
            <Text style={{ fontSize: 30 }}>🌞</Text>
          </TouchableOpacity>
        )}
      </Container>
    </>
  );
}
