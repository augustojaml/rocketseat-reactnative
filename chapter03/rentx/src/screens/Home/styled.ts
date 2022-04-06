import { theme } from './../../global/styles/theme';
import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.primary400};
`;

export const ImageSvg = styled.Image`
  width: ${RFValue(98)}px;
  height: ${RFValue(13)}px;
`;
