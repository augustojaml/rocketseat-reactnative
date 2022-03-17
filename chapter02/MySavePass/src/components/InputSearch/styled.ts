import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.background_item};
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
`;

export const Input = styled.TextInput`
  flex: 1;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const IconButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 50px;
  height: 50px;
  background: ${({ theme }) => theme.colors.background_tertiary};
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.background_item};
  font-size: ${RFValue(20)}px;
`;
