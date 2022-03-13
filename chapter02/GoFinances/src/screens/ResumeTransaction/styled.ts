import { Feather } from '@expo/vector-icons';
import { Dimensions, FlatList, FlatListProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { ICategory } from '../../global/utils/categories';

export interface Props {
  color?: string;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScreenTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const GraphicContainer = styled.View`
  flex: 1;
  padding: 20px 20px 0 20px;
`;

export const ChangeMonthContainer = styled.View`
  width: ${Dimensions.get('window').width}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 999;
  padding: 20px;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.text_secondary};
`;

export const MonthTitle = styled.Text`
  color: ${({ theme }) => theme.colors.text_secondary};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(20)}px;
`;

export const VictoryPieContainer = styled.View`
  width: 100%;
  align-items: center;
`;

export const CategoryFlatList = styled(
  FlatList as unknown as new (
    props: FlatListProps<ICategory>
  ) => FlatList<ICategory>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 10 },
})`
  margin-top: ${RFPercentage(-3)}px;
`;

export const CategoryItem = styled.View<Props>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  margin: 8px 0;
  border-radius: 8px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const CategoryItemTitle = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(20)}px;
`;

export const CategoryItemAmount = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;
