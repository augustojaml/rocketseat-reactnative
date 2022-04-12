import { MainTextRegular } from './../../../_shared/components/styled';
import styled from 'styled-components/native';

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

export const InfoTotalCar = styled(MainTextRegular)`
  color: ${({ theme }) => theme.colors.primary500};
`;

export const ContentLoading = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
