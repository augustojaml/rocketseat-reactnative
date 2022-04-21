import { useNavigation, useRoute } from '@react-navigation/native';
import { addDays, eachDayOfInterval, format } from 'date-fns';

import { StatusBar } from 'expo-status-bar';
import { lighten, rgba } from 'polished';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Button } from '../../../_shared/components/Button';
import { Calendar, IDayProps, IMarkedDates } from '../../../_shared/components/Calendar';
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

interface IRentalPeriod {
  startFormatted: string;
  endFormatted: string;
}

export function CarSchedule() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { car } = useRoute().params as { car: ICar };

  const [dateFrom, setDateFrom] = useState('');
  const [dateAt, setDateAt] = useState('');

  const [lastSelectedDate, setLastSelectedDate] = useState<IDayProps>({} as IDayProps);
  const [markedDates, setMarkedDates] = useState<IMarkedDates>({} as IMarkedDates);

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleNavigationNextScreen(car: ICar) {
    navigation.navigate('CarFinalPrice', { car: car, dates: Object.keys(markedDates) });
  }

  function generateInterval(start: IDayProps, end: IDayProps) {
    let interval: IMarkedDates = {};

    eachDayOfInterval({
      start: new Date(start.timestamp),
      end: new Date(end.timestamp),
    }).forEach((item) => {
      const date = format(addDays(item, 1), 'yyyy-MM-dd');

      interval = {
        ...interval,
        [date]: {
          color:
            start.dateString === date || end.dateString === date
              ? theme.colors.main900
              : lighten(0.4, theme.colors.main900),

          textColor:
            start.dateString === date || end.dateString === date
              ? lighten(0.4, theme.colors.main900)
              : theme.colors.main900,
        },
      };
    });

    return interval;
  }

  function handleDayPress(date: IDayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setDateFrom(format(addDays(new Date(firstDate), 1), 'dd/MM/yyyy'));
    setDateAt(format(addDays(new Date(endDate), 1), 'dd/MM/yyyy'));
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
          <Calendar markedDates={markedDates} onDayPress={handleDayPress} />
        </ScrollView>
        <MainAbsoluteButtonContainer background={theme.colors.shape}>
          <Button
            title="Escolher período do aluguel"
            onPress={() => handleNavigationNextScreen(car)}
            isActive={dateFrom !== '' && dateFrom !== ''}
          />
        </MainAbsoluteButtonContainer>
      </Container>
    </>
  );
}
