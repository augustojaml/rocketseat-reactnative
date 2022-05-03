import React, { FC } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { ICar } from '../../hooks/useCar';
import { api } from '../../services/api';
import { getImage } from '../../utils/images';
import { InfoLabel } from '../InfoLabel';
import { Container, ContentImage, ContentWrapper, InfoWrapper } from './styled';

interface CarItemProps extends TouchableOpacityProps {
  item: ICar;
}

export function CarListItem({ item, ...rest }: CarItemProps) {
  const theme = useTheme();

  const ImageSvg: FC<SvgProps> = getImage(item.fuelType);

  return (
    <>
      <Container activeOpacity={0.7} {...rest}>
        <ContentWrapper>
          <InfoLabel label={item.brand} value={item.name} />
          <InfoWrapper>
            <InfoLabel
              label="Ao dia"
              value={String(item.price)}
              valueColor={theme.colors.main900}
            />
            <ImageSvg fill={theme.colors.primary400} />
          </InfoWrapper>
        </ContentWrapper>
        <ContentImage source={{ uri: String(`${api.defaults.baseURL}/cars/${item.thumbnail}`) }} />
      </Container>
    </>
  );
}
