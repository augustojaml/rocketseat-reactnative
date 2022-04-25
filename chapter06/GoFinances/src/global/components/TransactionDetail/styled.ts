import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  type?: 'positive' | 'negative';
}

export const Container = styled.View`
  background: ${({ theme }) => theme.colors.shape};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const TransactionTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const TransactionAmount = styled.Text<Props>`
  color: ${({ theme, type }) =>
    type === 'positive' ? theme.colors.success : theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const TransactionCategory = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 10px;
  margin-top: -5px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const TransactionDate = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;
