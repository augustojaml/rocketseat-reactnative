import { Dimensions } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Accessory = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${(Dimensions.get('screen').width - RFPercentage(9)) / 3}px;
  height: ${RFPercentage(12)}px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
`;
