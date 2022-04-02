import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { HeroSvg, StreamDataPng } from '../../assets/images';
import { SignInButton } from '../../components/SignInButton';
import {
  Container,
  Footer,
  FooterHeader,
  FooterTile,
  Header,
  StreamBy,
  StreamDataImage,
} from './styled';

export function SignIn() {
  const navigation = useNavigation();

  function handleSignIn() {
    navigation.navigate('Home');
  }

  return (
    <>
      <Container>
        <Header>
          <HeroSvg />
        </Header>
        <Footer>
          <FooterHeader>
            <StreamDataImage source={StreamDataPng} />
            <StreamBy>by twitch</StreamBy>
          </FooterHeader>
          <FooterTile>
            Veja dados{'\n'}interessantes sobre{'\n'}o mundo da Twitch
          </FooterTile>
          <SignInButton onPress={handleSignIn} title="Entrar com Twitch" />
        </Footer>
      </Container>
    </>
  );
}
