import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Button } from '../../../_shared/components/Button';
import { Calendar } from '../../../_shared/components/Calendar';
import { MainTextMedium, MainTitleBold } from '../../../_shared/components/fonts';
import { IconButton } from '../../../_shared/components/IconButton';
import { MainAbsoluteButtonContainer, MainHeader } from '../../../_shared/components/views';
import { ICar } from '../../../_shared/hooks/useCar';
import { ArrowLongRightSvg } from '../../../_shared/utils/images';

import {
  CarScheduleDateValue,
  CarScheduleDateWrapper,
  CarScheduleInfo,
  CarScheduleLabel,
  Container,
  HeaderWrapper,
  Title,
} from './styled';

export function CarSchedule() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { car } = useRoute().params as { car: ICar };

  const [dateFrom, setDateFrom] = useState('');
  const [dateAt, setDateAt] = useState('');

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleNavigationNextScreen(car: ICar) {
    navigation.navigate('CarFinalPrice', { car: car });
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
        <ScrollView>
          <CarScheduleInfo>
            <MainTitleBold color={theme.colors.shape}>
              Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
            </MainTitleBold>
            <CarScheduleDateWrapper>
              <CarScheduleDateValue hiddenBorder={dateFrom === ''}>
                <CarScheduleLabel>DE</CarScheduleLabel>
                <MainTextMedium>{dateFrom}</MainTextMedium>
              </CarScheduleDateValue>
              <ArrowLongRightSvg
                fill={theme.colors.primary400}
                style={{ marginHorizontal: RFValue(30), marginTop: RFValue(10) }}
              />
              <CarScheduleDateValue hiddenBorder={dateAt === ''}>
                <CarScheduleLabel>ATÉ</CarScheduleLabel>
                <MainTextMedium>{dateAt}</MainTextMedium>
              </CarScheduleDateValue>
            </CarScheduleDateWrapper>
          </CarScheduleInfo>
          <Calendar />
        </ScrollView>
        <MainAbsoluteButtonContainer background={theme.colors.shape}>
          <Button
            title="Escolher período do aluguel"
            onPress={() => handleNavigationNextScreen(car)}
          />
        </MainAbsoluteButtonContainer>
      </Container>
    </>
  );
}
