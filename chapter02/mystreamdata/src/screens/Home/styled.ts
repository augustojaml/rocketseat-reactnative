import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { theme } from '../../theme';

export const Container = styled.View`
  flex: 1;
  background-color: ${theme.colors.secondary900};
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(15)}px;
  background-color: ${theme.colors.primary800};
  justify-content: flex-end;
  padding: 0 20px;
  padding-bottom: ${RFValue(10)}px;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProfileContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 5px;
  margin-right: 20px;
`;

export const ProfileInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Greeting = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(20)}px;
  font-family: ${theme.fonts.regular};
`;

export const ProfileName = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(20)}px;
  font-family: ${theme.fonts.bold};
`;

export const FollowContainer = styled.View`
  padding: 10px 20px;
  padding-top: 10px;
`;

export const FollowTitle = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(20)}px;
  font-family: ${theme.fonts.bold};
  margin-top: 10px;
`;

export const CurrentlyWatchedContainer = styled.View`
  padding: 20px;
`;

export const CurrentlyWatchedTitle = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(20)}px;
  font-family: ${theme.fonts.bold};
`;

export const CurrentlyVersion = styled.Text`
  color: ${theme.colors.text100};
  font-size: ${RFValue(10)}px;
  font-family: ${theme.fonts.regular};
  padding-bottom: 20px;
  text-align: center;
  width: 100%;
`;
