import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import { CarSvg } from '../../../assets/images';
import { Button } from '../../../components/Button';
import { SliderCarHeader } from '../../../components/SliderCarHeader';
import { ICar } from '../../../hooks/useCar';
import { carAccessories } from '../../../utils/carAccessories';
import {
  Container,
  CarDetails,
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
} from './styled';

interface ICarParams {
  car: ICar;
}

export function Details() {
  const { car } = useRoute().params as ICarParams;

  const navigation = useNavigation();

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleNavigationGoToCarChooseDate() {
    navigation.navigate('Scheduling', { car });
  }

  return (
    <>
      <Container>
        <StatusBar style="dark" />
        <SliderCarHeader images={car.photos} onPress={handleNavigationGoBack} />

        <ScrollView contentContainerStyle={{ padding: 20 }}>
          <CarDetails>
            <Detail>
              <Brand>{car.brand}</Brand>
              <Name>{car.model}</Name>
            </Detail>
            <Rent>
              <Period>Ao dia</Period>
              <Price>R$ {car.daily_rate}</Price>
            </Rent>
          </CarDetails>

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

          <Description>{car.description}</Description>
        </ScrollView>

        <ButtonContainer>
          <Button title="Escolher período do aluguel" onPress={handleNavigationGoToCarChooseDate} />
        </ButtonContainer>
      </Container>
    </>
  );
}
