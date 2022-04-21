import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { CarListItem } from '../../../_shared/components/CarListItem';
import { MainTextMedium } from '../../../_shared/components/fonts';
import { MainHeader, MainSpaceHeight } from '../../../_shared/components/views';
import { ICar, useCar } from '../../../_shared/hooks/useCar';
import { useTabs } from '../../../_shared/hooks/useTabs';
import { LogoTextSvg } from '../../../_shared/utils/images';
import { Container, ContentLoading, HeaderWrapper } from './styled';

export function CarList() {
  const theme = useTheme();
  const { cars, loadingCar, isLoadingCars } = useCar();
  const navigation = useNavigation();

  function handleNavigationCarDetails(car: ICar) {
    navigation.navigate('CarDetails', { car: car });
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await loadingCar();
      })();
    }, [])
  );

  // useEffect(() => {
  //   (async () => {
  //     await loadingCar();
  //   })();
  // }, []);

  return (
    <>
      <Container>
        <StatusBar translucent style="light" backgroundColor={theme.colors.primary800} />
        <MainHeader background={theme.colors.primary800}>
          <HeaderWrapper>
            <LogoTextSvg />
            {isLoadingCars === false && (
              <MainTextMedium>{`Total de ${String(cars.length).padStart(2, '0')} carro${
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
