import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { CarAppointmentsItem } from '../../../shared/components/CarAppointmentsItem';
import { MainTextMedium, MainTextRegular, MainTitleBold } from '../../../shared/components/fonts';
import { IconButton } from '../../../shared/components/IconButton';
import { MainHeader, MainSpaceHeight } from '../../../shared/components/views';
import { useCar } from '../../../shared/hooks/useCar';

import {
  CarAppointmentsHeader,
  CarAppointmentsInfo,
  Container,
  ContentLoading,
  HeaderWrapper,
} from './styled';

const carTemp = [
  {
    id: '8a5ff0dd-9139-4150-a42a-7263c91c2318',
    brand: 'Audi',
    model: 'A4',
    daily_rate: '200',
    fuel_type: 'gasoline',
    photos: [
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/audi/01.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/audi/02.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/audi/03.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/audi/04.png',
    ],
  },
  {
    id: 'f072cbc8-1441-4c4b-8df4-2f5666546e24',
    brand: 'Chevrolet',
    model: 'Camaro',
    daily_rate: '450',
    fuel_type: 'gasoline',
    photos: [
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/camaro/01.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/camaro/02.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/camaro/03.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/camaro/04.png',
    ],
  },
];

export function CarAppointments() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { isLoadingCars, rentals, fetchApiRentals } = useCar();

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await fetchApiRentals();
      })();
    }, [])
  );

  return (
    <>
      <Container>
        <StatusBar translucent style="light" backgroundColor={theme.colors.primary800} />
        <MainHeader background={theme.colors.primary800}>
          <HeaderWrapper>
            <IconButton onPress={handleNavigationGoBack} />
          </HeaderWrapper>
        </MainHeader>
        <CarAppointmentsHeader>
          <MainTitleBold color={theme.colors.shape}>
            Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
          </MainTitleBold>
          <MainTextRegular color={theme.colors.shape} marginTop={18}>
            Conforto, segurança e praticidade
          </MainTextRegular>
        </CarAppointmentsHeader>
        <CarAppointmentsInfo>
          <MainTextMedium>Agendamentos feitos</MainTextMedium>
          <MainTextMedium>{String(rentals.length).padStart(2, '0')}</MainTextMedium>
        </CarAppointmentsInfo>

        {isLoadingCars ? (
          <ContentLoading>
            <ActivityIndicator color={theme.colors.main900} size={RFValue(30)} />
          </ContentLoading>
        ) : (
          <FlatList
            data={rentals}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ padding: RFPercentage(3) }}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => <MainSpaceHeight height={2} />}
            renderItem={({ item }) => <CarAppointmentsItem item={item} />}
          />
        )}
      </Container>
    </>
  );
}
