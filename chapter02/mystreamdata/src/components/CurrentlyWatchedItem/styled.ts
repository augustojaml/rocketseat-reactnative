import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding-right: 20px;
`;

export const Image = styled.ImageBackground`
  width: ${RFValue(140)}px;
  height: ${RFValue(216)}px;
  border-radius: 10px;
  overflow: hidden;
`;
