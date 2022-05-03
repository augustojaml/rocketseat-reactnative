import { rgba } from 'polished';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ComponentProps extends TouchableOpacityProps {
  background?: string;
  isActive?: boolean;
  marginTop?: number;
}

export const Container = styled.TouchableOpacity<ComponentProps>`
  width: 100%;
  background-color: ${({ background, isActive }) =>
    isActive ? background : rgba(background!, 0.7)};
  height: ${RFValue(56)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : 0)}px;
`;
