import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Dimensions } from 'react-native';
import { ConfirmationBackgroundSvg, DoneSvg } from '../../assets/images';
import { IConfirmation } from '../../routes/app.stack.routes';

import {
  ConfirmationButton,
  ConfirmationButtonText,
  ConfirmationContent,
  ConfirmationSubTitle,
  ConfirmationTitle,
  Container,
} from './styled';

export function Confirmation() {
  const { title, subTitle, nextScreen } = useRoute().params as IConfirmation;
  const navigation = useNavigation();

  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <Container>
        <ConfirmationBackgroundSvg width={Dimensions.get('screen').width} />
        <ConfirmationContent>
          <DoneSvg />
          <ConfirmationTitle>{title}</ConfirmationTitle>
          <ConfirmationSubTitle>{subTitle}</ConfirmationSubTitle>
          <ConfirmationButton onPress={() => navigation.navigate(nextScreen)}>
            <ConfirmationButtonText>Ok</ConfirmationButtonText>
          </ConfirmationButton>
        </ConfirmationContent>
      </Container>
    </>
  );
}
