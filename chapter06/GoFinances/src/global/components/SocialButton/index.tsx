import React from 'react';
import { Text } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { Container, Title } from './styled';

interface ISocialButton extends RectButtonProps {
  title: string;
  svg: React.FC<SvgProps>;
}

export function SocialButton({ title, svg: Svg, ...rest }: ISocialButton) {
  return (
    <>
      <Container {...rest}>
        <Svg />
        <Title>{title}</Title>
      </Container>
    </>
  );
}
