import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const PlusButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text_gray};
  margin-right: 20px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${RFValue(20)}px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_gray};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;

export const Form = styled.View`
  flex: 1;
  padding: 20px;
`;
