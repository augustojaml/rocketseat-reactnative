import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

import LogoSVG from '../../assets/logo.svg';
import GoogleSVG from '../../assets/google.svg';
import AppleSVG from '../../assets/apple.svg';

import { SocialButton } from '../../global/components/SocialButton';

import { Container, Header, SocialContainer, SocialWrapper, Title } from './styled';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export function SignIn() {
  const navigation = useNavigation();

  function handleNavigateToDashboard() {
    navigation.navigate('Dashboard');
  }

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <LogoSVG width={RFValue(120)} height={RFValue(68)} />
          <Title>Controle suas finanças de forma muito simples</Title>
        </Header>
        <SocialContainer>
          <SocialWrapper>
            <SocialButton svg={GoogleSVG} title="Entrar com Google" onPress={handleNavigateToDashboard} />
            <SocialButton svg={AppleSVG} title="Entrar com Apple" onPress={handleNavigateToDashboard} />
          </SocialWrapper>
        </SocialContainer>
      </Container>
    </>
  );
}
