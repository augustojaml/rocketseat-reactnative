import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  type?: 'up' | 'down' | 'total';
}

export const Container = styled.View<Props>`
  width: ${RFValue(300)}px;
  background: ${({ theme, type }) => (type === 'total' ? theme.colors.secondary : theme.colors.shape)};
  border-radius: 8px;
  padding: 20px;
  margin-right: 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Transaction = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => (type === 'total' ? theme.colors.shape : theme.colors.text_secondary)};
`;

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(40)}px;
  ${({ type, theme }) =>
    type === 'up' &&
    css`
      color: ${theme.colors.success};
    `}

  ${({ type, theme }) =>
    type === 'down' &&
    css`
      color: ${theme.colors.attention};
    `}

    ${({ type, theme }) =>
    type === 'total' &&
    css`
      color: ${theme.colors.shape};
    `}
`;

export const Content = styled.View`
  margin-top: 20px;
`;

export const Amount = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) => (type === 'total' ? theme.colors.shape : theme.colors.text_secondary)};
`;

export const LastTransaction = styled.Text<Props>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) => (type === 'total' ? theme.colors.shape : theme.colors.text)};
  margin-top: ${({ theme }) => (theme.theme === 'dark' ? 0 : -15)}px;
`;
