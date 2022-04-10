import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MainTextRegular, MainTitle } from './../../../_shared/components/styled';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const LoginContainer = styled.View`
  width: 100%;
`;

export const LoginTitle = styled(MainTitle)`
  font-size: ${RFValue(40)}px;
  margin-top: ${RFPercentage(5)}px;
  color: ${({ theme }) => theme.colors.primary600};
`;

export const LoginDescription = styled(MainTextRegular)`
  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  margin-top: ${RFValue(64)}px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFValue(56)}px;
  align-items: center;
  justify-content: center;
`;
