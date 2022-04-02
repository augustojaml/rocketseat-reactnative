import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface Props {
  marginTop?: number;
  color?: string;
  size?: number;
}

export const Container = styled.TouchableOpacity<Props>`
  width: 100%;
  background: ${({ theme }) => theme.colors.background_tertiary};
  border-radius: 8px;
  height: ${RFPercentage(9)}px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16)}px;
`;

export const Loading = styled.ActivityIndicator.attrs(
  ({ color, theme, size }) => ({
    color: color ? color : theme.colors.text_light,
    size: size ? size : 20,
  })
)``;
