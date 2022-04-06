import React from 'react';
import { LogoSvg } from '../../assests/images';

import { Container, Header, HeaderWrapper, CountCar } from './styled';

export function Home() {
  return (
    <>
      <Container>
        <Header>
          <HeaderWrapper>
            <LogoSvg />
            <CountCar>Total de 12 carros</CountCar>
          </HeaderWrapper>
        </Header>
      </Container>
    </>
  );
}
