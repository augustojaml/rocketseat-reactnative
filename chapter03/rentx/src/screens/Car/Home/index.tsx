import { useFocusEffect, useNavigation, useNavigationContainerRef } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { LogoSvg } from '../../../assets/images';
import { CarItem } from '../../../components/CarItem';
import { ICar, useCar } from '../../../hooks/useCar';
import { useCustomRoute } from '../../../hooks/useCustomRoute';

import { Container, Header, HeaderWrapper, CountCar, Content, ContentLoading } from './styled';
import { useIsFocused } from '@react-navigation/native';

export function Home() {
  const { cars, isLoadingCars } = useCar();
  const theme = useTheme();
  const navigation = useNavigation();

  const { changeShowTab } = useCustomRoute();

  const isFocused = useIsFocused();

  function handleNavigationCarDetails(car: ICar) {
    navigation.navigate('Details', { car: car });
    changeShowTab(false);
  }

  useFocusEffect(
    useCallback(() => {
      changeShowTab(true);
    }, [])
  );

  return (
    <>
      <Container>
        <Header>
          <StatusBar translucent style="light" />
          <HeaderWrapper>
            <LogoSvg />

            <CountCar>
              Total de{' '}
              {isLoadingCars ? '0 carros' : `${String(cars.length).padStart(2, '0')} carro`}
            </CountCar>
          </HeaderWrapper>
        </Header>
        {isLoadingCars ? (
          <ContentLoading>
            <ActivityIndicator color={theme.colors.main900} size={RFValue(30)} />
          </ContentLoading>
        ) : (
          <Content>
            <FlatList
              data={cars}
              keyExtractor={(item) => String(item.id)}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <>
                  <CarItem item={item} onPress={() => handleNavigationCarDetails(item)} />
                </>
              )}
            />
          </Content>
        )}
      </Container>
    </>
  );
}
