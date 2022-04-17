import { rgba } from 'polished';
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

interface BulletProps {
  background?: string;
  size?: number;
  isActive?: boolean;
}

export const BulletContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BulletItem = styled.View<BulletProps>`
  width: ${({ size }) => (size ? size : 8)}px;
  height: ${({ size }) => (size ? size : 8)}px;
  border-radius: ${({ size }) => (size ? size / 2 : 8 / 2)}px;
  background: ${({ theme, background, isActive }) =>
    background
      ? rgba(background, isActive ? 1 : 0.5)
      : rgba(theme.colors.primary600, isActive ? 1 : 0.5)};

  margin: ${({ size }) => (size ? size / 4 : 8 / 4)}px;
`;

interface IMainSpaceHeightProps {
  background?: string;
  height?: number;
}

export const MainSpaceHeight = styled.View<IMainSpaceHeightProps>`
  height: ${({ height }) => (height ? RFPercentage(height) : RFPercentage(20))}px;
  background: ${({ background }) => (background ? background : 'transparent')};
`;

interface IMainAbsoluteButtonCont {
  background?: string;
}

export const MainAbsoluteButtonContainer = styled.View<IMainAbsoluteButtonCont>`
  background-color: ${({ theme, background }) =>
    background ? rgba(background, 0.5) : rgba(theme.colors.shape, 0.5)};
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 20px;
`;
