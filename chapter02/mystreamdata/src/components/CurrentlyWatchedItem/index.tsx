import React from 'react';
import { Container, Image } from './styled';

export function CurrentlyWatchedItem() {
  return (
    <>
      <Container>
        <Image source={{ uri: 'https://static-cdn.jtvnw.net/ttv-boxart/21779-188x250.jpg' }} />
      </Container>
    </>
  );
}
