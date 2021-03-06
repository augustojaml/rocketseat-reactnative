import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Input, Label, Size } from './styled';

type InputPriceProps = TextInputProps & {
  size: string;
};

export function InputPrice({ size, ...rest }: InputPriceProps) {
  return (
    <>
      <Container>
        <Size>
          <Label>{size}</Label>
        </Size>
        <Label>R$</Label>
        <Input keyboardType="numeric" {...rest} />
      </Container>
    </>
  );
}
