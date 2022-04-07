import React from 'react';
import { ICar } from '../../hooks/useCar';

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

interface CarItemProps extends TouchableOpacityProps {
  item: ICar;
}

import { carAccessories } from '../../utils/carAccessories';
import { TouchableOpacityProps } from 'react-native';

export function CarItem({ item, ...rest }: CarItemProps) {
  const ImageSvg = carAccessories[item.fuel_type];

  return (
    <>
      <Container {...rest} activeOpacity={0.6}>
        <CarWrapper>
          <Brand>{item.brand}</Brand>
          <Model>{item.model}</Model>
          <Details>
            <Rent>
              <RentPeriod>AO DIA</RentPeriod>
              <RentPrice>R$ {item.daily_rate}</RentPrice>
            </Rent>
            <ImageSvg width={22.5} height={29.5} />
          </Details>
        </CarWrapper>
        <CarThumbnail source={{ uri: String(item.photos[0]) }} />
      </Container>
    </>
  );
}
