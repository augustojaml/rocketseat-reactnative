import { rgba } from 'polished';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ComponentProps extends TouchableOpacityProps {
  background?: string;
  isActive?: boolean;
}

export const Container = styled.TouchableOpacity<ComponentProps>`
  width: 100%;
  background-color: ${({ background, isActive }) =>
    isActive ? background : rgba(background, 0.7)};
  height: ${RFValue(56)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
`;
