import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const StepTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary600};
`;

export const Form = styled.View`
  margin-top: ${RFValue(64)}px;
`;
