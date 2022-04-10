import { yupResolver } from '@hookform/resolvers/yup';
import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import * as YUP from 'yup';
import { Button } from '../../../_shared/components/Button';
import { TextInput } from '../../../_shared/components/Input/TextInput';
import { MainButton, MainHeader } from '../../../_shared/components/styled';
import { ChevronleftSvg, LockSvg, MailSvg } from '../../../_shared/utils/images';

import {
  Container,
  CreateAccountButton,
  CreateAccountTitle,
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
  email: YUP.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: YUP.string().required('Senha é obrigatória!'),
});

export function LoginUser() {
  const scrollView = useRef<ScrollView>(null);
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function scrollToTopOnInputFocus() {
    scrollView.current?.scrollTo({ y: 150, animated: true });
    // console.log(keyboard.keyboardHeight);
  }

  function handleFormSubmit(form: Form) {
    // const inputForm = form as FormData;
    console.log(errors);
  }

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
            <TextInput
              control={control}
              icon={MailSvg}
              name="email"
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
              placeholder="E-mail"
            />
            <TextInput
              control={control}
              icon={LockSvg}
              name="password"
              isPassword
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
              placeholder="Senha"
            />
            <Button
              title="Login"
              style={{ marginTop: 30, marginBottom: 10 }}
              onPress={handleSubmit(handleFormSubmit)}
            />
            <CreateAccountButton>
              <CreateAccountTitle>Criar conta gratuita</CreateAccountTitle>
            </CreateAccountButton>
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}
