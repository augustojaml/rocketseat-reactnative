import { addDays, eachDayOfInterval, format } from 'date-fns';
import { lighten } from 'polished';
import { DefaultTheme } from 'styled-components/native';
import { IDayProps, IMarkedDates } from '.';

export function generateInterval(start: IDayProps, end: IDayProps, theme: DefaultTheme) {
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
