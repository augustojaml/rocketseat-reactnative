import React from 'react';
import { Calendar as CustomCalendar, LocaleConfig } from 'react-native-calendars';
import { Feather } from '@expo/vector-icons';

import { Container } from './styled';
import { useTheme } from 'styled-components';
import { RFValue } from 'react-native-responsive-fontsize';
import { ptBR } from './locale';

LocaleConfig.locales['pt-br'] = ptBR;
LocaleConfig.defaultLocale = 'pt-br';

export function Calendar() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <CustomCalendar
          firstDay={1}
          minDate={new Date().toISOString()}
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
