import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  background: string;
}

export const Container = styled(RectButton)<Props>`
  background-color: ${({ background }) => background};
  align-items: center;
  padding: 20px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;
