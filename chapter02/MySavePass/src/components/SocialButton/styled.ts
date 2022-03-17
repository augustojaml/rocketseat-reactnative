import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background_tertiary};
  height: ${RFPercentage(10)}px;
  border-radius: 8px;
`;

export const Image = styled.Image`
  width: ${RFValue(25)}px;
  height: ${RFValue(25)}px;
  margin-top: -5px;
  margin-right: 10px;
`;

export const Loading = styled.ActivityIndicator.attrs(({ color, theme, size }) => ({
  color: color ? color : theme.colors.text_light,
  size: size ? size : 20,
}))``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;
