import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.title};
`;
