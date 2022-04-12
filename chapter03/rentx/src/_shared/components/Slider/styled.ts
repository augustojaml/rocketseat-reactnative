import { rgba } from 'polished';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface StyledProps {
  isBulletActive?: boolean;
  colorBullet: string;
}

export const Container = styled.View`
  width: 100%;
`;

export const SliderContainer = styled.View`
  width: 100%;
  height: ${(Dimensions.get('screen').width * 7) / 16}px;
`;

export const ScrollContent = styled.View`
  width: ${Dimensions.get('screen').width}px;
  height: 100%;
`;

export const SliderImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;

export const BulletContainer = styled.View`
  flex-direction: row;
  justify-content: center;

  position: absolute;
  left: 0;
  right: 0;
  bottom: ${RFValue(-10)}px;
`;

export const Bullet = styled.View<StyledProps>`
  width: ${RFValue(8)}px;
  height: ${RFValue(8)}px;
  border-radius: ${RFValue(4)}px;
  background-color: ${({ isBulletActive, colorBullet }) =>
    isBulletActive ? colorBullet : rgba(colorBullet, 0.5)};
  margin: 0 ${RFValue(3)}px;
`;
