import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

const toggleHeight = 35;

export const Container = styled.TouchableOpacity`
  width: ${RFValue(toggleHeight)}px;
  height: ${RFValue(toggleHeight)}px;
  border-radius: ${RFValue(toggleHeight / 2)}px;
  background: ${({ theme }) => theme.colors.primary800};

  border-style: solid;
  border-width: ${RFValue(3)}px;
  border-color: ${({ theme }) => theme.colors.primary500};

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;
