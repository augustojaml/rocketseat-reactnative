import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { yupResolver } from '@hookform/resolvers/yup';
import * as YUP from 'yup';
import { useForm } from 'react-hook-form';

import { useTheme } from 'styled-components';

import { MainButton, MainHeader } from '../../../../_shared/components/styled';

import {
  ChevronleftSvg,
  CreditcardSvg,
  LockSvg,
  MailSvg,
  UserSvg,
} from '../../../../_shared/utils/images';

import { Container, Form, HeaderWrapper, StepTitle } from './styled';
import { InputText } from '../../../../_shared/components/InputText';
import { Button } from '../../../../_shared/components/Button';
import { useNavigation } from '@react-navigation/native';

interface Form {
  [x: string]: any;
}

interface FormData {
  password: string;
  confirm_password: string;
}

const schema = YUP.object().shape({
  password: YUP.string().required('Nome obrigatório'),
  confirm_password: YUP.string().required('Nome obrigatório'),
});

export function RegisterUserStepTwo() {
  const scrollView = useRef<ScrollView>(null);
  const theme = useTheme();
  const [buttonActive, setButtonActive] = useState(false);
  const navigation = useNavigation();

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
    watch((value) => {
      value.password && value.confirm_password ? setButtonActive(true) : setButtonActive(false);
    });
  }, [errors, watch]);

  return (
    <>
      <Container>
        <MainHeader background={theme.colors.background}>
          <HeaderWrapper>
            <MainButton onPress={handleNavigationGoBack}>
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
          <StepTitle>2. Senha</StepTitle>
          <Form>
            <InputText
              control={control}
              icon={LockSvg}
              name="password"
              placeholder="Senha"
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
            {buttonActive ? (
              <Button
                title="Próximo"
                style={{ marginTop: 24 }}
                isActive={buttonActive}
                background={theme.colors.secondary900}
              />
            ) : (
              <Button title="Próximo" style={{ marginTop: 24 }} isActive={buttonActive} />
            )}
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}
