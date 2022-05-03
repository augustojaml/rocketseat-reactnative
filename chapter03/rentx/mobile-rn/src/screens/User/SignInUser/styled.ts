import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary400};
`;

export const ToggleContainer = styled.View`
  position: absolute;
  top: ${RFPercentage(8)}px;
  right: ${RFPercentage(3)}px;
  z-index: 999;
`;
