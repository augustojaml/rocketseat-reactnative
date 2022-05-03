import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { MainTextRegular, MainTitleBold } from '../../../shared/components/fonts';
import { Input } from '../../../shared/components/Input';
import { MainForm, MainHeader, MainScrollView } from '../../../shared/components/views';

import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container, ToggleContainer } from './styled';
import { useForm } from 'react-hook-form';
import { LockSvg, MailSvg } from '../../../shared/utils/images';
import { Alert, ScrollView } from 'react-native';
import { Button } from '../../../shared/components/Button';
import { useKeyboard } from '@react-native-community/hooks';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../../shared/hooks/useAuth';
import { ToggleTheme } from '../../../shared/components/ToggleTheme';

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
  const { isLoadingUser, signIn } = useAuth();

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

  async function handleFormSubmit(form: Form) {
    try {
      const credentials = form as FormData;

      await signIn(credentials);

      reset();
    } catch (error: any) {
      Alert.alert(
        'SignIn',
        'Houve um erro ao realizar login. Tente novamente ou contate o administrador'
      );
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
        <ToggleContainer>
          <ToggleTheme />
        </ToggleContainer>
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
              isLoading={isLoadingUser}
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
