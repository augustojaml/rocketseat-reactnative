import { TextInput, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface StyledProps {
  active?: boolean;
}

export const Container = styled(TextInput)<StyledProps>`
  background: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
  padding: 20px;
  border-radius: 8px;
  ${({ active, theme }) =>
    active &&
    css`
      border-width: 3px;
      border-color: ${theme.colors.attention};
      border-style: solid;
    `}
`;

export const Message = styled.View`
  flex-direction: row;
  align-items: flex-start;
  height: 20px;
  margin-top: 2px;
  margin-bottom: 5px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.attention};
  margin-top: 2px;
  margin-right: 5px;
`;

export const MessageText = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(11)}px;
  font-style: italic;
`;
