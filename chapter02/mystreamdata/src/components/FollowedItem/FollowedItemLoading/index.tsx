import React from 'react';
import { Fade } from 'rn-placeholder';

import {
  Container,
  BgImage,
  ProfileWrapper,
  ProfileAvatar,
  ProfileInfo,
  PlaceholderDescription,
  PlaceholderName,
} from './styled';

export function FollowedItemLoading() {
  return (
    <>
      <Container Animation={Fade}>
        <BgImage />
        <ProfileWrapper>
          <ProfileAvatar />
          <ProfileInfo>
            <PlaceholderDescription />
            <PlaceholderName />
          </ProfileInfo>
        </ProfileWrapper>
      </Container>
    </>
  );
}
