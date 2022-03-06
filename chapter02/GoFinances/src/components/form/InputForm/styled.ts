import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  width: 100%;
`;

export const ErrorContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: -5px;
  margin-bottom: 7px;
  height: 20px;
`;

export const ErrorIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.attention};
  margin-right: 5px;
`;

export const ErrorText = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.attention};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-style: italic;
`;
