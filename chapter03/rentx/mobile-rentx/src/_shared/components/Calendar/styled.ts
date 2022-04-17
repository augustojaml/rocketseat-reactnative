import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const CalendarHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarButton = styled.TouchableOpacity``;

export const IconCalendar = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.primary600};
`;

export const MonthYear = styled.Text`
  color: ${({ theme }) => theme.colors.primary600};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;

export const CalendarContainer = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const Title = styled.Text``;
