import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CarInfo = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
`;

export const CarFinalPriceWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CalendarIconContainer = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.main900};

  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View`
  height: ${RFValue(48)}px;
  align-items: center;
  justify-content: center;
  margin: 0 ${RFValue(20)}px;
`;
