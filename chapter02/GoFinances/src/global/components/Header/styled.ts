import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(130)}px;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: flex-end;
  padding: 0 ${RFPercentage(3)}px;
  padding-bottom: ${RFValue(15)}px;
`;
