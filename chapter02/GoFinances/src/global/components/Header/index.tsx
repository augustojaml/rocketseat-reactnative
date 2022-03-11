import React, { ReactNode } from 'react';

import { Container } from './styled';

interface IHeader {
  children: ReactNode;
  height?: number;
  justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}

export function Header({
  height = 130,
  justifyContent = 'flex-end',
  alignItems = 'center',
  children,
  flexDirection = 'column',
}: IHeader) {
  return (
    <>
      <Container
        justifyContent={justifyContent}
        alignItems={alignItems}
        height={height}
        flexDirection={flexDirection}
      >
        {children}
      </Container>
    </>
  );
}
