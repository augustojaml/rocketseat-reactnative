import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Icon, ButtonTitle } from './styled';

interface Props extends RectButtonProps {
  title?: string;
}

export function CategorySelectButton({ title = 'Button', ...rest }: Props) {
  return (
    <>
      <Container {...rest}>
        <ButtonTitle>{title}</ButtonTitle>
        <Icon name="chevron-down" />
      </Container>
    </>
  );
}
