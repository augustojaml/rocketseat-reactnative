import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
  type: 'up' | 'down' | 'total';
}

export const Container = styled.View<Props>`
  background: ${({ theme, type }) => (type === 'total' ? theme.colors.secondary : theme.colors.shape)};
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

export const Title = styled.Text<Props>`
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) => (type === 'total' ? theme.colors.shape : theme.colors.text_secondary)};
  font-family: ${({ theme }) => theme.fonts.regular};
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

export const Content = styled.View``;

export const Amount = styled.Text<Props>`
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) => (type === 'total' ? theme.colors.shape : theme.colors.text_secondary)};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-top: ${RFValue(30)}px;
`;

export const LastTransaction = styled.Text<Props>`
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) => (type === 'total' ? theme.colors.shape : theme.colors.text)};
  font-family: ${({ theme }) => theme.fonts.regular};
`;
