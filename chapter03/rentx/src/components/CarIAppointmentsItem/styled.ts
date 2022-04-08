import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: ${({ theme }) => theme.colors.shape};
  margin-bottom: 24px;
`;

export const CarInfo = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 20px;
`;

export const CarWrapper = styled.View`
  flex: 1;
`;

export const Brand = styled.Text`
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary500};
`;

export const Model = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary600};
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding-right: ${RFValue(30)}px;
`;

export const Rent = styled.View`
  margin-top: 16px;
`;

export const RentPeriod = styled.Text`
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary500};
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

export const CarPeriod = styled.View`
  padding: 10px 20px;
  border-top-width: 1px;
  border-style: solid;
  border-top-color: ${({ theme }) => theme.colors.background};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CarPeriodLabel = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary400};
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const CardPeriodContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const CardPeriodDate = styled.Text`
  font-size: ${RFValue(13)}px;
  color: ${({ theme }) => theme.colors.primary600};
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const CardPeriodIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.primary400};
  padding: 0 10px;
`;
