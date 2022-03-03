import React from 'react';
import { TextInputProps } from 'react-native';

import { Container } from './styled';

interface InputProps extends TextInputProps {}

export function Input({ ...rest }: InputProps) {
  return (
    <>
      <Container {...rest} />
    </>
  );
}
