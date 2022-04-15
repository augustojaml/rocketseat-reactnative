import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

interface IMainHeaderProps {
  background?: string;
}

interface IMainScrollViewProps {
  background?: string;
}

interface IMainForm {
  marginTop?: number;
}

export const MainScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingHorizontal: RFPercentage(3),
    paddingBottom: 10,
    paddingTop: 10,
  },
  bounces: false,
  showsVerticalScrollIndicator: false,
})<IMainScrollViewProps>`
  background-color: ${({ theme, background }) =>
    background ? background : theme.colors.background};
`;

export const MainHeader = styled.View<IMainHeaderProps>`
  width: 100%;
  background-color: ${({ theme, background }) =>
    background ? background : theme.colors.background};
  min-height: ${RFPercentage(15)}px;
  padding: ${RFPercentage(3)}px ${RFPercentage(3)}px ${RFPercentage(2)}px ${RFPercentage(3)}px;
  justify-content: flex-end;
`;

export const MainForm = styled.View<IMainForm>`
  width: 100%;
  margin-top: ${({ marginTop }) => (marginTop ? RFValue(marginTop) : 0)}px;
`;
