import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MainStepTitle } from '../../../../_shared/components/styled';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const HeaderWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  align-items: flex-end;
`;

const stepBulletSize = 8;

interface BulletProps {
  isActive?: boolean;
}

export const StepsContainer = styled.View`
  flex-direction: row;
`;

export const StepsBullet = styled.View<BulletProps>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary600 : theme.colors.primary400};
  width: ${stepBulletSize}px;
  height: ${stepBulletSize}px;
  border-radius: ${stepBulletSize / 2}px;
  margin: ${stepBulletSize / 2}px;
`;

export const StepTitle = styled(MainStepTitle)``;

export const Form = styled.View`
  margin-top: ${RFValue(64)}px;
`;
