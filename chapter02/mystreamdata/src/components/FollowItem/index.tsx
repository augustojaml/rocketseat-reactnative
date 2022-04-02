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

export function FollowItem() {
  return (
    <>
      <Container>
        <FollowThumbnailContainer>
          <FollowBanner
            source={{
              uri: 'https://static-cdn.jtvnw.net/previews-ttv/live_user_leegengar-440x248.jpg',
            }}
          />
          <FollowOverlay>
            <FollowSpectators>29,4 mil espectadores</FollowSpectators>
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
