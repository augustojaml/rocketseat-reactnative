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

import { CarInfo, Container } from './styled';

export function CarDetails() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { car } = useRoute().params as { car: ICar };

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleNavigationNextScreen(car: ICar) {
    navigation.navigate('CarSchedule', { car: car });
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
          <MainTextRegular size={RFValue(15)}>{car.description}</MainTextRegular>
          <MainSpaceHeight height={RFValue(15)} />
        </MainScrollView>
        <MainAbsoluteButtonContainer background={theme.colors.background}>
          <Button
            title="Escolher período do aluguel"
            onPress={() => handleNavigationNextScreen(car)}
          />
        </MainAbsoluteButtonContainer>
      </Container>
    </>
  );
}
