import { rgba } from 'polished';
import { RFValue } from 'react-native-responsive-fontsize';
import { Placeholder, PlaceholderLine, PlaceholderMedia } from 'rn-placeholder';
import styled from 'styled-components/native';
import { theme } from '../../../theme';

export const Container = styled(Placeholder)`
  width: ${RFValue(260)}px;
  height: 220px;
  margin-right: 20px;
  overflow: hidden;
  opacity: 0.1;
`;

export const BgImage = styled(PlaceholderMedia).attrs({
  color: rgba(theme.colors.primary800, 1),
})`
  width: 100%;
  height: ${(300 * 10) / 19}px;
  border-radius: 16px;
`;

export const ProfileWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;

export const ProfileAvatar = styled(PlaceholderMedia).attrs({
  color: rgba(theme.colors.primary800, 1),
})`
  width: 40px;
  height: 40px;
  border-radius: 30px;
`;

export const ProfileInfo = styled.View`
  flex: 1;
  margin-left: 15px;
  align-items: center;
  justify-content: center;
`;

export const PlaceholderDescription = styled(PlaceholderLine).attrs({
  color: rgba(theme.colors.primary800, 1),
})`
  margin: 0;
  margin-bottom: 8px;
  padding: 0;
  height: 18px;
`;

export const PlaceholderName = styled(PlaceholderLine).attrs({
  color: rgba(theme.colors.primary800, 1),
})`
  margin: 0;
  padding: 0;
  height: 13px;
`;
