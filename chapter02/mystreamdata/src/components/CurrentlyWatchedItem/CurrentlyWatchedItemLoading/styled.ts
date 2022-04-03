import { rgba } from 'polished';
import { RFValue } from 'react-native-responsive-fontsize';
import { Placeholder, PlaceholderMedia } from 'rn-placeholder';
import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled(Placeholder)`
  width: ${RFValue(140)}px;
  height: ${RFValue(216)}px;
  border-radius: 10px;
  overflow: hidden;
  padding-right: 20px;
  opacity: 0.1;
`;

export const BgImage = styled(PlaceholderMedia).attrs({
  color: rgba(theme.colors.primary800, 1),
})`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;
