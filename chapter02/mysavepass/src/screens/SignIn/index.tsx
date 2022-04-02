import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTheme } from 'styled-components';
import { LogoLightPng, LogoPng } from '../../assets/images';
import { SocialButton } from '../../components/SocialButton';
import { ToggleTheme } from '../../components/ToggleTheme';
import { useAuth } from '../../hooks/useAuth';
import { Container, Footer, FooterWrapper, Header, Image, SubTitle, Title } from './styled';

export function SignIn() {
  const { signInGoogle, isLoadingLogin } = useAuth();
  const theme = useTheme();
  return (
    <>
      <StatusBar style="light" />

      <Container>
        <Header>
          <ToggleTheme />
          <Title>
            Gerencie suas{`\n`}senhas de{`\n`}forma segura
          </Title>
          {theme.theme === 'dark' ? <Image source={LogoPng} /> : <Image source={LogoLightPng} />}
          <SubTitle>Faça seu login</SubTitle>
        </Header>
        <Footer>
          <FooterWrapper>
            <SocialButton
              title="Entrar com Google"
              isLoading={isLoadingLogin}
              onPress={signInGoogle}
            />
          </FooterWrapper>
        </Footer>
      </Container>
    </>
  );
}
