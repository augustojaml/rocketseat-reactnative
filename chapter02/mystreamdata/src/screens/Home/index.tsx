import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { CurrentlyWatchedItem, ICurrentlyWatched } from '../../components/CurrentlyWatchedItem';
import { FollowItem, IStreamFollowed } from '../../components/FollowItem';
import { PowerButton } from '../../components/PowerButton';
import { useAuth } from '../../hooks/useAuth';
import { api } from '../../services/api';
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
  const { signOut, isAuthLoading, user } = useAuth();
  const [streamFollowed, setStreamFollowed] = useState<IStreamFollowed[]>();
  const [currentlyWatched, setCurrentlyWatched] = useState<ICurrentlyWatched[]>();

  async function getStreamFollowed(data: IStreamFollowed[]) {
    const response = data.map((followed) => {
      return {
        id: followed.id,
        thumbnail_url: followed.thumbnail_url,
        title: followed.title,
        viewer_count: followed.viewer_count,
      };
    });
    setStreamFollowed(response);
  }

  async function getCurrentlyWatched(data: ICurrentlyWatched[]) {
    const response = data.map((current) => {
      return {
        id: current.id,
        name: current.name,
        box_art_url: current.box_art_url,
      };
    });
    setCurrentlyWatched(response);
  }

  useEffect(() => {
    (async () => {
      const responseStreamFollowed = await api.get(`/streams/followed?user_id=${user?.id}`);
      await getStreamFollowed(responseStreamFollowed.data.data);

      const responseCurrentlyWatched = await api.get('/games/top');
      await getCurrentlyWatched(responseCurrentlyWatched.data.data);
    })();
  }, []);

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Container>
        <Header>
          <HeaderWrapper>
            <ProfileContainer>
              <ProfileImage source={{ uri: user?.avatar }} />
              <ProfileInfo>
                <Greeting>Ola, </Greeting>
                <ProfileName>{user?.name}</ProfileName>
              </ProfileInfo>
            </ProfileContainer>
            <PowerButton isLoading={isAuthLoading} onPress={signOut} />
          </HeaderWrapper>
        </Header>

        <FollowContainer>
          <FollowTitle>Canais que você segue</FollowTitle>
          <FlatList
            data={streamFollowed}
            style={{ marginTop: 20 }}
            horizontal={true}
            keyExtractor={(item) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={4}
            initialNumToRender={4}
            renderItem={({ item }) => <FollowItem item={item} />}
          />
        </FollowContainer>

        <CurrentlyWatchedContainer>
          <CurrentlyWatchedTitle>Mais assistidos do momento</CurrentlyWatchedTitle>
          <FlatList
            data={currentlyWatched}
            style={{ marginTop: 20 }}
            horizontal={true}
            keyExtractor={(item) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={5}
            initialNumToRender={3}
            renderItem={({ item }) => <CurrentlyWatchedItem item={item} />}
          />
        </CurrentlyWatchedContainer>

        <CurrentlyVersion>Versão Beta 1.0</CurrentlyVersion>
      </Container>
    </>
  );
}
