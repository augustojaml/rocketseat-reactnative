import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface StyledProps {
  alignItems?: 'flex-start' | 'flex-end' | 'center';
}

export const Container = styled.TouchableOpacity<StyledProps>`
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: center;
`;

export const Title = styled.Text``;
