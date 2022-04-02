import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: ${RFPercentage(18)}px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  padding: 0 20px;
  padding-bottom: ${RFPercentage(3)}px;
  z-index: 9999;
`;

export const PageHeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const PageHeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(18)}px;
  margin-left: 20px;
`;

export const Form = styled.View`
  flex: 1;
  padding: 20px;
`;
