import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Accessories } from '../../../_shared/components/Accessories';
import { Button } from '../../../_shared/components/Button';
import { MainTextRegular } from '../../../_shared/components/fonts';
import { InfoLabel } from '../../../_shared/components/InfoLabel';
import { Slider } from '../../../_shared/components/Slider';
import {
  MainAbsoluteButtonContainer,
  MainScrollView,
  MainSpaceHeight,
} from '../../../_shared/components/views';
import { ICar } from '../../../_shared/hooks/useCar';
import { CalendarSvg, ChevronRightSvg } from '../../../_shared/utils/images';

import {
  CalendarIconContainer,
  CarFinalPriceWrapper,
  CarInfo,
  Container,
  IconContainer,
} from './styled';

export function CarFinalPrice() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { car } = useRoute().params as { car: ICar };

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleNavigationNextScreen(car: ICar) {
    navigation.navigate('Confirmation', {
      confirmation: {
        title: 'Carro alugado!',
        subTitle: `Agora você só precisa ir\naté a concessionária da RENTX`,
        nextScreen: 'CarAppointments',
      },
    });
  }

  return (
    <>
      <Container>
        <StatusBar translucent style="dark" backgroundColor={theme.colors.background} />
        <Slider onPress={handleNavigationGoBack} photos={car.photos} />
        <MainScrollView>
          <CarInfo>
            <InfoLabel label={car.brand} value={car.model} valueSize={RFValue(25)} />
            <InfoLabel
              label="Ao dia"
              value={`R$ ${car.daily_rate}`}
              valueSize={RFValue(25)}
              valueColor={theme.colors.main900}
            />
          </CarInfo>
          <Accessories accessories={car.accessories} />
          <CarFinalPriceWrapper>
            <CalendarIconContainer>
              <CalendarSvg fill={theme.colors.shape} />
            </CalendarIconContainer>
            <InfoLabel
              label="de"
              value="18/06/2022"
              style={{ flex: 1, paddingLeft: RFValue(20) }}
            />
            <IconContainer>
              <ChevronRightSvg />
            </IconContainer>
            <InfoLabel label="de" value="18/06/2022" style={{ flex: 1 }} />
          </CarFinalPriceWrapper>
          <CarFinalPriceWrapper style={{ marginTop: RFValue(10), marginBottom: RFValue(100) }}>
            <InfoLabel label="de" value="R$ 580 x3 diária" style={{ flex: 1 }} />
            <InfoLabel
              label=""
              valueSize={RFValue(24)}
              valueColor={theme.colors.secondary900}
              value="R$ 2.900"
            />
          </CarFinalPriceWrapper>
        </MainScrollView>
        <MainAbsoluteButtonContainer background={theme.colors.background}>
          <Button title="Alugar agora" onPress={() => handleNavigationNextScreen(car)} />
        </MainAbsoluteButtonContainer>
      </Container>
    </>
  );
}
