import React, { ReactNode } from 'react';
import { Container } from './styled';

interface HeaderProps {
  children: ReactNode;
  height?: number;
  background?: string;
  paddingTop?: number;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
}

export function Header({
  children,
  height = 3,
  background = '#202024',
  paddingTop = 20,
  flexDirection = 'row',
  alignItems = 'flex-start',
  justifyContent = 'space-between',
}: HeaderProps) {
  return (
    <>
      <Container
        height={height}
        background={background}
        paddingTop={paddingTop}
        flexDirection={flexDirection}
        alignItems={alignItems}
        justifyContent={justifyContent}
      >
        {children}
      </Container>
    </>
  );
}
