import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SliderContainer = styled.View`
  width: 100%;
  height: ${(Dimensions.get('screen').width * 6) / 16}px;
`;

export const ScrollContent = styled.View`
  width: ${Dimensions.get('screen').width}px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const SliderImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 100%;
  height: 100%;
`;
