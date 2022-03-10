import { Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  height: ${RFValue(56)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 16px;
  padding: 0 20px;
`;

export const Title = styled(Text)`
  flex: 1;
  text-align: center;
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
