import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid';
import { useTheme } from 'styled-components';
import * as YUP from 'yup';
import { Button } from '../../components/Button';
import { FeatherIconButton } from '../../components/FeatherIconButton';
import { TextInput } from '../../components/TextInput';
import { IPassword, usePass } from '../../hooks/usePass';
import { Container, Form, Header, PageHeaderTitle, PageHeaderWrapper } from './styled';

interface Form {
  [x: string]: any;
}

const schema = YUP.object().shape({
  platform: YUP.string().required('Nome do serviço é obrigatório!'),
  userOrEmail: YUP.string().required('Usuário ou E-mail é obrigatório!'),
  password: YUP.string().required('Senha é obrigatória!'),
});

interface FormData {
  platform: string;
  userOrEmail: string;
  password: string;
}

export function SavePass() {
  const theme = useTheme();

  const navigation = useNavigation();

  const { savePass } = usePass();

  function handleGoBack() {
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

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <PageHeaderWrapper>
              <FeatherIconButton
                name="arrow-left"
                color={theme.colors.text_light}
                onPress={handleGoBack}
              />
              <PageHeaderTitle>Nova Senha</PageHeaderTitle>
            </PageHeaderWrapper>
          </Header>

          <Form>
            <TextInput
              control={control}
              name="platform"
              label="Nome da Plataforma"
              error={errors.platform && errors.platform.message}
            />

            <TextInput
              control={control}
              name="userOrEmail"
              label="Usuário ou E-mail"
              error={errors.userOrEmail && errors.userOrEmail.message}
            />

            <TextInput
              control={control}
              name="password"
              label="Senha"
              isPassword={true}
              error={errors.password && errors.password.message}
            />

            <Button title="Salvar" marginTop={20} onPress={handleSubmit(handleFormSubmit)} />
          </Form>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}
