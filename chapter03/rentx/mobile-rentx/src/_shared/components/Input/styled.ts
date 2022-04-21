import { TextInput } from 'react-native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${RFPercentage(8)}px;
  background: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(8)}px;

  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.main900 : theme.colors.shape};
  margin-bottom: ${RFValue(10)}px;
`;

export const IconContainer = styled.View`
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px;
  align-items: center;
  justify-content: center;

  border-style: solid;
  border-right-width: 2px;
  border-right-color: ${({ theme }) => theme.colors.background};
`;

export const CustomInput = styled(TextInput)`
  flex: 1;
  padding: 0 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(15)}px;
`;

export const ButtonIconContainer = styled.TouchableOpacity`
  width: ${RFPercentage(8)}px;
  height: ${RFPercentage(8)}px;
  align-items: center;
  justify-content: center;
`;
