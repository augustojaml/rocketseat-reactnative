import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ComponentProps {
  isBulletActive?: boolean;
}

const sliderHeight = (Dimensions.get('screen').width * 4) / 16;

export const Container = styled.View`
  width: 100%;
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(13)}px;
  justify-content: flex-end;
  padding: 0 20px;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BackIconButton = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  justify-content: center;
`;

export const BackIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.primary800};
  font-size: ${RFValue(24)}px;
  margin-left: -10px;
`;

export const BulletContainer = styled.View`
  flex-direction: row;
`;

export const Bullet = styled.View<ComponentProps>`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;
  background: ${({ theme, isBulletActive }) =>
    isBulletActive ? theme.colors.primary600 : theme.colors.primary500};
  margin-left: ${RFValue(8)}px;
`;

export const ScrollContainer = styled.View`
  width: 100%;
  height: ${sliderHeight}px;
  align-items: center;
  justify-content: center;
`;

export const ScrollItem = styled.View`
  width: ${Dimensions.get('screen').width}px;
  height: ${sliderHeight}px;
  align-items: center;
  justify-content: center;
`;

export const ScrollImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(200)}px;
  height: ${RFValue(100)}px;
`;
