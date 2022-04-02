import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.background_item};
  flex-direction: row;
  border-radius: 8px;
  overflow: hidden;
  height: ${RFPercentage(9)}px;
  padding-left: 20px;
  flex-direction: row;
`;

export const Input = styled.TextInput`
  flex: 1;
  color: ${({ theme }) => theme.colors.text_dark};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const IconButton = styled.TouchableOpacity`
  width: ${RFPercentage(9)}px;
  height: ${RFPercentage(9)}px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${RFValue(20)}px;
`;

export const ErrorContainer = styled.View`
  height: 25px;
  flex-direction: row;
`;

export const IconError = styled(Feather)`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${RFValue(11)}px;
  margin-top: 2px;
  margin-right: 5px;
`;

export const Error = styled.Text`
  color: ${({ theme }) => theme.colors.danger};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(11)}px;
`;
