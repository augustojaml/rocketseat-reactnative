import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { LogoSvg } from '../../assets/images';
import { CarItem } from '../../components/CarItem';
import { ICar, useCar } from '../../hooks/useCar';

import { Container, Header, HeaderWrapper, CountCar, Content, ContentLoading } from './styled';

export function Home() {
  const { cars, isLoadingCars } = useCar();
  const theme = useTheme();
  const navigation = useNavigation();

  function handleNavigationCarDetails(car: ICar) {
    navigation.navigate('CarDetails', { car: car });
  }

  return (
    <>
      <Container>
        <Header>
          <StatusBar translucent style="light" />
          <HeaderWrapper>
            <LogoSvg />
            <CountCar>Total de 12 carros</CountCar>
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
