import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Container, Title } from './styled';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  background?: string;
  isActive?: boolean;
  isLoading?: boolean;
}

export function Button({
  title = 'Button',
  background,
  isActive = true,
  isLoading = false,
  ...rest
}: ButtonProps) {
  const theme = useTheme();

  return (
    <>
      <Container
        {...rest}
        activeOpacity={0.7}
        background={background ? background : theme.colors.main900}
        isActive={isActive}
        disabled={!isActive}
      >
        {isLoading ? (
          <ActivityIndicator size={RFValue(25)} color={theme.colors.background} />
        ) : (
          <Title>{title}</Title>
        )}
      </Container>
    </>
  );
}
