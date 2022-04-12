import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { ICar, useCar } from '../../../hook/useCar';
import { CarListItem } from '../../../_shared/components/CarListItem';
import { MainHeader } from '../../../_shared/components/styled';
import { LogoTextSvg } from '../../../_shared/utils/images';

import { Container, ContentLoading, HeaderWrapper, InfoTotalCar } from './styled';

export function CarList() {
  const theme = useTheme();
  const { cars, isLoadingCars } = useCar();
  const navigation = useNavigation();

  function handleNavigationCarDetails(car: ICar) {
    navigation.navigate('CarDetails', { car });
  }

  return (
    <>
      <Container>
        <MainHeader background={theme.colors.primary800}>
          <HeaderWrapper>
            <LogoTextSvg />
            {cars.length > 0 && (
              <InfoTotalCar>{`Total de ${cars.length} carro${
                cars.length > 1 && 's'
              }`}</InfoTotalCar>
            )}
          </HeaderWrapper>
        </MainHeader>
        {isLoadingCars ? (
          <ContentLoading>
            <ActivityIndicator color={theme.colors.main900} size={RFValue(30)} />
          </ContentLoading>
        ) : (
          <FlatList
            data={cars}
            keyExtractor={(item) => String(item.id)}
            contentContainerStyle={{ padding: RFPercentage(3) }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CarListItem item={item} onPress={() => handleNavigationCarDetails(item)} />
            )}
          />
        )}
      </Container>
    </>
  );
}
