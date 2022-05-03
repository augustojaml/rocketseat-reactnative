import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Accessories } from '../../../shared/components/Accessories';
import { Button } from '../../../shared/components/Button';
import { MainTextRegular } from '../../../shared/components/fonts';
import { InfoLabel } from '../../../shared/components/InfoLabel';
import { Slider } from '../../../shared/components/Slider';
import {
  MainAbsoluteButtonContainer,
  MainScrollView,
  MainSpaceHeight,
} from '../../../shared/components/views';
import { ICar, ICarPhotos } from '../../../shared/hooks/useCar';

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

  const singlePhotos: ICarPhotos[] = [
    {
      id: car.id,
      carId: car.id,
      photo: car.thumbnail,
    },
  ];

  return (
    <>
      <Container>
        <StatusBar translucent style="dark" backgroundColor={theme.colors.background} />
        <Slider onPress={handleNavigationGoBack} photos={car.photos ? car.photos : singlePhotos} />
        <MainScrollView>
          <CarInfo>
            <InfoLabel label={car.brand} value={car.name} valueSize={RFValue(25)} />
            <InfoLabel
              label={car.period}
              value={`R$ ${car.price}`}
              valueSize={RFValue(25)}
              valueColor={theme.colors.main900}
            />
          </CarInfo>
          <Accessories accessories={car.accessories} />
          <MainTextRegular size={RFValue(15)}>{car.about}</MainTextRegular>
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
