import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';
import { Container, ContainerIcon, ContainerTitle, Icon, Title } from './styled';

interface SignInButtonProps extends TouchableOpacityProps {
  title?: string;
  isLoading?: boolean;
}

export function SignInButton({ title = 'button', isLoading = false, ...rest }: SignInButtonProps) {
  return (
    <>
      <Container activeOpacity={0.8} {...rest}>
        <ContainerIcon>
          <Icon name="twitch" />
        </ContainerIcon>
        <ContainerTitle>
          {isLoading ? (
            <ActivityIndicator size={RFValue(30)} color={theme.colors.text100} />
          ) : (
            <Title>{title}</Title>
          )}
        </ContainerTitle>
      </Container>
    </>
  );
}
