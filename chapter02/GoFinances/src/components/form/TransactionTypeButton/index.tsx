import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title, Icon } from './styled';

interface TransactionTypeProps extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
};

export function TransactionTypeButton({ type, title, isActive, ...rest }: TransactionTypeProps) {
  return (
    <>
      <Container type={type} isActive={isActive} {...rest}>
        <Icon type={type} name={icons[type]} />
        <Title>{title}</Title>
      </Container>
    </>
  );
}
