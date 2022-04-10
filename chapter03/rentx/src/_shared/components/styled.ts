import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface MainHeaderProps {
  background?: string;
}

export const MainHeader = styled.View<MainHeaderProps>`
  width: 100%;
  background-color: ${({ theme, background }) =>
    background ? background : theme.colors.primary500};
  min-height: ${RFPercentage(15)}px;
  padding: ${RFPercentage(3)}px;
`;

export const MainButton = styled.TouchableOpacity`
  width: ${RFValue(24)}px;
  height: ${RFValue(24)}px;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.Text`
  font-size: ${RFValue(30)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const MainTextRegular = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.textRegular};
  color: ${({ theme }) => theme.colors.primary500};
`;

export const MainTextMedium = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary600};
`;
