import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CarAppointmentsHeader = styled.View`
  background-color: ${({ theme }) => theme.colors.primary800};
  padding: 0 ${RFPercentage(3)}px ${RFPercentage(3)}px ${RFPercentage(3)}px;
`;

export const CarAppointmentsInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${RFPercentage(3)}px ${RFPercentage(3)}px ${RFPercentage(1)}px ${RFPercentage(3)}px;
`;

export const ContentLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
