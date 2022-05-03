import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(20)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.View`
  flex: 1;
`;

export const InfoWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;

export const ContentImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${RFValue(180)}px;
  height: ${RFValue(92)}px;
`;

export const CarAppointmentsItemDateWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
  padding: ${RFValue(10)}px ${RFValue(20)}px;

  border-style: solid;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text``;
