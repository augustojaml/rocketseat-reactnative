import React, { ReactNode } from 'react';

import { Container } from './styled';

interface IHeader {
  children: ReactNode;
  height?: number;
  justifyContent?: string;
}

export function Header({
  height = 130,
  justifyContent = 'flex-end',
  children,
}: IHeader) {
  return (
    <>
      <Container justifyContent={justifyContent} height={height}>
        {children}
      </Container>
    </>
  );
}
