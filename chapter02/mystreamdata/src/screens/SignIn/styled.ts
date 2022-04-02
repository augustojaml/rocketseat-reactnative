import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from './../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.secondary900};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(60)}px;
  background-color: ${theme.colors.primary800};
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.View`
  padding: ${RFValue(30)}px;
  justify-content: space-around;
  flex: 1;
`;

export const FooterHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StreamDataImage = styled.Image`
  width: ${RFValue(98)}px;
  height: ${RFValue(13)}px;
`;

export const StreamBy = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(15)}px;
  font-family: ${theme.fonts.regular};
`;

export const FooterTile = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(25)}px;
  font-family: ${theme.fonts.bold};
`;
