import { rgba } from 'polished';
import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

interface ComponentProps {
  isBulletActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 20px;
  padding-top: ${RFPercentage(5)}px;
  padding-bottom: ${RFPercentage(5)}px;
  background: ${({ theme }) => theme.colors.primary800};
`;

export const HeaderWrapper = styled.View``;

export const IconButton = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  justify-content: center;
`;

export const BackIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
  margin-left: -8px;
`;

export const HeaderTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
  line-height: 45px;
  margin-top: 20px;
`;

export const HeaderSubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
  line-height: ${RFValue(24)}px;
  margin-top: 20px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  padding-bottom: 0;
`;

export const ContentTitleWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const ContentTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary500};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const ContentCount = styled.Text`
  color: ${({ theme }) => theme.colors.primary500};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
`;
