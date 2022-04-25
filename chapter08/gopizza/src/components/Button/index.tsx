import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title, Load, TypeProps } from './styled';

type Props = TouchableOpacityProps & {
  title: string;
  type?: TypeProps;
  isLoading?: boolean;
};

export function Button({ title, type = 'primary', isLoading = false, ...rest }: Props) {
  return (
    <Container type={type} disabled={isLoading} {...rest} activeOpacity={0.7}>
      {isLoading ? <Load /> : <Title>{title}</Title>}
    </Container>
  );
}
