import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ContainerProps {
  isFocused?: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  flex-direction: row;
  background: ${({ theme }) => theme.colors.shape};
  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, isFocused }) =>
    isFocused ? theme.colors.main900 : theme.colors.shape};
  margin-bottom: ${RFValue(10)}px;
`;

export const IconContainer = styled.View`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  align-items: center;
  justify-content: center;

  border-style: solid;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.background};
`;

export const CustomInput = styled.TextInput`
  flex: 1;
  padding: 0 20px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const IconContainerButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;

  align-items: center;
  justify-content: center;
`;
