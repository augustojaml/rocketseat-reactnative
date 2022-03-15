import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  height: number;
  background: string;
  paddingTop: number;
  flexDirection: string;
  alignItems: string;
  justifyContent: string;
}

export const Container = styled.View<Props>`
  width: 100%;
  padding: 20px;
  height: ${({ height }) => RFPercentage(height)}px;
  background: ${({ background }) => background};
  padding-top: ${({ paddingTop }) => paddingTop}px;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
`;

export const Title = styled.Text``;
