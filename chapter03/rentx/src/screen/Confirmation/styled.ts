import { MainTitle, MainTextRegular, MainButtonTitle } from './../../_shared/components/styled';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { LogolargeSvg } from '../../_shared/utils/images';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primary800};
  padding-top: ${RFPercentage(10)}px;
  align-items: center;
`;

export const LogoLarge = styled(LogolargeSvg)`
  margin-bottom: ${RFPercentage(5)}px;
`;

export const ConfirmationTitle = styled(MainTitle)`
  margin-top: ${RFPercentage(5)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ConfirmationDescription = styled(MainTextRegular)`
  margin-top: ${RFPercentage(1)}px;
  color: ${({ theme }) => theme.colors.primary400};
  text-align: center;
`;

export const ConfirmationButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary600};
  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${RFPercentage(7)}px;
`;

export const ConfirmationButtonTitle = styled(MainButtonTitle)`
  color: ${({ theme }) => theme.colors.shape};
`;
