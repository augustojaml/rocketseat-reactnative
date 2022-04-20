import { rgba } from 'polished';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ProfileHeader = styled.View`
  padding: ${RFPercentage(5)}px ${RFPercentage(3)}px;

  background-color: ${({ theme }) => theme.colors.primary800};
  height: ${RFPercentage(25)}px;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const profileHeight = 26;

export const ProfileUserPhotoContainer = styled.View`
  width: 100%;
  height: ${RFPercentage(profileHeight)}px;
  align-items: center;
  justify-content: center;
  margin-top: ${-RFPercentage(profileHeight / 2)}px;
`;

export const ProfileUserPhotoWrapper = styled.View`
  width: ${RFPercentage(profileHeight)}px;
  height: ${RFPercentage(profileHeight)}px;
  align-items: center;
  justify-content: center;
`;

export const ProfileImage = styled.Image`
  width: ${RFPercentage(profileHeight)}px;
  height: ${RFPercentage(profileHeight)}px;
  border-radius: ${RFPercentage(profileHeight / 2)}px;
`;

export const ProfileToggleFormWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => rgba(theme.colors.primary400, 0.3)};
  margin-bottom: ${RFPercentage(3)}px;
`;

interface ProfileToggleFormProps {
  isActive?: boolean;
}

export const ProfileToggleForm = styled.TouchableOpacity<ProfileToggleFormProps>`
  height: ${RFPercentage(8)}px;
  justify-content: center;
  align-items: center;
  border-style: solid;
  border-bottom-width: 3px;
  border-bottom-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.main900 : theme.colors.background};
`;

export const FormData = styled.View`
  width: 100%;
`;

export const FormPass = styled.View`
  width: 100%;
`;
