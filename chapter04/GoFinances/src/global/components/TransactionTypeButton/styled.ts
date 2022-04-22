import { View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

interface Props {
  type?: string;
  isActive?: boolean;
}

export const Container = styled(View)<Props>`
  width: 48%;
  border-width: 2px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  ${({ isActive, type, theme }) =>
    isActive &&
    type === 'up' &&
    css`
      border-color: ${theme.colors.success};
    `};

  ${({ isActive, type, theme }) =>
    isActive &&
    type === 'down' &&
    css`
      border-color: ${theme.colors.attention};
    `};

  border-radius: 8px;
  overflow: hidden;
`;

export const Button = styled(RectButton)<Props>`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};

  ${({ isActive, type, theme }) =>
    isActive &&
    type === 'up' &&
    css`
      background: ${theme.colors.success_light};
    `};

  ${({ isActive, type, theme }) =>
    isActive &&
    type === 'down' &&
    css`
      background: ${theme.colors.attention_light};
    `};

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 20px;
`;

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(20)}px;
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
  margin-top: -2px;
  margin-right: 10px;
`;

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
