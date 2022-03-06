import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';
import { Container, ErrorContainer, ErrorIcon, ErrorText } from './styled';

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  error: string;
}

export function InputForm({ control, name, error, ...rest }: InputFormProps) {
  return (
    <>
      <Container>
        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input onChangeText={onChange} value={value} {...rest} />
          )}
        ></Controller>
        <ErrorContainer>
          {error && (
            <>
              <ErrorIcon name="info" />
              <ErrorText>{error}</ErrorText>
            </>
          )}
        </ErrorContainer>
      </Container>
    </>
  );
}
