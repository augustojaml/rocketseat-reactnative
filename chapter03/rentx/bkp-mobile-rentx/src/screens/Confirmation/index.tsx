import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { MainTextMedium, MainTextRegular, MainTitleBold } from '../../_shared/components/fonts';
import { LogoLargeSvg, OkColorSvg } from '../../_shared/utils/images';

import { Container, OkButton } from './styled';

export interface IConfirmation {
  title: string;
  subTitle: string;
  nextScreen: keyof ReactNavigation.RootParamList;
}

interface ConfirmationParams {
  confirmation: IConfirmation;
}

export function Confirmation() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { confirmation } = useRoute().params as ConfirmationParams;

  function handleNavigationGoToSignIn() {
    navigation.navigate(confirmation.nextScreen);
  }

  return (
    <>
      <Container>
        <StatusBar translucent style="light" />
        <LogoLargeSvg
          style={{
            marginTop: RFPercentage(10),
          }}
        />
        <OkColorSvg
          style={{
            marginTop: RFPercentage(5),
          }}
        />
        <MainTitleBold color={theme.colors.shape} marginTop={RFPercentage(5)}>
          {confirmation.title}
        </MainTitleBold>
        <MainTextRegular marginTop={RFValue(16)} style={{ textAlign: 'center' }}>
          {confirmation.subTitle}
        </MainTextRegular>
        <OkButton onPress={handleNavigationGoToSignIn}>
          <MainTextMedium color={theme.colors.shape}>Ok</MainTextMedium>
        </OkButton>
      </Container>
    </>
  );
}
