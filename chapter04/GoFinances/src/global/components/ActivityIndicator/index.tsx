import React from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicatorLoader, Container } from './styled';

interface Props {
  color?: string;
}

export function ActivityIndicator({ color }: Props) {
  const theme = useTheme();

  return (
    <>
      <Container>
        <ActivityIndicatorLoader
          size="large"
          color={color ? color : theme.colors.shape}
        />
      </Container>
    </>
  );
}
