import React from 'react';
import { LogoSvg } from '../../assests/images';

import { Container, ImageSvg, Title } from './styled';

export function Home() {
  return (
    <>
      <Container>
        <LogoSvg />
        <Title>Home</Title>
      </Container>
    </>
  );
}
