import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList } from 'react-native';
import { CurrentlyWatchedItem } from '../../components/CurrentlyWatchedItem';
import { FollowItem } from '../../components/FollowItem';
import {
  Container,
  CurrentlyVersion,
  CurrentlyWatchedContainer,
  CurrentlyWatchedTitle,
  FollowContainer,
  FollowTitle,
  Greeting,
  Header,
  HeaderWrapper,
  Icon,
  IconContainer,
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  ProfileName,
} from './styled';

const item = [
  {
    id: '121',
    item: 'bla',
  },
  {
    id: '122',
    item: 'bla',
  },
  {
    id: '123',
    item: 'bla',
  },
  {
    id: '124',
    item: 'bla',
  },
];

export function Home() {
  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Container>
        <Header>
          <HeaderWrapper>
            <ProfileContainer>
              <ProfileImage source={{ uri: 'https://github.com/augustojaml.png' }} />
              <ProfileInfo>
                <Greeting>Ola, </Greeting>
                <ProfileName>Augusto</ProfileName>
              </ProfileInfo>
            </ProfileContainer>
            <IconContainer>
              <Icon name="power" />
            </IconContainer>
          </HeaderWrapper>
        </Header>

        <FollowContainer>
          <FollowTitle>Canais que você segue</FollowTitle>
          <FlatList
            style={{ marginTop: 20 }}
            horizontal={true}
            data={item}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <FollowItem />}
          />
        </FollowContainer>

        <CurrentlyWatchedContainer>
          <CurrentlyWatchedTitle>Mais assistidos do momento</CurrentlyWatchedTitle>
          <FlatList
            style={{ marginTop: 20 }}
            horizontal={true}
            data={item}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <CurrentlyWatchedItem />}
          />
        </CurrentlyWatchedContainer>

        <CurrentlyVersion>Versão Beta 1.0</CurrentlyVersion>
      </Container>
    </>
  );
}
