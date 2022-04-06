import React from 'react';

import {
  Container,
  CarWrapper,
  Brand,
  Model,
  CarThumbnail,
  Details,
  Rent,
  RentPeriod,
  RentPrice,
} from './styled';

interface CarItemProps {
  item: ICar;
}

import carTest from '../../../fakeApi/cars/audi/01.png';
import { GasolineSvg } from '../../assets/images';
import { ICar } from '../../hooks/useCar';

export function CarItem({ item }: CarItemProps) {
  return (
    <>
      <Container>
        <CarWrapper>
          <Brand>{item.brand}</Brand>
          <Model>{item.model}é</Model>
          <Details>
            <Rent>
              <RentPeriod>AO DIA</RentPeriod>
              <RentPrice>R$ {item.daily_rate}</RentPrice>
            </Rent>
            <GasolineSvg width={22.5} height={29.5} />
          </Details>
        </CarWrapper>
        <CarThumbnail source={{ uri: item.photos[0] }} />
      </Container>
    </>
  );
}
