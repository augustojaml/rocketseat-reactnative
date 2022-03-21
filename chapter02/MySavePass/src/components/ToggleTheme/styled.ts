import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;

  margin-top: 30px;

  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background};

  border-width: ${RFValue(5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.background_tertiary};
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-top: -2px;
`;
