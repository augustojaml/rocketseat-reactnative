import React from 'react';
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
}

interface IStreamFollowedItem {
  item: IStreamFollowed;
}

export function FollowItem({ item }: IStreamFollowedItem) {
  return (
    <>
      <Container>
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
              uri: 'https://static-cdn.jtvnw.net/jtv_user_pictures/32805a78-d927-48bd-8089-bf5efed53ea4-profile_image-50x50.png',
            }}
          />
          <FollowInfo>
            <FollowTitle>Um passarinho me contou...</FollowTitle>
            <FollowName>Alanzoka</FollowName>
          </FollowInfo>
        </FollowProfile>
      </Container>
    </>
  );
}
