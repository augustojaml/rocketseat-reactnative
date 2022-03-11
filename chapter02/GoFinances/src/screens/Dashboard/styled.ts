import { FlatListProps, Image, Text } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import styled from 'styled-components/native';
import { BorderlessButton, FlatList } from 'react-native-gesture-handler';
import { ITransaction } from '../../global/components/TransactionDetail';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Wrapper = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${RFPercentage(8)}px;
`;

export const User = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const UserImage = styled(Image)`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
  margin-right: 18px;
`;
export const UserInfo = styled.View`
  justify-content: center;
`;

export const Greeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
  margin-top: -7px;
`;

export const IconBorderlessButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.attention};
  font-size: ${RFValue(24)}px;
`;

export const ScrollViewContainer = styled.View`
  width: 100%;
  margin-top: ${RFPercentage(-10)}px;
`;

export const CardScrollView = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 20 },
})`
  width: 100%;
`;

export const FlatListContainer = styled.View`
  flex: 1;
  padding: 30px 20px 0 20px;
`;

export const ListTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-bottom: 10px;
`;

export const TransactionDetailFlatList = styled(
  FlatList as unknown as new (
    props: FlatListProps<ITransaction>
  ) => FlatList<ITransaction>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 10 },
})``;
