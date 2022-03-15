import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useTheme } from 'styled-components';
import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';
import {
  Container,
  Content,
  Greeting,
  GreetingUser,
  Icon,
  Info,
  PlusButton,
  Profile,
  ProfileImage,
  ProfileWrapper,
  Title,
} from './styled';

export function Home() {
  const theme = useTheme();

  return (
    <>
      <Container>
        <StatusBar style="light" />
        <Header
          height={25}
          paddingTop={70}
          background={theme.colors.background_secondary}
        >
          <Profile>
            <ProfileImage
              source={{ uri: 'https://github.com/augustojaml.png' }}
            />
            <ProfileWrapper>
              <GreetingUser>
                <Greeting>Ola,</Greeting>
                <Title>Augusto Monteiro</Title>
              </GreetingUser>
              <Info>Sinta-se seguro aqui</Info>
            </ProfileWrapper>
          </Profile>
          <PlusButton>
            <Icon name="plus" />
          </PlusButton>
        </Header>
        <Content>
          <InputSearch placeholder="Qual senha voce procura" />
        </Content>
      </Container>
    </>
  );
}
