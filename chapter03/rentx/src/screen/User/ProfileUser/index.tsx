import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { MainButton } from '../../../_shared/components/styled';
import {
  CamSvg,
  ChevronleftSvg,
  CreditcardSvg,
  LockSvg,
  MailSvg,
  PowerSvg,
  UserSvg,
} from '../../../_shared/utils/images';

import { yupResolver } from '@hookform/resolvers/yup';
import * as YUP from 'yup';
import { useForm } from 'react-hook-form';

import {
  Container,
  HeaderWrapper,
  ProfileTitle,
  ProfileImageWrapper,
  ProfileImage,
  ProfileHeader,
  ProfileImageContent,
  Form,
  FormHeader,
  ProfileButton,
  ProfileInfo,
  ProfilePass,
  FormData,
  FormPass,
  CamButton,
} from './styled';
import { Button } from '../../../_shared/components/Button';
import { InputText } from '../../../_shared/components/InputText';
import { useNavigation } from '@react-navigation/native';

interface Form {
  [x: string]: any;
}

interface FormData {
  name: string;
  email: string;
  driveLicense: string;
  current_password: string;
  password: string;
  confirm_password: string;
}

const schema = YUP.object().shape({
  name: YUP.string().required('Nome obrigatório'),
  email: YUP.string().required('Nome obrigatório'),
  driveLicense: YUP.string().required('Nome obrigatório'),
  // current_password: YUP.string().email('E-mail inválido').required('E-mail é obrigatório'),
  // password: YUP.string().required('Nome obrigatório'),
  // confirm_password: YUP.string().required('Nome obrigatório'),
});

export function ProfileUser() {
  const theme = useTheme();
  const scrollView = useRef<ScrollView>(null);
  const [buttonActive, setButtonActive] = useState(false);
  const navigation = useNavigation();

  const [showForm, setShowForm] = useState<'data' | 'pass'>('data');

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function scrollToTopOnInputFocus() {
    scrollView.current?.scrollTo({ y: 150, animated: true });
  }

  function handleFormSubmit(form: Form) {
    // const inputForm = form as FormData;
    navigation.navigate('Confirmation', {
      screen: {
        title: 'Feito',
        subTitle: 'Informações atualizadas',
        nextScreen: 'LoginUser',
      },
    });

    reset();
  }

  function handleChangeForm(value: 'data' | 'pass') {
    setShowForm(value);
  }

  useEffect(() => {
    if (errors && errors.name) {
      return Alert.alert(errors.name.message);
    }

    if (errors && errors.email) {
      return Alert.alert(errors.email.message);
    }

    if (errors && errors.driveLicense) {
      return Alert.alert(errors.driveLicense.message);
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

    watch((value) => {
      value.current_password && value.password && value.confirm_password
        ? setButtonActive(true)
        : setButtonActive(false);
    });
  }, [errors, watch]);

  return (
    <>
      <Container>
        <ProfileHeader>
          <HeaderWrapper>
            <MainButton>
              <ChevronleftSvg
                fill={theme.colors.primary400}
                width={RFValue(30)}
                height={RFValue(30)}
              />
            </MainButton>
            <ProfileTitle>Editar Perfil</ProfileTitle>
            <MainButton>
              <PowerSvg fill={theme.colors.primary400} width={RFValue(30)} height={RFValue(30)} />
            </MainButton>
          </HeaderWrapper>
        </ProfileHeader>
        <ProfileImageContent>
          <ProfileImageWrapper>
            <ProfileImage source={{ uri: 'https://github.com/augustojaml.png' }} />
            <CamButton>
              <CamSvg fill={theme.colors.shape} width={RFValue(24)} height={RFValue(24)} />
            </CamButton>
          </ProfileImageWrapper>
        </ProfileImageContent>

        <ScrollView
          ref={scrollView}
          style={{ backgroundColor: theme.colors.background }}
          contentContainerStyle={{
            paddingHorizontal: RFPercentage(3),
            paddingBottom: 20,
            paddingTop: 10,
          }}
          bounces={false}
        >
          <Form>
            <FormHeader>
              <ProfileButton activeOpacity={0.6} onPress={() => handleChangeForm('data')}>
                <ProfileInfo showForm={showForm}>Dados</ProfileInfo>
              </ProfileButton>
              <ProfileButton activeOpacity={0.6} onPress={() => handleChangeForm('pass')}>
                <ProfilePass showForm={showForm}>Troca de senha</ProfilePass>
              </ProfileButton>
            </FormHeader>
            {showForm === 'data' ? (
              <FormData>
                <InputText
                  control={control}
                  icon={UserSvg}
                  name="name"
                  placeholder="Nome"
                  scrollToTopOnInputFocus={() => {}}
                />
                <InputText
                  control={control}
                  icon={MailSvg}
                  name="email"
                  placeholder="E-mail"
                  scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                />
                <InputText
                  control={control}
                  icon={CreditcardSvg}
                  name="driveLicense"
                  placeholder="CNH"
                  scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                />
              </FormData>
            ) : (
              <FormPass>
                <InputText
                  control={control}
                  icon={LockSvg}
                  name="current_password"
                  placeholder="Senha atual"
                  scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                  isPassword
                />
                <InputText
                  control={control}
                  icon={LockSvg}
                  name="password"
                  placeholder="Repetir senha"
                  scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                  isPassword
                />
                <InputText
                  control={control}
                  icon={LockSvg}
                  name="confirm_password"
                  placeholder="Repetir senha"
                  scrollToTopOnInputFocus={scrollToTopOnInputFocus}
                  isPassword
                />
              </FormPass>
            )}
            <Button
              title="Salvar alterações"
              style={{ marginTop: 0 }}
              isActive={true}
              onPress={handleSubmit(handleFormSubmit)}
            />
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}
