import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, ScrollView } from 'react-native';
import { useTheme } from 'styled-components';

import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { MainTitleBold } from '../../../../shared/components/fonts';
import { IconButton } from '../../../../shared/components/IconButton';
import {
  BulletContainer,
  BulletItem,
  MainForm,
  MainHeader,
  MainScrollView,
} from '../../../../shared/components/views';

import { Container, HeaderWrapper } from './styled';
import { CreditCardSvg, MailSvg, UserSvg } from '../../../../shared/utils/images';
import { Input } from '../../../../shared/components/Input';
import { useKeyboard } from '@react-native-community/hooks';
import { Button } from '../../../../shared/components/Button';
import { useNavigation } from '@react-navigation/native';
import { IUser } from '../../../../shared/hooks/useAuth';

interface Form {
  [x: string]: any;
}

export function RegisterUserStepOne() {
  const theme = useTheme();
  const scrollView = useRef<ScrollView>(null);
  const keyboard = useKeyboard();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      YUP.object().shape({
        name: YUP.string().required('Nome obrigatório'),
        email: YUP.string().email('E-mail inválido').required('E-mail obrigatório'),
        driverLicense: YUP.string().required('Carteira de motorista obrigatório'),
      })
    ),
  });

  function scrollToTopOnInputFocus() {
    scrollView.current?.scrollTo({ y: keyboard.keyboardHeight, animated: true });
  }

  function handleFormSubmit(form: Form) {
    try {
      const inputForm = form as IUser;
      navigation.navigate('RegisterUserStepTwo', { user: inputForm });
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    if (errors && errors.name) {
      return Alert.alert(errors.name.message);
    }

    if (errors && errors.email) {
      return Alert.alert(errors.email.message);
    }

    if (errors && errors.driverLicense) {
      return Alert.alert(errors.driverLicense.message);
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
              <BulletItem background={theme.colors.primary600} isActive />
              <BulletItem background={theme.colors.primary600} />
            </BulletContainer>
          </HeaderWrapper>
        </MainHeader>
        <MainScrollView ref={scrollView}>
          <MainTitleBold size={20} marginTop={30}>
            1. Dados
          </MainTitleBold>
          <MainForm marginTop={64}>
            <Input
              control={control}
              icon={UserSvg}
              name="name"
              placeholder="Nome"
              autoCapitalize="words"
              isDirth={watch('name')?.length > 0}
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
            />
            <Input
              control={control}
              icon={MailSvg}
              name="email"
              placeholder="E-mail"
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              autoCorrect={false}
              isDirth={watch('email')?.length > 0}
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
            />
            <Input
              control={control}
              icon={CreditCardSvg}
              name="driverLicense"
              placeholder="CNH"
              keyboardType="numeric"
              autoCapitalize="none"
              isDirth={watch('driverLicense')?.length > 0}
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
            />

            <Button
              marginTop={20}
              title="Próximo"
              isActive={
                watch('name')?.length > 0 &&
                watch('email')?.length > 0 &&
                watch('driverLicense')?.length > 0
              }
              onPress={handleSubmit(handleFormSubmit)}
            />
          </MainForm>
        </MainScrollView>
      </Container>
    </>
  );
}
