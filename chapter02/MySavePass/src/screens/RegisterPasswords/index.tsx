import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid';
import { useTheme } from 'styled-components';
import * as YUP from 'yup';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { InputText } from '../../components/InputText';
import { IPassword, usePass } from '../../hooks/usePass';
import { Container, Form, HeaderTitle, Icon, PlusButton } from './styled';

interface Form {
  [x: string]: any;
}

const schema = YUP.object().shape({
  platform: YUP.string().required('Nome do serviço é obrigatório!'),
  userOrEmail: YUP.string().required('Usuário ou E-mail é obrigatório!'),
  password: YUP.string().required('Senha é obrigatória!'),
});

export function RegisterPasswords() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { isLoadingSavePass, savePass } = usePass();

  interface FormData {
    platform: string;
    userOrEmail: string;
    password: string;
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleGoToHome() {
    navigation.goBack();
  }

  async function handleFormSubmit(form: Form) {
    const inputForm = form as FormData;

    const data: IPassword = {
      id: String(uuid.v4()),
      platform: inputForm.platform,
      userOrEmail: inputForm.userOrEmail,
      password: inputForm.password,
    };

    await savePass(data);

    navigation.navigate('Home');
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.background_secondary} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header
            height={15}
            alignItems="center"
            background={theme.colors.background_secondary}
            justifyContent="flex-start"
            paddingTop={50}
          >
            <PlusButton onPress={handleGoToHome}>
              <Icon name="arrow-left" />
            </PlusButton>
            <HeaderTitle>Cadastro de Senhas</HeaderTitle>
          </Header>

          <Form>
            <InputText
              control={control}
              name="platform"
              label="Nome da Plataforma"
              error={errors.platform && errors.platform.message}
            />

            <InputText
              control={control}
              name="userOrEmail"
              label="Usuário ou E-mail"
              error={errors.userOrEmail && errors.userOrEmail.message}
            />

            <InputText
              control={control}
              name="password"
              label="Senha"
              isPassword={true}
              error={errors.password && errors.password.message}
            />

            <Button
              title="Salvar"
              isLoading={isLoadingSavePass}
              marginTop={20}
              onPress={handleSubmit(handleFormSubmit)}
            />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}
