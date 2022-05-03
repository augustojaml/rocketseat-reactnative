import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import { useForm } from 'react-hook-form';
import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { MainTextMedium, MainTitleMedium } from '../../../shared/components/fonts';
import { IconButton } from '../../../shared/components/IconButton';
import { MainForm, MainHeader, MainSpaceHeight } from '../../../shared/components/views';
import {
  AvatarPng,
  CamSvg,
  CreditCardSvg,
  LockSvg,
  MailSvg,
  PowerSvg,
  UserSvg,
} from '../../../shared/utils/images';

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
  ProfilePhotoButton,
} from './styled';
import { Input } from '../../../shared/components/Input';
import { useKeyboard } from '@react-native-community/hooks';
import { Button } from '../../../shared/components/Button';
import { useAuth } from '../../../shared/hooks/useAuth';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { api } from '../../../shared/services/api';

interface Form {
  [x: string]: any;
}

interface FormData {
  name: string;
  email: string;
  driverLicense: string;
  password: string;
  newPassword: string;
  confirmPassword: string;
}

export function ProfileUser() {
  const theme = useTheme();
  const scrollView = useRef<ScrollView>(null);
  const keyboard = useKeyboard();
  const navigation = useNavigation();
  const { signOut, user, updateUser, updateAvatarFile, isLoadingUser } = useAuth();

  const [avatar, setAvatar] = useState<string | undefined>(
    `${api.defaults.baseURL}/avatar/${user?.avatar}`
  );

  const [formActive, setFormActive] = useState<'data' | 'pass'>('data');

  const {
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      YUP.object().shape({
        name: YUP.string().required('Nome obrigatório'),
        email: YUP.string().email('E-mail inválido').required('E-mail obrigatório'),
        driverLicense: YUP.string().required('CNH obrigatório'),
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

  async function handleFormSubmit(form: Form) {
    const inputForm = form as FormData;

    if (inputForm.password && !inputForm.newPassword) {
      return Alert.alert('Perfil', 'Informe sua nova senha');
    }

    if (inputForm.password && !inputForm.confirmPassword) {
      return Alert.alert('Perfil', 'Repita sua nova senha');
    }

    if (inputForm.newPassword !== inputForm.confirmPassword) {
      return Alert.alert('Perfil', 'Sua nova senha e confirmação de senha não são iguais');
    }

    try {
      const updateData = {
        name: inputForm.name,
        email: inputForm.email,
        driverLicense: inputForm.driverLicense,
        password: inputForm.password,
        newPassword: inputForm.newPassword,
      };

      await updateUser(updateData);

      navigation.navigate('Confirmation', {
        confirmation: {
          title: 'Feito',
          subTitle: '',
          nextScreen: 'CarList',
        },
      });
      setFormActive('data');
      reset();
    } catch (error: any) {
      Alert.alert('Profile', 'Senha atual inválida ou operação não permitida');
    }
  }

  async function updateAvatar() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 4],
        quality: 1,
      });

      if (result.cancelled) {
        return;
      }

      if (result.uri) {
        await updateAvatarFile(result);
        setAvatar(result.uri);
      }
    } catch (error) {
      Alert.alert('Profile', 'Não foi possivel alterar o avatar');
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

  useFocusEffect(
    useCallback(() => {
      setValue('name', user?.name);
      setValue('email', user?.email);
      setValue('driverLicense', user?.driverLicense);
    }, [user])
  );

  return (
    <>
      <Container>
        <StatusBar translucent style="light" backgroundColor={theme.colors.primary800} />
        <MainHeader background={theme.colors.primary800}>
          <HeaderWrapper>
            <IconButton onPress={handleNavigationGoBack} />
            <MainTextMedium size={RFValue(20)} color={theme.colors.shape} marginTop={RFValue(5)}>
              Editar Perfil
            </MainTextMedium>
            <IconButton onPress={signOut} icon={PowerSvg} alignItems="flex-end" />
          </HeaderWrapper>
        </MainHeader>
        <KeyboardAvoidingView>
          <ScrollView ref={scrollView} bounces={false} showsVerticalScrollIndicator={false}>
            <MainSpaceHeight background={theme.colors.primary800} height={14} />
            <ProfileUserPhotoContainer>
              <ProfileUserPhotoWrapper>
                {user?.avatar ? (
                  <ProfileImage source={{ uri: avatar }} />
                ) : (
                  <ProfileImage source={AvatarPng} />
                )}

                <ProfilePhotoButton activeOpacity={0.7} onPress={updateAvatar}>
                  <CamSvg fill={theme.colors.shape} width={24} height={24} />
                </ProfilePhotoButton>
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
                    autoCorrect={false}
                    editable={false}
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
                </FormData>
              ) : (
                <FormPass>
                  <Input
                    control={control}
                    icon={LockSvg}
                    name="password"
                    isPassword
                    placeholder="Senha atual"
                    isDirth={watch('password')?.length > 0}
                    scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                    autoCapitalize="none"
                  />
                  <Input
                    control={control}
                    icon={LockSvg}
                    name="newPassword"
                    isPassword
                    placeholder="Nova senha"
                    isDirth={watch('newPassword')?.length > 0}
                    scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                    autoCapitalize="none"
                  />
                  <Input
                    control={control}
                    icon={LockSvg}
                    name="confirmPassword"
                    isPassword
                    placeholder="Repetir senha"
                    isDirth={watch('confirmPassword')?.length > 0}
                    scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                    autoCapitalize="none"
                  />
                </FormPass>
              )}

              <Button
                marginTop={10}
                title="Salvar alterações"
                isActive={
                  watch('name')?.length > 0 &&
                  watch('email')?.length > 0 &&
                  watch('driverLicense')?.length > 0 /*&&
                  watch('current_password')?.length > 0 &&
                  watch('password')?.length > 0 &&
                  watch('confirm_password')?.length > 0*/
                }
                isLoading={isLoadingUser}
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
