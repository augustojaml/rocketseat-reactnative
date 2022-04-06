import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;
  background-color: ${({ theme }) => theme.colors.primary800};

  padding: 0 20px;
  justify-content: flex-end;
  padding-bottom: 15px;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CountCar = styled.Text`
  color: ${({ theme }) => theme.colors.primary400};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
`;
