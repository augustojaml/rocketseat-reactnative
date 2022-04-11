import { MainTitle } from './../../../_shared/components/styled';
import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';

interface StyledProps {
  showForm?: 'data' | 'pass';
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProfileHeader = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary800};
  min-height: ${RFPercentage(26)}px;
  padding: ${RFPercentage(3)}px;
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFPercentage(4)}px;
`;

export const ProfileTitle = styled(MainTitle)`
  font-size: ${RFValue(25)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ProfileImageContent = styled.View`
  justify-content: space-between;
  align-items: center;
  margin-top: ${-RFPercentage(11)}px;
`;

export const ProfileImageWrapper = styled.View`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
`;

export const ProfileImage = styled.Image`
  width: ${RFValue(150)}px;
  height: ${RFValue(150)}px;
  border-radius: ${RFValue(75)}px;
`;

export const CamButton = styled.TouchableOpacity`
  width: ${RFValue(40)}px;
  height: ${RFValue(40)}px;
  background: ${({ theme }) => theme.colors.main900};
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: 0;
  bottom: 0;
`;

export const Form = styled.View`
  margin-top: ${RFValue(10)}px;
`;

export const FormHeader = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-bottom: ${RFValue(20)}px;
`;

export const ProfileButton = styled.TouchableOpacity``;

export const ProfileInfo = styled.Text<StyledProps>`
  color: ${({ theme, showForm }) =>
    showForm === 'data' ? theme.colors.primary600 : theme.colors.primary400};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;

  padding-bottom: 10px;
  margin-right: 15px;

  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, showForm }) =>
    showForm === 'data' ? theme.colors.main900 : theme.colors.background};
`;

export const ProfilePass = styled.Text<StyledProps>`
  color: ${({ theme, showForm }) =>
    showForm === 'pass' ? theme.colors.primary600 : theme.colors.primary400};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
  padding-bottom: 10px;
  margin-left: 15px;

  border-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: ${({ theme, showForm }) =>
    showForm === 'pass' ? theme.colors.main900 : theme.colors.background};
`;

export const FormData = styled.View``;

export const FormPass = styled.View``;
