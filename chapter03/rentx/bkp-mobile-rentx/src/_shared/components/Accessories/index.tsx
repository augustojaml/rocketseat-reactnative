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

const fakeAccessories: IAccessories[] = [
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
];

export function Accessories({ accessories = fakeAccessories }: IAccessoriesProps) {
  const theme = useTheme();
  return (
    <>
      <Container>
        {accessories.map((accessory) => {
          let ImageSvg = getImage(accessory.type);
          return (
            <Accessory key={accessory.type}>
              <ImageSvg fill={theme.colors.primary500} width={RFValue(24)} height={RFValue(24)} />
              <MainTextMedium color={theme.colors.primary400} size={RFValue(13)}>
                {accessory.name}
              </MainTextMedium>
            </Accessory>
          );
        })}
      </Container>
    </>
  );
}
