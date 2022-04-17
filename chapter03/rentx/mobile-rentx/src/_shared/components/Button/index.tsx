import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { MainTextRegular } from '../fonts';

import { Container } from './styled';

interface ButtonProps extends TouchableOpacityProps {
  title?: string;
  background?: string;
  color?: string;
  isActive?: boolean;
  isLoading?: boolean;
  marginTop?: number;
}

export function Button({
  title = 'Button',
  background,
  color,
  isActive = true,
  isLoading = false,
  marginTop = 0,
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
        marginTop={marginTop}
      >
        {isLoading ? (
          <ActivityIndicator size={RFValue(25)} color={theme.colors.background} />
        ) : (
          <MainTextRegular color={color ? color : theme.colors.shape}>{title}</MainTextRegular>
        )}
      </Container>
    </>
  );
}
