import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

import { yupResolver } from '@hookform/resolvers/yup';
import * as YUP from 'yup';
import { useForm } from 'react-hook-form';

import { useTheme } from 'styled-components';

import { MainButton, MainHeader } from '../../../../_shared/components/styled';

import { ChevronleftSvg, CreditcardSvg, MailSvg, UserSvg } from '../../../../_shared/utils/images';

import { Container, Form, HeaderWrapper, StepTitle } from './styled';
import { InputText } from '../../../../_shared/components/InputText';
import { Button } from '../../../../_shared/components/Button';
import { useNavigation } from '@react-navigation/native';

interface Form {
  [x: string]: any;
}

interface FormData {
  name: string;
  email: string;
  driveLicense: string;
}

const schema = YUP.object().shape({
  name: YUP.string().required('Nome obrigatório'),
  email: YUP.string().email('E-mail inválido').required('E-mail obrigatório'),
  driveLicense: YUP.string().required('Carteira de motorista obrigatório'),
});

export function RegisterUserStepOne() {
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

  function handleFormSubmit(form: Form) {
    const inputForm = form as FormData;
    navigation.navigate('RegisterUserStepTwo', { stepOne: inputForm });

    reset({
      name: undefined,
      email: undefined,
      driveLicense: undefined,
    });
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

    if (errors && errors.driveLicense) {
      return Alert.alert(errors.driveLicense.message);
    }

    watch((value) => {
      value.name && value.email && value.driveLicense
        ? setButtonActive(true)
        : setButtonActive(false);
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
          <StepTitle>1. Dados</StepTitle>
          <Form>
            <InputText
              control={control}
              icon={UserSvg}
              name="name"
              placeholder="Nome"
              scrollToTopOnInputFocus={scrollToTopOnInputFocus}
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
            <Button
              title="Próximo"
              style={{ marginTop: 24 }}
              isActive={buttonActive}
              onPress={handleSubmit(handleFormSubmit)}
            />
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}
