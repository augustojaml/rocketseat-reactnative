import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container, ContainerIcon, ContainerTitle, Icon, Title } from './styled';

interface SignInButtonProps extends TouchableOpacityProps {
  title?: string;
}

export function SignInButton({ title = 'button', ...rest }: SignInButtonProps) {
  return (
    <>
      <Container activeOpacity={0.8} {...rest}>
        <ContainerIcon>
          <Icon name="twitch" />
        </ContainerIcon>
        <ContainerTitle>
          <Title>{title}</Title>
        </ContainerTitle>
      </Container>
    </>
  );
}
