import React, { useState } from 'react';
import { EyeoffSvg, EyeSvg } from '../../../utils/images';
import { Control, Controller } from 'react-hook-form';

import { Container, CustomInput, IconContainer, IconContainerButton } from './styled';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { SvgProps } from 'react-native-svg';

interface ComponentProps extends TextInputProps {
  control: Control;
  icon: React.FC<SvgProps>;
  name: string;
  isPassword?: boolean;
  scrollToTopOnInputFocus?: () => void;
}

export function TextInput({
  control,
  icon: Icon,
  name,
  isPassword = false,
  scrollToTopOnInputFocus = () => {},
  ...rest
}: ComponentProps) {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [showPassword, setShowPassword] = useState(true);

  function handleOnFocus() {
    setIsFocused(true);
    scrollToTopOnInputFocus();
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  function handleCheckIsFilled(value: string) {
    value !== '' ? setIsFilled(true) : setIsFilled(false);
  }

  function togglePassword() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      {!isPassword ? (
        <Container isFocused={isFocused}>
          <IconContainer>
            <Icon fill={isFocused || isFilled ? theme.colors.main900 : theme.colors.primary500} />
          </IconContainer>
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <CustomInput
                  onChange={onChange}
                  value={value}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  onChangeText={handleCheckIsFilled}
                  placeholderTextColor={theme.colors.primary400}
                  {...rest}
                />
              );
            }}
          />
        </Container>
      ) : (
        <Container isFocused={isFocused}>
          <IconContainer>
            <Icon fill={isFocused || isFilled ? theme.colors.main900 : theme.colors.primary500} />
          </IconContainer>
          <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value } }) => {
              return (
                <CustomInput
                  onChange={onChange}
                  value={value}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  onChangeText={handleCheckIsFilled}
                  secureTextEntry={showPassword}
                  {...rest}
                />
              );
            }}
          />
          <IconContainerButton onPress={togglePassword}>
            {showPassword ? (
              <EyeSvg fill={theme.colors.primary500} />
            ) : (
              <EyeoffSvg fill={theme.colors.primary500} />
            )}
          </IconContainerButton>
        </Container>
      )}
    </>
  );
}
