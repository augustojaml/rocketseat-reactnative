import { Feather } from '@expo/vector-icons';
import { FlatList, FlatListProps } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { IPassword } from '../../hooks/usePass';
export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.background_secondary};
  height: ${RFPercentage(25)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0 20px;
  padding-bottom: ${RFPercentage(6)}px;
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

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.background_tertiary};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
`;

export const Info = styled.Text`
  color: ${({ theme }) => theme.colors.text_gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const PassWrapper = styled.View`
  flex: 1;
  margin-top: ${-RFPercentage(4)}px;
  padding: 0 20px;
  padding-bottom: 20px;
`;

export const NewPassButton = styled.TouchableOpacity`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;
  background: ${({ theme }) => theme.colors.background_tertiary};
  position: absolute;
  bottom: ${RFPercentage(3.5)}px;
  right: ${RFPercentage(3.5)}px;
  align-items: center;
  justify-content: center;
`;

export const NewPassIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${RFValue(30)}px;
`;

export const ListTitleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFPercentage(3)}px;
  align-items: center;
`;
export const ListTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_gray};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16)}px;
`;
export const ListTotal = styled.Text`
  color: ${({ theme }) => theme.colors.text_gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const PasswordsList = styled(
  FlatList as unknown as new (props: FlatListProps<IPassword>) => FlatList<IPassword>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 10 },
})`
  margin-top: 20px;
`;
