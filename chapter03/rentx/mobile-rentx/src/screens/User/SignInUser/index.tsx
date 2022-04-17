import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { MainTextRegular, MainTitleBold } from '../../../_shared/components/fonts';
import { Input } from '../../../_shared/components/Input';
import { MainForm, MainHeader, MainScrollView } from '../../../_shared/components/views';

import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container } from './styled';
import { useForm } from 'react-hook-form';
import { LockSvg, MailSvg } from '../../../_shared/utils/images';
import { Alert, ScrollView } from 'react-native';
import { Button } from '../../../_shared/components/Button';
import { useKeyboard } from '@react-native-community/hooks';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';

interface Form {
  [x: string]: any;
}

interface FormData {
  email: string;
  password: string;
}

export function SignInUser() {
  const scrollView = useRef<ScrollView>(null);
  const keyboard = useKeyboard();
  const theme = useTheme();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      YUP.object().shape({
        email: YUP.string().email('E-mail inválido').required('E-mail é obrigatório'),
        password: YUP.string().required('Nome é obrigatório'),
      })
    ),
  });

  function handleFormSubmit(form: Form) {
    try {
      const inputForm = form as FormData;
      console.log(inputForm);
      reset();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  function scrollToTopOnInputFocus() {
    scrollView.current?.scrollTo({ y: keyboard.keyboardHeight, animated: true });
  }

  function handleNavigationToUserRegisterStepOne() {
    navigation.navigate('RegisterUserStepOne');
  }

  useEffect(() => {
    if (errors && errors.email) {
      return Alert.alert(errors.email.message);
    }

    if (errors && errors.password) {
      return Alert.alert(errors.email.message);
    }
  }, [errors]);

  return (
    <>
      <Container>
        <StatusBar translucent style="dark" />
        <MainHeader />
        <MainScrollView ref={scrollView}>
          <MainTitleBold marginTop={30}>Estamos{'\n'}quase lá.</MainTitleBold>
          <MainTextRegular marginTop={16}>
            Faça seu login para começar{'\n'}uma experiência nova
          </MainTextRegular>
          <MainForm marginTop={64}>
            <Input
              control={control}
              icon={MailSvg}
              name="email"
              placeholder="E-mail"
              isDirth={watch('email')?.length > 0}
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
              autoCapitalize="none"
              autoCompleteType="email"
            />
            <Input
              control={control}
              icon={LockSvg}
              name="password"
              isPassword
              placeholder="Senha"
              isDirth={watch('password')?.length > 0}
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
              autoCapitalize="none"
            />
            <Button
              marginTop={20}
              title="Login"
              isActive={watch('email')?.length > 0 && watch('password')?.length > 0}
              onPress={handleSubmit(handleFormSubmit)}
            />
            <Button
              marginTop={10}
              background={theme.colors.background}
              color={theme.colors.primary600}
              title="Criar uma conta gratuita"
              onPress={handleNavigationToUserRegisterStepOne}
            />
          </MainForm>
        </MainScrollView>
      </Container>
    </>
  );
}
