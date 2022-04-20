import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';

import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { IUser } from '../../../../_shared/hooks/useAuth';

import { Container, HeaderWrapper, Title } from './styled';
import { useForm } from 'react-hook-form';
import { StatusBar } from 'expo-status-bar';
import {
  BulletContainer,
  BulletItem,
  MainForm,
  MainHeader,
  MainScrollView,
} from '../../../../_shared/components/views';
import { IconButton } from '../../../../_shared/components/IconButton';
import { useTheme } from 'styled-components';
import { MainTitleBold } from '../../../../_shared/components/fonts';
import { Alert, ScrollView } from 'react-native';
import { useKeyboard } from '@react-native-community/hooks';
import { LockSvg } from '../../../../_shared/utils/images';
import { Input } from '../../../../_shared/components/Input';
import { Button } from '../../../../_shared/components/Button';

interface IRegisterUserStepOneParams {
  user: IUser;
}

interface IRegisterUserStepTwoParams {
  password: string;
  confirm_password: string;
}
interface Form {
  [x: string]: any;
}

export function RegisterUserStepTwo() {
  const theme = useTheme();
  const scrollView = useRef<ScrollView>(null);
  const keyboard = useKeyboard();
  const navigation = useNavigation();

  const { user } = useRoute().params as IRegisterUserStepOneParams;

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      YUP.object().shape({
        password: YUP.string().required('Nome obrigatório'),
        confirm_password: YUP.string().required('Nome obrigatório'),
      })
    ),
  });

  function scrollToTopOnInputFocus() {
    scrollView.current?.scrollTo({ y: keyboard.keyboardHeight, animated: true });
  }

  async function handleFormSubmit(form: Form) {
    try {
      const inputForm = form as IRegisterUserStepTwoParams;

      if (inputForm.password !== inputForm.confirm_password) {
        return Alert.alert('Confirmação de senha incorreta');
      }

      const data = {
        ...user,
        password: inputForm.password,
      };

      console.log(data);
      navigation.navigate('Confirmation', {
        confirmation: {
          title: 'Conta Criada',
          subTitle: '',
          nextScreen: 'SignInUser',
        },
      });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    if (errors && errors.password) {
      return Alert.alert(errors.password.message);
    }

    if (errors && errors.confirm_password) {
      return Alert.alert(errors.confirm_password.message);
    }
  }, [errors]);

  return (
    <>
      <Container>
        <StatusBar translucent style="dark" />
        <MainHeader>
          <HeaderWrapper>
            <IconButton onPress={handleNavigationGoBack} />
            <BulletContainer>
              <BulletItem background={theme.colors.primary600} />
              <BulletItem background={theme.colors.primary600} isActive />
            </BulletContainer>
          </HeaderWrapper>
        </MainHeader>
        <MainScrollView ref={scrollView}>
          <MainTitleBold size={20} marginTop={30}>
            2. Dados
          </MainTitleBold>
          <MainForm marginTop={64}>
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
            <Input
              control={control}
              icon={LockSvg}
              name="confirm_password"
              isPassword
              placeholder="Repetir senha"
              isDirth={watch('confirm_password')?.length > 0}
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
              autoCapitalize="none"
            />
            <Button
              marginTop={20}
              title="Login"
              isActive={watch('password')?.length > 0 && watch('confirm_password')?.length > 0}
              onPress={handleSubmit(handleFormSubmit)}
            />
          </MainForm>
        </MainScrollView>
      </Container>
    </>
  );
}
