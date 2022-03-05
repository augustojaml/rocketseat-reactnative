import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, Title, Icon } from './styled';

interface CategorySelectProps extends TouchableOpacityProps {
  title: string;
}

export function CategorySelectButton({ title, ...rest }: CategorySelectProps) {
  return (
    <>
      <Container {...rest} activeOpacity={0.7}>
        <Title>{title}</Title>
        <Icon name="chevron-down" />
      </Container>
    </>
  );
}
