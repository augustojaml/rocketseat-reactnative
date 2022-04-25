import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 8px;
  margin: 20px 0;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`;

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
