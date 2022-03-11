import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { FlatList, FlatListProps } from 'react-native';
import { ICategory } from '../../global/utils/categories';
import { rgba } from 'polished';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ScreenTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const FormContainer = styled.View`
  flex: 1;
  padding: 20px;
`;

export const FormInputText = styled.View`
  flex: 1;
`;

export const TransactionTypeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const FormFooter = styled.View``;

export const ModalTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const CategoryFlatList = styled(
  FlatList as unknown as new (
    props: FlatListProps<ICategory>
  ) => FlatList<ICategory>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 10 },
})``;

interface ModalProps {
  color?: string | any;
  active?: boolean;
}

export const CategoryModalContainer = styled(RectButton)<ModalProps>`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  background: ${({ color, theme, active }) =>
    active ? rgba(color, 0.7) : rgba(color, 0.05)};
`;

export const CategoryModalIcon = styled(Feather)<ModalProps>`
  font-size: ${RFValue(26)}px;
  color: ${({ color, active, theme }) => (active ? theme.colors.shape : color)};
  margin-right: 10px;
  margin-top: -5px;
`;

export const CategoryModalTitle = styled.Text<ModalProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ color, active, theme }) => (active ? theme.colors.shape : color)};
  font-size: ${RFValue(14)}px;
`;

export const SeparatorModal = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.title};
`;

export const FooterModal = styled.View`
  padding: 20px;
`;
