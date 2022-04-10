import { yupResolver } from '@hookform/resolvers/yup';
import * as YUP from 'yup';
import { useForm } from 'react-hook-form';

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';

import { Alert, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { Button } from '../../../_shared/components/Button';
import { InputText } from '../../../_shared/components/InputText';
import { MainButton, MainButtonTitle, MainHeader } from '../../../_shared/components/styled';
import { ChevronleftSvg, LockSvg, MailSvg } from '../../../_shared/utils/images';

import {
  Container,
  CreateAccountButton,
  Form,
  HeaderWrapper,
  LoginDescription,
  LoginTitle,
} from './styled';

interface Form {
  [x: string]: any;
}

interface FormData {
  email: string;
  password: string;
}

const schema = YUP.object().shape({
  email: YUP.string().email('E-mail inválido').required('E-mail é obrigatório'),
  password: YUP.string().required('Nome é obrigatório'),
});

export function LoginUser() {
  const scrollView = useRef<ScrollView>(null);
  const theme = useTheme();
  const navigation = useNavigation();

  const [buttonActive, setButtonActive] = useState(false);

  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const watchFields = watch(['name', 'email']);

  function scrollToTopOnInputFocus() {
    scrollView.current?.scrollTo({ y: 150, animated: true });
  }

  function handleFormSubmit(form: Form) {
    const inputForm = form as FormData;
    console.log('Logando aguarde!', inputForm);
    reset({
      email: undefined,
      password: undefined,
    });
  }

  function handleNavigationToRegisterUser() {
    navigation.navigate('RegisterUserStepOne');
  }

  useEffect(() => {
    if (errors && errors.email) {
      return Alert.alert(errors.email.message);
    }

    if (errors && errors.password) {
      return Alert.alert(errors.email.message);
    }
    watch((value) => {
      value.email && value.password ? setButtonActive(true) : setButtonActive(false);
    });
  }, [errors, watch]);

  return (
    <>
      <Container>
        <MainHeader background={theme.colors.background}>
          <HeaderWrapper>
            <MainButton>
              <ChevronleftSvg width={RFValue(30)} height={RFValue(30)} />
            </MainButton>
          </HeaderWrapper>
        </MainHeader>
        <ScrollView
          ref={scrollView}
          style={{ backgroundColor: theme.colors.background }}
          contentContainerStyle={{
            paddingHorizontal: RFPercentage(3),
            paddingBottom: 10,
            paddingTop: 10,
          }}
          bounces={false}
        >
          <LoginTitle>Estamos{'\n'}quase lá.</LoginTitle>
          <LoginDescription>
            Faça seu login para começar{'\n'}uma experiência incrível.
          </LoginDescription>
          <Form>
            <InputText
              control={control}
              icon={MailSvg}
              name="email"
              placeholder="E-mail"
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
            />
            <InputText
              control={control}
              icon={LockSvg}
              name="password"
              placeholder="Senha"
              isPassword
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
            />
            <Button
              title="Login"
              style={{ marginTop: 30, marginBottom: 10 }}
              onPress={handleSubmit(handleFormSubmit)}
              isActive={buttonActive}
            />
            <CreateAccountButton onPress={handleNavigationToRegisterUser}>
              <MainButtonTitle>Criar conta gratuita</MainButtonTitle>
            </CreateAccountButton>
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}
