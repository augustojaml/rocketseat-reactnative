import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView } from 'react-native';
import { Button } from '../../components/Button';
import { SliderCarHeader } from '../../components/SliderCarHeader';
import { ICar } from '../../hooks/useCar';
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
} from './styled';

interface ICarParams {
  car: ICar;
}

export function CarDetails() {
  const { car } = useRoute().params as ICarParams;

  const navigation = useNavigation();

  function handleNavigationGoBack() {
    navigation.goBack();
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

          <Description>{car.description}</Description>
        </ScrollView>

        <ButtonContainer>
          <Button title="Escolher período do aluguel" />
        </ButtonContainer>
      </Container>
    </>
  );
}
