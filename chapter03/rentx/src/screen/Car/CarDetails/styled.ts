import { MainCarLabel, MainCarTitle, MainTextRegular } from './../../../_shared/components/styled';
import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const CarDetail = styled.View`
  padding: ${RFPercentage(3)}px;
`;

export const CarInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const CarInfo = styled.View``;

export const CarInfoLabel = styled(MainCarLabel)``;

export const CarInfoTitle = styled(MainCarTitle)`
  font-size: ${RFValue(25)}px;
`;

export const CarInfoPrice = styled(MainCarTitle)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.main900};
`;

export const Accessories = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 16px 0;
`;

export const Accessory = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  width: ${RFValue(105)}px;
  height: ${RFValue(86)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

export const AccessoryName = styled(MainTextRegular)`
  font-size: ${RFValue(13)}px;
  margin-top: ${RFValue(18)}px;
`;

export const CarDescription = styled(MainTextRegular)`
  font-size: ${RFValue(13)}px;
`;
