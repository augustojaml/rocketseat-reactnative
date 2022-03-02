import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  border-radius: ${RFValue(15)}px;
  border-width: ${RFValue(3)}px;
  border-color: ${({ theme }) => theme.colors.text_secondary};
  background: ${({ theme }) => theme.colors.title};
  align-items: center;
  justify-content: center;
  padding: 1px;
  margin-left: 8px;
`;

export const Symbol = styled.Text`
  font-size: ${RFValue(12)}px;
`;
