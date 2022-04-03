import React from 'react';
import { Linking } from 'react-native';
import {
  Container,
  FollowAvatar,
  FollowBanner,
  FollowInfo,
  FollowName,
  FollowOverlay,
  FollowProfile,
  FollowSpectators,
  FollowThumbnailContainer,
  FollowTitle,
} from './styled';

export interface IStreamFollowed {
  id: string;
  thumbnail_url: string;
  title: string;
  viewer_count: number;
  user_id: string;
  user_login: string;
  user_display_name: string;
  user_avatar: string;
}

interface IStreamFollowedItem {
  item: IStreamFollowed;
}

export function FollowedItem({ item }: IStreamFollowedItem) {
  return (
    <>
      <Container onPress={() => Linking.openURL(`https://twitch.tv/${item.user_login}`)}>
        <FollowThumbnailContainer>
          <FollowBanner
            source={{
              uri: item.thumbnail_url.replace('{width}x{height}', '780x435'),
            }}
          />
          <FollowOverlay>
            <FollowSpectators>{item.viewer_count} espectadores</FollowSpectators>
          </FollowOverlay>
        </FollowThumbnailContainer>
        <FollowProfile>
          <FollowAvatar
            source={{
              uri: item.user_avatar
                ? item.user_avatar
                : 'https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-50x50.png',
            }}
          />
          <FollowInfo>
            <FollowTitle numberOfLines={1}>{item.title}</FollowTitle>
            <FollowName>{item.user_display_name}</FollowName>
          </FollowInfo>
        </FollowProfile>
      </Container>
    </>
  );
}
