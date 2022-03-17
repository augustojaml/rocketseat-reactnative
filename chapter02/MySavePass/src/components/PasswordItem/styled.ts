import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background_item};
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  margin-top: 15px;
`;

export const IconButton = styled.TouchableOpacity`
  width: ${RFPercentage(11)}px;
  height: ${RFPercentage(11)}px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.background_tertiary};
`;

export const PasswordContent = styled.View``;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.text_gray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
`;

export const UserOrEmailPassword = styled.Text`
  color: ${({ theme }) => theme.colors.background_tertiary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(13)}px;
`;
