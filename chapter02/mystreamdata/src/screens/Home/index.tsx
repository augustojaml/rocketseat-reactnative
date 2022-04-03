import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { CurrentlyWatchedItem, ICurrentlyWatched } from '../../components/CurrentlyWatchedItem';
import { CurrentlyWatchedItemLoading } from '../../components/CurrentlyWatchedItem/CurrentlyWatchedItemLoading';
import { FollowedItem, IStreamFollowed } from '../../components/FollowedItem';
import { FollowedItemLoading } from '../../components/FollowedItem/FollowedItemLoading';
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

export function Home() {
  const { signOut, isAuthLoading, user } = useAuth();
  const [streamFollowed, setStreamFollowed] = useState<IStreamFollowed[]>([]);
  const [currentlyWatched, setCurrentlyWatched] = useState<ICurrentlyWatched[]>([]);

  const [isDataLoading, setIsDataLoading] = useState(false);

  const fakeStreamFollowed = [{ id: '123' } as IStreamFollowed, { id: '124' } as IStreamFollowed];

  const FakeCurrentlyWatched = [
    { id: '123' } as ICurrentlyWatched,
    { id: '124' } as ICurrentlyWatched,
    { id: '125' } as ICurrentlyWatched,
  ];

  async function getStreamFollowed() {
    const responseStreamFollowed = await api.get(`/streams/followed?user_id=${user?.id}`);
    const response = await Promise.all<IStreamFollowed[]>(
      responseStreamFollowed.data.data.map(async (followed: IStreamFollowed) => {
        const followUserResponse = await api.get(`/users?id=${followed.user_id}`);

        return {
          id: followed.id,
          thumbnail_url: followed.thumbnail_url,
          title: followed.title,
          viewer_count:
            followed.viewer_count / 1000 >= 1
              ? followed.viewer_count / 1000 + ' mil'
              : followed.viewer_count,
          user_login: followed.user_login,
          user_id: followUserResponse.data.data[0].id,
          user_display_name: followUserResponse.data.data[0].display_name,
          user_avatar: followUserResponse.data.data[0].profile_image_url,
        };
      })
    );
    setStreamFollowed(response);
  }

  async function getCurrentlyWatched() {
    const responseCurrentlyWatched = await api.get('/games/top');
    const response = responseCurrentlyWatched.data.data.map((current: ICurrentlyWatched) => {
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
      setIsDataLoading(true);
      await getStreamFollowed();
      await getCurrentlyWatched();
      setIsDataLoading(false);
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
            data={isDataLoading ? fakeStreamFollowed : streamFollowed}
            style={{ marginTop: 20 }}
            horizontal={true}
            keyExtractor={(item) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={4}
            initialNumToRender={4}
            renderItem={({ item }) =>
              isDataLoading ? <FollowedItemLoading /> : <FollowedItem item={item} />
            }
          />
        </FollowContainer>

        <CurrentlyWatchedContainer>
          <CurrentlyWatchedTitle>Mais assistidos do momento</CurrentlyWatchedTitle>
          <FlatList
            data={isDataLoading ? FakeCurrentlyWatched : currentlyWatched}
            style={{ marginTop: 20 }}
            horizontal={true}
            keyExtractor={(item) => String(item.id)}
            showsHorizontalScrollIndicator={false}
            maxToRenderPerBatch={5}
            initialNumToRender={3}
            renderItem={({ item }) =>
              isDataLoading ? <CurrentlyWatchedItemLoading /> : <CurrentlyWatchedItem item={item} />
            }
          />
        </CurrentlyWatchedContainer>

        <CurrentlyVersion>Versão Beta 1.0</CurrentlyVersion>
      </Container>
    </>
  );
}
