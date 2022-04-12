import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { ICar } from '../../../hook/useCar';
import { carAccessories } from '../../utils/images';

import {
  CarImage,
  CarInfoWrapper,
  CarListLabel,
  CarLitTitle,
  Container,
  CarInfo,
  CarLitPrice,
  CarDaily,
} from './styled';

interface CarItemProps extends TouchableOpacityProps {
  item: ICar;
}

export function CarListItem({ item, ...rest }: CarItemProps) {
  const theme = useTheme();

  const ImageSvg = carAccessories[item.fuel_type];

  return (
    <>
      <Container activeOpacity={0.7} {...rest}>
        <CarInfoWrapper>
          <CarListLabel>{item.brand}</CarListLabel>
          <CarLitTitle>{item.model}</CarLitTitle>
          <CarInfo>
            <CarDaily>
              <CarListLabel>AUDI</CarListLabel>
              <CarLitPrice>R$ {item.daily_rate}</CarLitPrice>
            </CarDaily>
            <ImageSvg fill={theme.colors.primary400} width={20} height={20} />
          </CarInfo>
        </CarInfoWrapper>
        <CarImage source={{ uri: String(item.photos[0]) }} />
      </Container>
    </>
  );
}
