import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AppleSVG from '../../assets/apple.svg';
import GoogleSVG from '../../assets/google.svg';
import LogoSVG from '../../assets/logo.svg';
import { ActivityIndicator } from '../../global/components/ActivityIndicator';
import { SocialButton } from '../../global/components/SocialButton';
import { useAuth } from '../../hooks/useAuth';
import {
  Container,
  Header,
  SocialContainer,
  SocialWrapper,
  SubTitle,
  Title,
} from './styled';

export function SignIn() {
  const navigation = useNavigation();
  const { signInWithGoogle, signInWithApple, user } = useAuth();

  const [isLoading, setIsLoading] = useState(false);

  async function handleSignWithGoogle() {
    try {
      setIsLoading(true);
      await signInWithGoogle();
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  function handleSignWithApple() {
    signInWithApple();
  }

  useEffect(() => {
    return () => setIsLoading(true);
  }, []);

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <LogoSVG width={RFValue(120)} height={RFValue(68)} />
          <Title>Controle suas finanças de forma muito simples</Title>
          <SubTitle>Faça seu login com {'\n'} uma das contas abaixo </SubTitle>
        </Header>
        <SocialContainer>
          <SocialWrapper>
            <SocialButton
              svg={GoogleSVG}
              title="Entrar com Google"
              onPress={handleSignWithGoogle}
            />

            {Platform.OS === 'ios' && (
              <SocialButton
                svg={AppleSVG}
                title="Entrar com Apple"
                onPress={handleSignWithApple}
              />
            )}
            {isLoading && <ActivityIndicator />}
          </SocialWrapper>
        </SocialContainer>
      </Container>
    </>
  );
}
