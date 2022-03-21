import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTheme } from 'styled-components';
import { SocialButton } from '../../components/SocialButton';
import { ToggleTheme } from '../../components/ToggleTheme';
import { useAppTheme } from '../../hooks/useAppTheme';
import { useAuth } from '../../hooks/useAuth';
import googleImg from '../../images/google.png';
import logoLightImg from '../../images/icon_128-light.png';
import logoImg from '../../images/icon_128.png';
import {
  Container,
  Footer,
  FooterWrapper,
  Header,
  HeaderSubTitle,
  HeaderTitle,
  Image,
} from './styled';

export function SignIn() {
  const theme = useTheme();
  const { appTheme } = useAppTheme();
  const { isLoadingLogin, signIn } = useAuth();

  async function handleSign() {
    await signIn();
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={theme.colors.background_secondary} />
      <Container>
        <Header>
          <HeaderTitle>
            Gerencie suas{`\n`}senhas de{`\n`}forma segura
          </HeaderTitle>
          <ToggleTheme />
          {appTheme.theme === 'dark' ? <Image source={logoImg} /> : <Image source={logoLightImg} />}
          <HeaderSubTitle>Faça seu login</HeaderSubTitle>
        </Header>

        <Footer>
          <FooterWrapper>
            <SocialButton
              image={googleImg}
              title="Entrar com Google"
              onPress={handleSign}
              isLoading={isLoadingLogin}
            />
          </FooterWrapper>
        </Footer>
      </Container>
    </>
  );
}
