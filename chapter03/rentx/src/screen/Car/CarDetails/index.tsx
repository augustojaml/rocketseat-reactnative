import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { ICar } from '../../../hook/useCar';
import { Button } from '../../../_shared/components/Button';
import { Slider } from '../../../_shared/components/Slider';
import {
  MainAbsoluteButtonContainer,
  MainButton,
  MainHeader,
} from '../../../_shared/components/styled';
import { carAccessories, ChevronleftSvg } from '../../../_shared/utils/images';

import {
  Container,
  HeaderWrapper,
  CarInfoWrapper,
  CarInfo,
  CarInfoLabel,
  CarDetail,
  CarInfoTitle,
  CarInfoPrice,
  Accessories,
  AccessoryName,
  Accessory,
  CarDescription,
} from './styled';

export function CarDetails() {
  const theme = useTheme();
  const navigation = useNavigation();

  const { car } = useRoute().params as { car: ICar };

  function handleNavigationToGoBack() {
    navigation.goBack();
  }

  return (
    <>
      <Container>
        <MainHeader background={theme.colors.shape}>
          <HeaderWrapper>
            <MainButton onPress={handleNavigationToGoBack}>
              <ChevronleftSvg width={RFValue(30)} height={RFValue(30)} />
            </MainButton>
          </HeaderWrapper>
        </MainHeader>

        <ScrollView
          contentContainerStyle={{
            paddingBottom: 80,
          }}
          bounces={false}
        >
          <Slider photos={car.photos} />
          <CarDetail>
            <CarInfoWrapper>
              <CarInfo>
                <CarInfoLabel>{car.brand}</CarInfoLabel>
                <CarInfoTitle>{car.model}</CarInfoTitle>
              </CarInfo>
              <CarInfo>
                <CarInfoLabel>AO DIA</CarInfoLabel>
                <CarInfoPrice>R$ {car.daily_rate}</CarInfoPrice>
              </CarInfo>
            </CarInfoWrapper>
            <Accessories>
              {car.accessories.map((item) => {
                let ImageSvg = carAccessories[item.type];
                return (
                  <Accessory key={item.type}>
                    <ImageSvg />
                    <AccessoryName>{item.name}</AccessoryName>
                  </Accessory>
                );
              })}
            </Accessories>
            <CarDescription>{car.description}</CarDescription>
          </CarDetail>
        </ScrollView>

        <MainAbsoluteButtonContainer>
          <Button title="Escolher período do aluguel" />
        </MainAbsoluteButtonContainer>
      </Container>
    </>
  );
}
