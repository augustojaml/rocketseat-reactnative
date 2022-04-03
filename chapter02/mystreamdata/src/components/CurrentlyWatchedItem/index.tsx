import React from 'react';
import { Container, Image } from './styled';

export interface ICurrentlyWatched {
  id: string;
  name: string;
  box_art_url: string;
}
interface ICurrentlyWatchedItem {
  item: ICurrentlyWatched;
}

export function CurrentlyWatchedItem({ item }: ICurrentlyWatchedItem) {
  return (
    <>
      <Container>
        <Image source={{ uri: item.box_art_url.replace('{width}x{height}', '188x250') }} />
      </Container>
    </>
  );
}
