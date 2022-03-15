import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
`;

export const Profile = styled.View`
  flex-direction: row;
`;

export const ProfileImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  margin-right: 10px;
`;

export const ProfileWrapper = styled.View``;

export const GreetingUser = styled.View`
  flex-direction: row;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  margin-right: 5px;
  margin-top: 1px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_light};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text_gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${RFValue(20)}px;
`;

export const PlusButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text_gray};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  margin-top: ${RFPercentage(-7)}px;
`;
