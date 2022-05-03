import React from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { IAccessories } from '../../hooks/useCar';
import { getImage } from '../../utils/images';
import { MainTextMedium } from '../fonts';

import { Accessory, Container } from './styled';

interface IAccessoriesProps {
  accessories?: IAccessories[];
}

export function Accessories({ accessories = [] }: IAccessoriesProps) {
  const theme = useTheme();
  return (
    <>
      <Container>
        {accessories.map((accessory) => {
          let ImageSvg = getImage(accessory.type);
          return (
            <Accessory key={accessory.type}>
              <ImageSvg fill={theme.colors.primary500} width={RFValue(24)} height={RFValue(24)} />
              <MainTextMedium color={theme.colors.primary400} size={RFValue(12)}>
                {accessory.name}
              </MainTextMedium>
            </Accessory>
          );
        })}
      </Container>
    </>
  );
}
