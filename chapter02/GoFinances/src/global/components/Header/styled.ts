import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ComponentProps {
  height: number;
  justifyContent: string;
}

export const Container = styled.View<ComponentProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  background: ${({ theme }) => theme.colors.primary};
  justify-content: ${({ justifyContent }) => justifyContent};
  padding: 0 ${RFPercentage(3)}px;
  padding-bottom: ${RFValue(15)}px;
`;
