import { Feather } from '@expo/vector-icons';
import { rgba } from 'polished';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface ComponentProps {
  showBorder?: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 0 20px;
  padding-top: ${RFPercentage(5)}px;
  background: ${({ theme }) => theme.colors.primary800};
`;

export const HeaderWrapper = styled.View``;

export const IconButton = styled.TouchableOpacity`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  justify-content: center;
`;

export const BackIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(24)}px;
  margin-left: -8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
  line-height: 45px;
`;

export const PeriodWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  height: ${RFValue(50)}px;
  margin-bottom: 20px;
`;

export const Period = styled.View<ComponentProps>`
  flex: 1;
  justify-content: space-around;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme, showBorder }) =>
    showBorder ? theme.colors.primary800 : theme.colors.primary500};
`;

export const PeriodText = styled.Text`
  color: ${({ theme }) => theme.colors.primary500};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const PeriodDate = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(15)}px;
`;

export const ArrowContainer = styled.View`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.View`
  background-color: ${({ theme }) => rgba(theme.colors.shape, 0.5)};
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
`;
