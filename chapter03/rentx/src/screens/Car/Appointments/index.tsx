import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import { Button } from '../../../components/Button';
import { CarIAppointmentsItem } from '../../../components/CarIAppointmentsItem';
import { SliderCarHeader } from '../../../components/SliderCarHeader';
import { ICar } from '../../../hooks/useCar';
import { carAccessories } from '../../../utils/carAccessories';
import {
  BackIcon,
  Container,
  Header,
  HeaderWrapper,
  IconButton,
  HeaderSubTitle,
  HeaderTitle,
  Content,
  ContentTitleWrapper,
  ContentTitle,
  ContentCount,
} from './styled';

interface ICarParams {
  car: ICar;
}

export function Appointments() {
  const navigation = useNavigation();

  function handleNavigationGoBack() {
    navigation.goBack();
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
            <HeaderTitle>
              Seus agendamentos,{'\n'}
              estão aqui.
            </HeaderTitle>
            <HeaderSubTitle>Conforto, segurança e praticidade.</HeaderSubTitle>
          </HeaderWrapper>
        </Header>
        <Content>
          <ContentTitleWrapper>
            <ContentTitle>Agendamentos feitos</ContentTitle>
            <ContentCount>02</ContentCount>
          </ContentTitleWrapper>
          <FlatList
            data={['0', '1', '2']}
            keyExtractor={(item) => String(item)}
            showsVerticalScrollIndicator={false}
            renderItem={() => <CarIAppointmentsItem />}
          />
        </Content>
      </Container>
    </>
  );
}
