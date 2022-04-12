import { rgba } from 'polished';
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

export const MainButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary600};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
`;

export const MainStepTitle = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary600};
`;

export const MainCarLabel = styled.Text`
  font-size: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary400};
`;

export const MainCarTitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary600};
`;

export const MainAbsoluteButtonContainer = styled.View`
  background-color: ${({ theme }) => rgba(theme.colors.shape, 0.5)};
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
`;
