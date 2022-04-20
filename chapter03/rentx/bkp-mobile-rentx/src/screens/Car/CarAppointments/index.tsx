import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { CarAppointmentsItem } from '../../../_shared/components/CarAppointmentsItem';
import { CarListItem } from '../../../_shared/components/CarListItem';
import { MainTextMedium, MainTextRegular, MainTitleBold } from '../../../_shared/components/fonts';
import { IconButton } from '../../../_shared/components/IconButton';
import { MainHeader, MainSpaceHeight } from '../../../_shared/components/views';

import { CarAppointmentsHeader, CarAppointmentsInfo, Container, HeaderWrapper } from './styled';

const carTemp = [
  {
    id: '8a5ff0dd-9139-4150-a42a-7263c91c2318',
    brand: 'Audi',
    model: 'A4',
    daily_rate: '200',
    fuel_type: 'gasoline',
    photos: [
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/audi/01.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/audi/02.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/audi/03.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/audi/04.png',
    ],
  },
  {
    id: 'f072cbc8-1441-4c4b-8df4-2f5666546e24',
    brand: 'Chevrolet',
    model: 'Camaro',
    daily_rate: '450',
    fuel_type: 'gasoline',
    photos: [
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/camaro/01.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/camaro/02.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/camaro/03.png',
      'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/camaro/04.png',
    ],
  },
];

export function CarAppointments() {
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavigationGoBack() {
    navigation.goBack();
  }

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
          <MainTextMedium>02</MainTextMedium>
        </CarAppointmentsInfo>
        <FlatList
          data={[0, 1, 2]}
          keyExtractor={(item) => String(item)}
          contentContainerStyle={{ padding: RFPercentage(3) }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <MainSpaceHeight height={2} />}
          renderItem={({ item }) => <CarAppointmentsItem />}
        />
      </Container>
    </>
  );
}
