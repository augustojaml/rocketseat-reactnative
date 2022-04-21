import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { useForm } from 'react-hook-form';
import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { MainTextMedium, MainTitleMedium } from '../../../_shared/components/fonts';
import { IconButton } from '../../../_shared/components/IconButton';
import { MainForm, MainHeader, MainSpaceHeight } from '../../../_shared/components/views';
import { CreditCardSvg, LockSvg, MailSvg, PowerSvg, UserSvg } from '../../../_shared/utils/images';

import {
  Container,
  HeaderWrapper,
  ProfileUserPhotoWrapper,
  ProfileImage,
  ProfileUserPhotoContainer,
  ProfileToggleForm,
  ProfileToggleFormWrapper,
  FormData,
  FormPass,
} from './styled';
import { Input } from '../../../_shared/components/Input';
import { useKeyboard } from '@react-native-community/hooks';
import { Button } from '../../../_shared/components/Button';
import { IUser, useAuth } from '../../../_shared/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { useTabs } from '../../../_shared/hooks/useTabs';

interface Form {
  [x: string]: any;
}

interface FormData {
  name: string;
  email: string;
  driver_license: string;
  current_password: string;
}

export function ProfileUser() {
  const theme = useTheme();
  const scrollView = useRef<ScrollView>(null);
  const keyboard = useKeyboard();
  const navigation = useNavigation();
  const { user, signOut, isLoadingUser } = useAuth();

  const [formActive, setFormActive] = useState<'data' | 'pass'>('data');

  function handleNavigationToBack() {
    navigation.goBack();
  }

  const {
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      YUP.object().shape({
        name: YUP.string().required('Nome obrigatório'),
        email: YUP.string().email('E-mail inválido').required('E-mail obrigatório'),
        driver_license: YUP.string().required('CNH obrigatório'),
        // current_password: YUP.string().required('Senha atual obrigatório'),
        // password: YUP.string().required('Nova senha obrigatório'),
        // confirm_password: YUP.string().required('Confirmação de obrigatório'),
      })
    ),
  });

  function toggleForm(value: 'data' | 'pass') {
    setFormActive(value);
  }

  function scrollToTopOnInputFocus() {
    scrollView.current?.scrollTo({ y: keyboard.keyboardHeight, animated: true });
  }

  function handleFormSubmit(form: Form) {
    try {
      const inputForm = form as FormData;
      console.log(inputForm);
      navigation.navigate('Confirmation', {
        confirmation: {
          title: 'Feito',
          subTitle: '',
          nextScreen: 'SignInUser',
        },
      });
      // reset();
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  async function handleSignOut() {
    try {
      Alert.alert(
        'Tem certeza?',
        'Se você sair irá precisar de internet para se conectar novamente',
        [
          {
            text: 'Cancelar',
            onPress: () => {},
            style: 'cancel',
          },
          {
            text: 'Sim',
            onPress: async () => await signOut(),
          },
        ]
      );
    } catch (error: any) {
      Alert.alert(error.message);
    }
  }

  useEffect(() => {
    if (errors && errors.name) {
      return Alert.alert(errors.name.message);
    }

    if (errors && errors.email) {
      return Alert.alert(errors.email.message);
    }

    if (errors && errors.drive_license) {
      return Alert.alert(errors.drive_license.message);
    }

    if (errors && errors.current_password) {
      return Alert.alert(errors.current_password.message);
    }

    if (errors && errors.password) {
      return Alert.alert(errors.email.message);
    }

    if (errors && errors.confirm_password) {
      return Alert.alert(errors.confirm_password.message);
    }
  }, [errors]);

  useEffect(() => {
    setValue('name', user.name);
    setValue('email', user.email);
    setValue('driver_license', user.driver_license);
  }, []);

  return (
    <>
      <Container>
        <StatusBar translucent style="light" backgroundColor={theme.colors.primary800} />
        <MainHeader background={theme.colors.primary800}>
          <HeaderWrapper>
            <IconButton onPress={handleNavigationToBack} />
            <MainTextMedium size={RFValue(20)} color={theme.colors.shape} marginTop={RFValue(5)}>
              Editar Perfil
            </MainTextMedium>
            <IconButton
              icon={PowerSvg}
              alignItems="flex-end"
              onPress={handleSignOut}
              isLoading={isLoadingUser}
            />
          </HeaderWrapper>
        </MainHeader>
        <KeyboardAvoidingView>
          <ScrollView ref={scrollView} bounces={false} showsVerticalScrollIndicator={false}>
            <MainSpaceHeight background={theme.colors.primary800} height={10} />
            <ProfileUserPhotoContainer>
              <ProfileUserPhotoWrapper>
                <ProfileImage source={{ uri: 'https://github.com/augustojaml.png' }} />
              </ProfileUserPhotoWrapper>
            </ProfileUserPhotoContainer>

            <MainForm style={{ padding: RFPercentage(3) }}>
              <ProfileToggleFormWrapper>
                <ProfileToggleForm
                  isActive={formActive === 'data'}
                  onPress={() => toggleForm('data')}
                  style={{ marginRight: RFValue(10) }}
                  activeOpacity={0.7}
                >
                  <MainTitleMedium>Dados</MainTitleMedium>
                </ProfileToggleForm>
                <ProfileToggleForm
                  isActive={formActive === 'pass'}
                  onPress={() => toggleForm('pass')}
                  style={{ marginLeft: RFValue(10) }}
                  activeOpacity={0.7}
                >
                  <MainTitleMedium>Trocar senha</MainTitleMedium>
                </ProfileToggleForm>
              </ProfileToggleFormWrapper>

              {formActive === 'data' ? (
                <FormData>
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
                    editable={false}
                    autoCorrect={false}
                    isDirth={watch('email')?.length > 0}
                    scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                  />
                  <Input
                    control={control}
                    icon={CreditCardSvg}
                    name="driver_license"
                    placeholder="CNH"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    isDirth={watch('driver_license')?.length > 0}
                    scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                  />
                </FormData>
              ) : (
                <FormPass>
                  <Input
                    control={control}
                    icon={LockSvg}
                    name="current_password"
                    isPassword
                    placeholder="Senha atual"
                    isDirth={watch('current_password')?.length > 0}
                    scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                    autoCapitalize="none"
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
                </FormPass>
              )}

              <Button
                marginTop={20}
                title="Login"
                onPress={handleSubmit(handleFormSubmit)}
                style={{ marginBottom: 100 }}
              />
            </MainForm>
          </ScrollView>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
}
