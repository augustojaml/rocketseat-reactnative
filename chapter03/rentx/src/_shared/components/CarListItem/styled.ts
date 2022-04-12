import { MainCarLabel, MainCarTitle } from './../styled';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  margin-bottom: ${RFPercentage(3)}px;
  padding: 20px;

  flex-direction: row;
  justify-content: space-between;
`;

export const CarInfoWrapper = styled.View`
  flex: 1;
`;

export const CarImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(180)}px;
  height: ${RFValue(92)}px;
`;

export const CarListLabel = styled(MainCarLabel)``;

export const CarLitTitle = styled(MainCarTitle)``;

export const CarInfo = styled.View`
  margin-top: ${RFValue(16)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const CarDaily = styled.View``;

export const CarLitPrice = styled(MainCarTitle)`
  color: ${({ theme }) => theme.colors.main900};
`;
