import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary800};
  padding-top: ${RFValue(96)}px;
`;

export const ConfirmationContent = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ConfirmationTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
  margin-top: ${RFValue(30)}px;
  margin-bottom: ${RFValue(10)}px;
`;

export const ConfirmationSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(24)}px;
  text-align: center;
`;

export const ConfirmationButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary600};
  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(7)}px;
`;

export const ConfirmationButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  text-align: center;
`;
