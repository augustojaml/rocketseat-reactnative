import styled from 'styled-components/native';
import Feather from '@expo/vector-icons/Feather';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Dimensions } from 'react-native';

interface ComponentProps {
  isBulletActive?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Details = styled.View`
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
  color: ${({ theme }) => theme.colors.primary400};
  font-family: ${({ theme }) => theme.fonts.text};
  font-size: ${RFValue(15)}px;
`;

export const ButtonContainer = styled.View`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
`;
