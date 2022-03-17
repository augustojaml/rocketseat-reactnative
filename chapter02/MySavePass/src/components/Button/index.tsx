import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Loading, Title } from './styled';

interface Props extends TouchableOpacityProps {
  title?: string;
  marginTop?: number;
  isLoading?: boolean;
}

export function Button({
  title = 'Button',
  marginTop,
  isLoading = false,
  ...rest
}: Props) {
  return (
    <>
      <Container {...rest} marginTop={marginTop}>
        {isLoading ? <Loading size={30} /> : <Title>{title}</Title>}
      </Container>
    </>
  );
}
