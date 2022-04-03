import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export const IconContainer = styled.TouchableOpacity``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${theme.colors.text100};
`;
