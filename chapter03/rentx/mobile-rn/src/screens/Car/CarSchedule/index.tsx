import { useNavigation, useRoute } from '@react-navigation/native';
import { addDays, eachDayOfInterval, format } from 'date-fns';
import { StatusBar } from 'expo-status-bar';
import { lighten } from 'polished';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { Button } from '../../../shared/components/Button';
import { Calendar, IDayProps, IMarkedDates } from '../../../shared/components/Calendar';
import { generateInterval } from '../../../shared/components/Calendar/generateInterval';
import { MainTextMedium, MainTitleBold } from '../../../shared/components/fonts';
import { IconButton } from '../../../shared/components/IconButton';
import { MainAbsoluteButtonContainer, MainHeader } from '../../../shared/components/views';
import { ICar } from '../../../shared/hooks/useCar';
import { ArrowLongRightSvg } from '../../../shared/utils/images';

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

  const [lastSelectedDate, setLastSelectedDate] = useState<IDayProps>({} as IDayProps);
  const [markedDates, setMarkedDates] = useState<IMarkedDates>({} as IMarkedDates);

  function handleNavigationGoBack() {
    navigation.goBack();
  }

  function handleDayPress(date: IDayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end, theme);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setDateFrom(format(addDays(new Date(firstDate), 1), 'dd/MM/yyyy'));
    setDateAt(format(addDays(new Date(endDate), 1), 'dd/MM/yyyy'));
  }

  function handleNavigationToCarFinalPrice(car: ICar) {
    navigation.navigate('CarFinalPrice', { car: car, dates: Object.keys(markedDates) });
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
              Escolha uma{'\n'}data de in??cio e{'\n'}fim do aluguel
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
                <CarScheduleLabel>AT??</CarScheduleLabel>
                <MainTextMedium>{dateAt}</MainTextMedium>
              </CarScheduleDateValue>
            </CarScheduleDateWrapper>
          </CarScheduleInfo>
          <Calendar markedDates={markedDates} onDayPress={handleDayPress} />
        </ScrollView>
        <MainAbsoluteButtonContainer background={theme.colors.shape}>
          <Button
            title="Escolher per??odo do aluguel"
            onPress={() => handleNavigationToCarFinalPrice(car)}
          />
        </MainAbsoluteButtonContainer>
      </Container>
    </>
  );
}
