import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { ButtonTitle, Container, Button, Icon } from './styled';

interface Props extends RectButtonProps {
  title?: string;
  icon?: string;
  type: 'up' | 'down';
  isActive: boolean;
}

export function TransactionTypeButton({
  title = 'Button',
  icon = 'flag',
  type,
  isActive,
  ...rest
}: Props) {
  return (
    <>
      <Container type={type} isActive={isActive}>
        <Button type={type} isActive={isActive} {...rest}>
          <Icon type={type} name={icon} />
          <ButtonTitle>{title}</ButtonTitle>
        </Button>
      </Container>
    </>
  );
}
