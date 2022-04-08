import { rgba } from 'polished';
import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

interface ComponentProps {
  isBulletActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const CarDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Detail = styled.View``;

export const Brand = styled.Text`
  color: ${({ theme }) => theme.colors.primary400};
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
  color: ${({ theme }) => theme.colors.primary400};
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
  color: ${({ theme }) => theme.colors.primary500};
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
