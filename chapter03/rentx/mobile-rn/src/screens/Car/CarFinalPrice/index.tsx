import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert } from 'react-native';
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
import { useAuth } from '../../../shared/hooks/useAuth';
import { ICar, useCar } from '../../../shared/hooks/useCar';
import { CalendarSvg, ChevronRightSvg } from '../../../shared/utils/images';

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
  const { user } = useAuth();
  const { rent, isLoadingCars } = useCar();

  const { car, dates } = useRoute().params as { car: ICar; dates: string[] };

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  const screenValues = {
    userId: user!.id,
    carId: car.id,
    dateFrom: new Date(dates[0]),
    dateAt: new Date(dates[dates.length - 1]),
    total: dates.length * car.price,
  };

  async function handleNavigationToConfirmation() {
    try {
      await rent(screenValues);
      navigation.navigate('Confirmation', {
        confirmation: {
          title: 'Carro alugado!',
          subTitle: `Agora você só precisa ir\naté a concessionária da RENTX`,
          nextScreen: 'CarList',
        },
      });
    } catch (error) {
      Alert.alert('Rental', 'Não foi possível realizar agendamento');
    }
  }

  return (
    <>
      <Container>
        <StatusBar
          translucent
          style={theme.name === 'dark' ? 'light' : 'dark'}
          backgroundColor={theme.colors.background}
        />
        <Slider onPress={handleNavigationGoBack} photos={car.photos} />
        <MainScrollView>
          <CarInfo>
            <InfoLabel label={car.brand} value={car.name} valueSize={RFValue(25)} />
            <InfoLabel
              label="Ao dia"
              value={`R$ ${car.price}`}
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
              value={format(screenValues.dateFrom, 'dd/MM/yyyy')}
              style={{ flex: 1, paddingLeft: RFValue(20) }}
            />
            <IconContainer>
              <ChevronRightSvg />
            </IconContainer>
            <InfoLabel
              label="de"
              value={format(screenValues.dateAt, 'dd/MM/yyyy')}
              style={{ flex: 1 }}
            />
          </CarFinalPriceWrapper>
          <CarFinalPriceWrapper style={{ marginTop: RFValue(10), marginBottom: RFValue(100) }}>
            <InfoLabel
              label="de"
              value={`R$ ${car.price} x${dates.length} diária`}
              style={{ flex: 1 }}
            />
            <InfoLabel
              label=""
              valueSize={RFValue(24)}
              valueColor={theme.colors.secondary900}
              value={`R$ ${screenValues.total}`}
            />
          </CarFinalPriceWrapper>
        </MainScrollView>
        <MainAbsoluteButtonContainer background={theme.colors.background}>
          <Button
            title="Alugar agora"
            onPress={() => handleNavigationToConfirmation()}
            isLoading={isLoadingCars}
          />
        </MainAbsoluteButtonContainer>
      </Container>
    </>
  );
}
