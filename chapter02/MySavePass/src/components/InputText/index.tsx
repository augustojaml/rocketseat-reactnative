import React, { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import {
  Container,
  Error,
  ErrorContainer,
  Icon,
  IconButton,
  IconError,
  Input,
  Label,
} from './styled';

interface Props extends TextInputProps {
  control: Control;
  label: string;
  name: string;
  isPassword?: boolean;
  error?: string;
}

export function InputText({
  control,
  label,
  isPassword,
  error,
  name,
  ...rest
}: Props) {
  const theme = useTheme();

  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword((state) => !state);
  }

  return (
    <>
      <Label>{label}</Label>
      <Container>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              {...rest}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={theme.colors.text_gray_dark}
              secureTextEntry={isPassword && !showPassword}
            />
          )}
        />
        {isPassword && (
          <IconButton onPress={handleShowPassword}>
            <Icon name={showPassword ? 'eye' : 'eye-off'} />
          </IconButton>
        )}
      </Container>
      <ErrorContainer>
        {error && (
          <>
            <IconError name="info" />
            <Error>{error}</Error>
          </>
        )}
      </ErrorContainer>
    </>
  );
}
