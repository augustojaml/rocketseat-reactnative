import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { IScreenConfirmation } from '../../routes/user.stack.routes';
import { OkColorSvg, OkSvg } from '../../_shared/utils/images';

import {
  ConfirmationButton,
  ConfirmationButtonTitle,
  ConfirmationDescription,
  ConfirmationTitle,
  Container,
  LogoLarge,
} from './styled';

interface IConfirmation {
  screen: IScreenConfirmation;
}

export function Confirmation() {
  const { screen } = useRoute().params as IConfirmation;
  const navigation = useNavigation();

  function handleNextScreen() {
    navigation.navigate(screen.nextScreen);
  }

  return (
    <>
      <Container>
        <LogoLarge />
        <OkColorSvg />
        <ConfirmationTitle>{screen.title}</ConfirmationTitle>
        <ConfirmationDescription>{screen.subTitle}</ConfirmationDescription>
        <ConfirmationButton onPress={handleNextScreen}>
          <ConfirmationButtonTitle>Ok</ConfirmationButtonTitle>
        </ConfirmationButton>
      </Container>
    </>
  );
}
