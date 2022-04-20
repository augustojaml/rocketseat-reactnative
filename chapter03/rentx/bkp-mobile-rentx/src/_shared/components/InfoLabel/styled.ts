import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MainTitleMedium } from './../fonts';

interface InfoTextValueProps {
  valueColor?: string;
  valueSize?: number;
}

export const Container = styled.View``;

export const InfoTextLabel = styled(MainTitleMedium)`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.primary400};
  text-transform: uppercase;
`;

export const InfoTextValue = styled(MainTitleMedium)<InfoTextValueProps>`
  font-size: ${({ valueSize }) => (valueSize ? valueSize : RFValue(15))}px;
  color: ${({ theme, valueColor }) => (valueColor ? valueColor : theme.colors.primary600)};
`;
