import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { ICar, IRentalResponse } from '../../hooks/useCar';
import { api } from '../../services/api';
import { ArrowShortRight, GasolineSvg, getImage } from '../../utils/images';
import { MainTextMedium, MainTitleBold } from '../fonts';
import { InfoLabel } from '../InfoLabel';
import {
  CarAppointmentsItemDateWrapper,
  Container,
  ContentImage,
  ContentWrapper,
  InfoWrapper,
} from './styled';

var tempCar = {
  id: '8a5ff0dd-9139-4150-a42a-7263c91c2318',
  brand: 'Audi',
  model: 'A4',
  daily_rate: 200,
  fuel_type: 'gasoline',
  description:
    'O modelo executivo alemão e a perua esportiva RS4 chegam à linha 2022 sem alterações em relação ao ano anterior.',
  accessories: [
    {
      type: 'speed',
      name: '250km/h',
    },
    {
      type: 'acceleration',
      name: '3.8s',
    },
    {
      type: 'force',
      name: '800 HP',
    },
    {
      type: 'gasoline',
      name: 'Gasolina',
    },
    {
      type: 'exchange',
      name: 'Auto',
    },
    {
      type: 'seats',
      name: '5 pessoas',
    },
  ],
  photos: [
    'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/audi/01.png',
    'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/audi/02.png',
    'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/audi/03.png',
    'https://raw.githubusercontent.com/augustojaml/rocketseat-reactnative/master/chapter03/rentx/mobile-rentx/fakeApi/cars/audi/04.png',
  ],
};

interface CarItemProps extends TouchableOpacityProps {
  item: IRentalResponse;
}

export function CarAppointmentsItem({ item, ...rest }: CarItemProps) {
  const theme = useTheme();

  const ImageSvg: FC<SvgProps> = getImage(item.car.fuelType);

  return (
    <>
      <Container activeOpacity={0.7} {...rest}>
        <ContentWrapper>
          <InfoLabel label={item.car.brand} value={item.car.name} />
          <InfoWrapper>
            <InfoLabel
              label="Ao dia"
              value={String(item.car.price)}
              valueColor={theme.colors.main900}
            />
            <ImageSvg fill={theme.colors.primary400} />
          </InfoWrapper>
        </ContentWrapper>
        <ContentImage source={{ uri: String(item.car.thumbnail) }} />
      </Container>
      <CarAppointmentsItemDateWrapper>
        <MainTextMedium color={theme.colors.primary400}>Período</MainTextMedium>
        <MainTextMedium size={RFValue(13)} color={theme.colors.primary600}>
          {item.dateFrom}
        </MainTextMedium>
        <ArrowShortRight fill={theme.colors.primary400} />
        <MainTextMedium size={RFValue(13)} color={theme.colors.primary600}>
          {item.dateAt}
        </MainTextMedium>
      </CarAppointmentsItemDateWrapper>
    </>
  );
}
