import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CarScheduleInfo = styled.View`
  background-color: ${({ theme }) => theme.colors.primary800};
  padding: 0 ${RFPercentage(3)}px;
`;

export const CarScheduleDateWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: ${RFValue(28)}px 0;
`;

interface CarScheduleDateValueProps {
  hiddenBorder?: boolean;
}

export const CarScheduleDateValue = styled.View<CarScheduleDateValueProps>`
  flex: 1;
  justify-content: space-between;
  height: ${RFValue(45)}px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, hiddenBorder }) =>
    hiddenBorder ? theme.colors.primary400 : theme.colors.primary800};
`;

export const CarScheduleLabel = styled.Text`
  font-size: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.primary400};
  text-transform: uppercase;
`;

export const Title = styled.Text``;
