import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface FontsProps {
  color?: string;
  size?: number;
  marginTop?: number;
}

export const MainTitleBold = styled.Text<FontsProps>`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${({ size }) => (size ? size : RFValue(30))}px;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary600)};
  margin-top: ${({ marginTop }) => (marginTop ? RFValue(marginTop) : RFValue(0))}px;
`;

export const MainTitleMedium = styled.Text<FontsProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ size }) => (size ? size : RFValue(24))}px;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary600)};
  margin-top: ${({ marginTop }) => (marginTop ? RFValue(marginTop) : RFValue(0))}px;
`;

export const MainTitleRegular = styled.Text<FontsProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ size }) => (size ? size : RFValue(18))}px;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary600)};
  margin-top: ${({ marginTop }) => (marginTop ? RFValue(marginTop) : RFValue(0))}px;
`;

export const MainTextMedium = styled.Text<FontsProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${({ size }) => (size ? size : RFValue(16))}px;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary500)};
  margin-top: ${({ marginTop }) => (marginTop ? RFValue(marginTop) : RFValue(0))}px;
  line-height: ${RFValue(25)}px;
`;

export const MainTextRegular = styled.Text<FontsProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ size }) => (size ? size : RFValue(16))}px;
  color: ${({ theme, color }) => (color ? color : theme.colors.primary400)};
  margin-top: ${({ marginTop }) => (marginTop ? RFValue(marginTop) : RFValue(0))}px;
  line-height: ${RFValue(25)}px;
`;
