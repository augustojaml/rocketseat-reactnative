import styled from 'styled-components/native';

interface StyledProps {
  borderColor?: string;
}

export const Container = styled.TouchableOpacity<StyledProps>`
  width: 50px;
  height: 50px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme, borderColor }) =>
    borderColor ? borderColor : theme.colors.text_light};
`;
