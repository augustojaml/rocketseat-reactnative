import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ComponentProps {
  height: number;
  justifyContent: string;
  alignItems: string;
  flexDirection: string;
}

export const Container = styled.View<ComponentProps>`
  width: 100%;
  height: ${({ height }) => height}px;
  background: ${({ theme }) => theme.colors.primary};

  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  padding: 0 ${RFPercentage(3)}px;
  padding-bottom: ${RFValue(15)}px;
`;
