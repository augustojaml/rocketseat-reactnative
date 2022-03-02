import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 7px;
  padding: 20px 25px;
  padding-bottom: ${RFValue(45)}px;
  margin-right: ${RFValue(20)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`;

export const Content = styled.View``;

export const Amount = styled.Text`
  font-size: ${RFValue(32)}px;
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: ${RFValue(30)}px;
`;

export const LastTransaction = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
