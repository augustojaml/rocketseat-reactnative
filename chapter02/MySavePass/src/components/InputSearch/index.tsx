import React from 'react';
import { TextInputProps } from 'react-native';
import { Container, Icon, IconButton, Input } from './styled';

interface Props extends TextInputProps {}

export function InputSearch({ ...rest }: TextInputProps) {
  return (
    <>
      <Container>
        <Input {...rest} />
        <IconButton>
          <Icon name="search" />
        </IconButton>
      </Container>
    </>
  );
}
