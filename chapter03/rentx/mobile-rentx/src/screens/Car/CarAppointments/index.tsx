import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { CarAppointmentsItem } from '../../../_shared/components/CarAppointmentsItem';
import { CarListItem } from '../../../_shared/components/CarListItem';
import { MainTextMedium, MainTextRegular, MainTitleBold } from '../../../_shared/components/fonts';
import { IconButton } from '../../../_shared/components/IconButton';
import { MainHeader, MainSpaceHeight } from '../../../_shared/components/views';
import { useCar } from '../../../_shared/hooks/useCar';
import { useTabs } from '../../../_shared/hooks/useTabs';

import {
  CarAppointmentsHeader,
  CarAppointmentsInfo,
  Container,
  ContentLoading,
  HeaderWrapper,
} from './styled';

export function CarAppointments() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { scheduledCars, loadingScheduledCars, isLoadingCars } = useCar();

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await loadingScheduledCars();
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
          {!isLoadingCars && (
            <MainTextMedium>{`${String(scheduledCars.length).padStart(2, '0')}`}</MainTextMedium>
          )}
        </CarAppointmentsInfo>
        {isLoadingCars ? (
          <ContentLoading>
            <ActivityIndicator color={theme.colors.main900} size={RFValue(30)} />
          </ContentLoading>
        ) : (
          <FlatList
            data={scheduledCars}
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
