import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Text } from 'react-native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(70)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  padding: 0 ${RFPercentage(5)}px;
`;

export const SocialContainer = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled(Text)`
  text-align: center;
  margin-top: 40px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
`;

export const SocialWrapper = styled.View`
  width: 100%;
  padding: 0 ${RFPercentage(3)}px;
  margin-top: ${RFPercentage(-4)}px;
`;
