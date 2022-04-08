import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components';
import { CalendarWhiteSvg } from '../../../assets/images';
import { Button } from '../../../components/Button';
import { SliderCarHeader } from '../../../components/SliderCarHeader';
import { ICar } from '../../../hooks/useCar';
import { carAccessories } from '../../../utils/carAccessories';

import {
  Container,
  Details,
  Detail,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Description,
  ButtonContainer,
  Accessories,
  Accessory,
  AccessoryName,
  RentalPeriod,
  CalendarIconContainer,
  PeriodContainer,
  PeriodText,
  PeriodDate,
  PeriodIconContainer,
  PeriodIcon,
  TotalContainer,
  TotalInfoContent,
  TotalValueContent,
  TotalInfoLabel,
  TotalInfoValue,
  TotalValue,
} from './styled';

interface ICarParams {
  car: ICar;
}

export function DetailsPrice() {
  const theme = useTheme();
  const { car } = useRoute().params as ICarParams;

  const navigation = useNavigation();

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleNavigationGoToCarChooseDate() {
    navigation.navigate('Confirmation', {
      title: 'Carro Alugado',
      subTitle: 'Agora você só precisa ir\naté a concessionária da RENTX',
      nextScreen: 'Home',
    });
  }

  return (
    <>
      <Container>
        <StatusBar style="dark" />
        <SliderCarHeader images={car.photos} onPress={handleNavigationGoBack} />

        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <Details>
            <Detail>
              <Brand>{car.brand}</Brand>
              <Name>{car.model}</Name>
            </Detail>
            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ {car.daily_rate}</Price>
            </Rent>
          </Details>

          <Accessories>
            {car.accessories.map((item) => {
              let ImageSvg = carAccessories[item.type];
              return (
                <Accessory key={item.type}>
                  <ImageSvg />
                  <AccessoryName>{item.name}</AccessoryName>
                </Accessory>
              );
            })}
          </Accessories>
          <RentalPeriod>
            <CalendarIconContainer>
              <CalendarWhiteSvg />
            </CalendarIconContainer>
            <PeriodContainer>
              <PeriodText>DE</PeriodText>
              <PeriodDate>17/06/1977</PeriodDate>
            </PeriodContainer>
            <PeriodIconContainer>
              <PeriodIcon name="chevron-right" />
            </PeriodIconContainer>
            <PeriodContainer>
              <PeriodText>ATÉ</PeriodText>
              <PeriodDate>17/06/1977</PeriodDate>
            </PeriodContainer>
          </RentalPeriod>
          <TotalContainer>
            <TotalInfoContent>
              <TotalInfoLabel>TOTAL</TotalInfoLabel>
              <TotalInfoValue>R$ 580 x3 diárias</TotalInfoValue>
            </TotalInfoContent>
            <TotalValueContent>
              <TotalValue>R$ 2.900</TotalValue>
            </TotalValueContent>
          </TotalContainer>
        </ScrollView>

        <ButtonContainer>
          <Button
            title="Alugar Agora"
            background={theme.colors.secondary900}
            onPress={handleNavigationGoToCarChooseDate}
          />
        </ButtonContainer>
      </Container>
    </>
  );
}
