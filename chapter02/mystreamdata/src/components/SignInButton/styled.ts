import { FontAwesome } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: ${theme.colors.primary800};
  height: ${RFValue(56)}px;
  overflow: hidden;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
`;

export const ContainerIcon = styled.TouchableOpacity`
  background-color: ${theme.colors.primary900};
  width: ${RFValue(56)}px;
  height: ${RFValue(56)}px;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(FontAwesome)`
  font-size: ${RFValue(20)}px;
  color: ${theme.colors.text100};
`;

export const ContainerTitle = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(15)}px;
  font-family: ${theme.fonts.medium};
`;
