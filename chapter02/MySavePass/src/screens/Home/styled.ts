import { Feather } from '@expo/vector-icons';
import { FlatList, FlatListProps } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { IPassword } from '../../hooks/usePass';

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

export const PowerIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.danger};
  font-size: ${RFValue(20)}px;
`;

export const PowerButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.danger};
`;

export const Content = styled.View`
  flex: 1;
  padding: 20px;
  margin-top: ${RFPercentage(-7)}px;
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

export const HomeLoading = styled.ActivityIndicator.attrs(({ color, theme, size }) => ({
  color: color ? color : theme.colors.text_light,
  size: size ? size : 20,
}))`
  padding: 50px 0;
`;

export const NewRegister = styled.TouchableOpacity`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  border-radius: ${RFValue(30)}px;
  background: ${({ theme }) => theme.colors.background_tertiary};
  position: absolute;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
`;

export const IconNew = styled(Feather)`
  color: ${({ theme }) => theme.colors.text_gray};
  font-size: ${RFValue(30)}px;
`;

export const CategoryFlatList = styled(
  FlatList as unknown as new (props: FlatListProps<IPassword>) => FlatList<IPassword>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 10 },
})``;
