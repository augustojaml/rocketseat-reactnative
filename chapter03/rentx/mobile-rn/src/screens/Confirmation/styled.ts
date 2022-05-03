import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary800};
  align-items: center;
`;

interface OkButtonProps {
  background?: string;
}

export const OkButton = styled.TouchableOpacity<OkButtonProps>`
  width: ${RFValue(80)}px;
  height: ${RFPercentage(8)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, background }) =>
    background ? background : theme.colors.primary600};

  margin-top: ${RFPercentage(10)}px;
`;
