import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { ButtonText, Container } from './styled';

interface Props extends RectButtonProps {
  title?: string;
  background?: string;
  onPress?: () => void;
}

export function Button({ title = 'Button', background, onPress }: Props) {
  const { colors } = useTheme();

  return (
    <>
      <Container
        background={background ? background : colors.secondary}
        onPress={onPress}
      >
        <ButtonText>{title}</ButtonText>
      </Container>
    </>
  );
}
