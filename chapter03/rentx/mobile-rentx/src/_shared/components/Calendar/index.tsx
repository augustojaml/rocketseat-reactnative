import React from 'react';
import { Calendar as CustomCalendar, CalendarProps, LocaleConfig } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';

import { Container } from './styled';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';

export const ptBR = {
  monthNames: [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ],
  monthNamesShort: [
    'Jan',
    'Fev',
    'Mar',
    'Abr',
    'Mai',
    'Jun',
    'Jul',
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
  ],
  dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'],
  today: 'Hoje',
};

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export interface IMarkedDates {
  [date: string]: {
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
  };
}

export interface IDayProps {
  dateString: string;
  day: number;
  month: number;
  year: number;
  timestamp: number;
}

export function Calendar({ markedDates, onDayPress }: CalendarProps) {
  const theme = useTheme();

  return (
    <>
      <Container>
        <CustomCalendar
          firstDay={1}
          minDate={new Date().toISOString()}
          markingType="period"
          markedDates={markedDates}
          onDayPress={onDayPress}
          renderArrow={(direction) => (
            <Feather
              name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
              size={RFValue(24)}
              color={theme.colors.primary500}
            />
          )}
          headerStyle={{
            backgroundColor: theme.colors.shape,
            borderBottomWidth: 0.5,
            borderStyle: 'solid',
            borderBottomColor: theme.colors.primary500,
            marginHorizontal: 10,
          }}
          theme={{
            textMonthFontSize: 20,
            textMonthFontFamily: theme.fonts.medium,
            monthTextColor: theme.colors.primary500,
            textDayFontFamily: theme.fonts.regular,
            textDayHeaderFontFamily: theme.fonts.medium,
            textDayHeaderFontSize: 10,
            arrowStyle: {
              marginHorizontal: -25,
            },
            calendarBackground: theme.colors.shape,
          }}
        />
      </Container>
    </>
  );
}
