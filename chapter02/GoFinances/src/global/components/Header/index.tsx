import React, { ReactNode } from 'react';

import { Container } from './styled';

interface IHeader {
  children: ReactNode;
}

export function Header({ children }: IHeader) {
  return (
    <>
      <Container>{children}</Container>
    </>
  );
}
