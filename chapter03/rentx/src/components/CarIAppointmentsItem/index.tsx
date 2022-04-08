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
  CarInfo,
  CarPeriod,
  CarPeriodLabel,
  CardPeriodDate,
  CardPeriodContent,
  CardPeriodIcon,
} from './styled';

// interface CarItemProps extends TouchableOpacityProps {
//   item: ICar;
// }

import { carAccessories } from '../../utils/carAccessories';
import { TouchableOpacityProps } from 'react-native';
import { ArrowRightSvg, GasolineSvg } from '../../assets/images';
import { useTheme } from 'styled-components';

export function CarIAppointmentsItem() {
  // const ImageSvg = carAccessories[item.fuel_type];
  const theme = useTheme();
  return (
    <>
      <Container>
        <CarInfo>
          <CarWrapper>
            <Brand>Mitsubishi</Brand>
            <Model>Lancer Evo X</Model>
            <Details>
              <Rent>
                <RentPeriod>AO DIA</RentPeriod>
                <RentPrice>R$ 290</RentPrice>
              </Rent>
              <GasolineSvg width={22.5} height={29.5} />
            </Details>
          </CarWrapper>
          <CarThumbnail
            source={{
              uri: String(
                'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/fakeApi/cars/camaro/04.png'
              ),
            }}
          />
        </CarInfo>
        <CarPeriod>
          <CarPeriodLabel>PERÍODO</CarPeriodLabel>
          <CardPeriodContent>
            <CardPeriodDate>17/06/1977</CardPeriodDate>
            <ArrowRightSvg fill={theme.colors.primary500} style={{ paddingHorizontal: 20 }} />
            <CardPeriodDate>17/06/1977</CardPeriodDate>
          </CardPeriodContent>
        </CarPeriod>
      </Container>
    </>
  );
}
