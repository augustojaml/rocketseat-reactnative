import React, { FC, useEffect, useState } from 'react';
import { TextInputProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { Control, Controller } from 'react-hook-form';

import { EyeOffSvg, EyeSvg, PeopleSvg } from '../../utils/images';

import { Container, IconContainer, CustomInput, ButtonIconContainer } from './styled';

interface InputProps extends TextInputProps {
  control: Control;
  name: string;
  icon?: FC<SvgProps>;
  isPassword?: boolean;
  isDirth?: boolean;
  noEditable?: boolean;
  scrollToTopOnInputFocus?: () => void;
}

export function Input({
  control,
  name,
  icon: Icon = PeopleSvg,
  isPassword = false,
  isDirth = false,
  noEditable = false,
  scrollToTopOnInputFocus = () => {},
  ...rest
}: InputProps) {
  const theme = useTheme();

  const [hidePassword, setSHidePassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  function togglePassword() {
    setSHidePassword(!hidePassword);
  }

  function handleOnFocus() {
    setIsFocused(true);
    scrollToTopOnInputFocus();
  }

  function handleOnBlur() {
    setIsFocused(false);
  }

  useEffect(() => {
    setSHidePassword(isPassword);
  }, []);

  return (
    <>
      <Container isFocused={isFocused}>
        <IconContainer>
          <Icon
            fill={isDirth || isFocused ? theme.colors.main900 : theme.colors.primary400}
            width={RFValue(24)}
            height={RFValue(24)}
          />
        </IconContainer>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              onChangeText={onChange}
              value={value}
              placeholderTextColor={theme.colors.primary400}
              onFocus={handleOnFocus}
              onBlur={handleOnBlur}
              secureTextEntry={hidePassword}
              noEditable={noEditable}
              {...rest}
            />
          )}
        />
        {isPassword && (
          <ButtonIconContainer onPress={togglePassword}>
            {hidePassword ? (
              <EyeSvg fill={theme.colors.primary400} width={RFValue(24)} height={RFValue(24)} />
            ) : (
              <EyeOffSvg fill={theme.colors.primary400} width={RFValue(24)} height={RFValue(24)} />
            )}
          </ButtonIconContainer>
        )}
      </Container>
    </>
  );
}
