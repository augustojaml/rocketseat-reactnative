import { rgba } from 'polished';
import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from 'react-native-responsive-fontsize';

interface ComponentProps {
  isBulletActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.View``;

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.primary500};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.primary800};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(25)}px;
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  color: ${({ theme }) => theme.colors.primary500};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(10)}px;
  text-transform: uppercase;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.main900};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(25)}px;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.primary400};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(15)}px;
  margin-bottom: 90px;
`;

export const ButtonContainer = styled.View`
  background-color: ${({ theme }) => rgba(theme.colors.shape, 0.5)};
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
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

export const AccessoryName = styled.Text`
  color: ${({ theme }) => theme.colors.primary500};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(13)}px;
  margin-top: 8px;
`;

export const RentalPeriod = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-style: solid;
  border-bottom-width: 0.6px;
  padding-bottom: 20px;
  border-bottom-color: ${({ theme }) => theme.colors.primary400};
  margin-bottom: 20px;
`;

export const CalendarIconContainer = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  background-color: ${({ theme }) => theme.colors.main900};
  align-items: center;
  justify-content: center;
`;

export const PeriodContainer = styled.View<ComponentProps>`
  flex: 1;
  justify-content: center;
  padding-left: 20px;
`;

export const PeriodText = styled.Text`
  color: ${({ theme }) => theme.colors.primary500};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const PeriodDate = styled.Text`
  color: ${({ theme }) => theme.colors.primary600};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
`;

export const PeriodIconContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const PeriodIcon = styled(Feather)`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.primary600};
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalInfoContent = styled.View``;

export const TotalValueContent = styled.View``;

export const TotalInfoLabel = styled.Text`
  color: ${({ theme }) => theme.colors.primary500};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const TotalInfoValue = styled.Text`
  color: ${({ theme }) => theme.colors.primary600};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
`;
export const TotalValue = styled.Text`
  color: ${({ theme }) => theme.colors.secondary900};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(24)}px;
`;
