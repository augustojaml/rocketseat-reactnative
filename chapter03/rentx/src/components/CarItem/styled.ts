import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 24px;
  background: ${({ theme }) => theme.colors.shape};
  margin-bottom: 24px;
`;

export const CarWrapper = styled.View``;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary400};
`;

export const Model = styled.Text`
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary600};
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Rent = styled.View`
  margin-top: 16px;
`;

export const RentPeriod = styled.Text`
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary400};
`;

export const RentPrice = styled.Text`
  font-size: ${RFValue(15)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.main900};
`;

export const CarThumbnail = styled.Image`
  width: ${RFValue(160)}px;
  height: ${RFValue(92)}px;
`;
