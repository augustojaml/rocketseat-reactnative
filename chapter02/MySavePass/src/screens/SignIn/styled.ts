import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(75)}px;
  background: ${({ theme }) => theme.colors.background_secondary};
  align-items: center;
  justify-content: center;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(25)}px;
  text-align: center;
`;

export const Image = styled.Image`
  margin: 30px;
`;

export const HeaderSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  align-items: center;
`;

export const Footer = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const FooterWrapper = styled.View`
  margin-top: ${RFPercentage(-5)}px;
`;

export const Title = styled.Text``;
