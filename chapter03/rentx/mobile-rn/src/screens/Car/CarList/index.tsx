import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { CarListItem } from '../../../shared/components/CarListItem';
import { MainTextMedium } from '../../../shared/components/fonts';
import { MainHeader, MainSpaceHeight } from '../../../shared/components/views';
import { ICar, useCar } from '../../../shared/hooks/useCar';
import { LogoTextSvg } from '../../../shared/utils/images';
import { Container, ContentLoading, HeaderWrapper } from './styled';

export function CarList() {
  const theme = useTheme();
  const { cars, isLoadingCars, fetchApiCars } = useCar();
  const navigation = useNavigation();

  function handleNavigationCarDetails(car: ICar) {
    navigation.navigate('CarDetails', { car: car });
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await fetchApiCars();
      })();
    }, [])
  );

  return (
    <>
      <Container>
        <StatusBar translucent style="light" backgroundColor={theme.colors.primary800} />
        <MainHeader background={theme.colors.primary800}>
          <HeaderWrapper>
            <LogoTextSvg />
            {isLoadingCars === false && (
              <MainTextMedium>{`Total de ${cars.length} carro${
                cars.length > 1 ? 's' : ''
              }`}</MainTextMedium>
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
            ItemSeparatorComponent={() => <MainSpaceHeight height={2} />}
            renderItem={({ item }) => (
              <CarListItem item={item} onPress={() => handleNavigationCarDetails(item)} />
            )}
          />
        )}
      </Container>
    </>
  );
}
