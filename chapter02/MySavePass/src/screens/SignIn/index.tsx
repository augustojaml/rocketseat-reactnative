import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SocialButton } from '../../components/SocialButton';
import { useAuth } from '../../hooks/useAuth';
import googleImg from '../../images/google.png';
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
  const { isLoadingLogin, signIn } = useAuth();

  async function handleSign() {
    await signIn();
  }

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <HeaderTitle>
            Gerencie suas{`\n`}senhas de{`\n`}forma segura
          </HeaderTitle>
          <Image source={logoImg} />
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
