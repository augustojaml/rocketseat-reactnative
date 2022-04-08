import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ArrowSvg } from '../../../assets/images';
import { Button } from '../../../components/Button';
import { Calendar } from '../../../components/Calendar';
import { ICar } from '../../../hooks/useCar';

import {
  BackIcon,
  IconButton,
  Container,
  Header,
  HeaderWrapper,
  Title,
  PeriodWrapper,
  Period,
  PeriodText,
  ArrowContainer,
  PeriodDate,
  ButtonContainer,
} from './styled';

interface ICarParams {
  car: ICar;
}

export function Scheduling() {
  const navigation = useNavigation();
  const { car } = useRoute().params as ICarParams;

  const [dateFrom, setDateFrom] = useState(null);
  const [dateAt, setDateAt] = useState(null);

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleNavigationToCarDetailsPrice() {
    navigation.navigate('DetailsPrice', { car });
  }

  return (
    <>
      <Container>
        <Header>
          <StatusBar style="light" translucent />
          <HeaderWrapper>
            <IconButton onPress={handleNavigationGoBack}>
              <BackIcon name="chevron-left" />
            </IconButton>
            <Title>
              Escolha uma{'\n'}
              data de início e{'\n'}
              fim do aluguel{'\n'}
            </Title>
            <PeriodWrapper>
              <Period showBorder={dateFrom !== null}>
                <PeriodText>DE</PeriodText>
                <PeriodDate>{dateFrom}</PeriodDate>
              </Period>
              <ArrowContainer>
                <ArrowSvg color="red" />
              </ArrowContainer>
              <Period showBorder={dateAt !== null}>
                <PeriodText>ATÉ</PeriodText>
                <PeriodDate>{dateAt}</PeriodDate>
              </Period>
            </PeriodWrapper>
          </HeaderWrapper>
        </Header>
        <Calendar />

        <ButtonContainer>
          <Button title="Confirmar" isActive={true} onPress={handleNavigationToCarDetailsPrice} />
        </ButtonContainer>
      </Container>
    </>
  );
}
