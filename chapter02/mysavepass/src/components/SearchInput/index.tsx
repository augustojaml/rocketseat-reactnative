import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Container, Icon, IconButton, Input } from './styled';

interface Props extends TextInputProps {
  onPress?: () => void;
}

export function SearchInput({ onPress, ...rest }: Props) {
  const theme = useTheme();

  return (
    <>
      <Container>
        <Input {...rest} placeholderTextColor={theme.colors.text_gray_dark} />
        <IconButton onPress={onPress}>
          <Icon name="search" />
        </IconButton>
      </Container>
    </>
  );
}
