import { rgba } from 'polished';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.TouchableOpacity`
  margin-right: 20px;
`;

export const FollowThumbnailContainer = styled.View`
  width: ${RFValue(260)}px;
  height: ${RFValue(144)}px;
  border-radius: 10px;
  overflow: hidden;
`;

export const FollowBanner = styled.Image`
  width: 100%;
  height: 100%;
`;

export const FollowOverlay = styled.View`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background: ${rgba(theme.colors.secondary900, 0.6)};
  position: absolute;
  top: 0;
  left: 0;
  justify-content: flex-end;
  padding: 12px;
`;

export const FollowSpectators = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(15)}px;
  font-family: ${theme.fonts.bold};
`;

export const FollowProfile = styled.View`
  flex-direction: row;
  margin-top: 17px;
`;

export const FollowAvatar = styled.Image`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  border-radius: ${RFValue(20)}px;
`;

export const FollowInfo = styled.View`
  justify-content: center;
  margin-left: 16px;
`;

export const FollowTitle = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(15)}px;
  font-family: ${theme.fonts.bold};
`;

export const FollowName = styled.Text`
  color: ${rgba(theme.colors.text100, 0.7)};
  font-size: ${RFValue(13)}px;
  font-family: ${theme.fonts.regular};
`;
