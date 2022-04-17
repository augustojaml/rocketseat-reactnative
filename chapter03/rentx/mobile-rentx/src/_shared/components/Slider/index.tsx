import React, { useRef, useState } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
} from 'react-native';
import { IconButton } from '../IconButton';
import { BulletContainer, BulletItem, MainHeader } from '../views';

import { Container, HeaderWrapper, ScrollContent, SliderContainer, SliderImage } from './styled';

const images = [
  'https://www.webmotors.com.br/imagens/prod/347565/CHEVROLET_CORVETTE_6.2_V8_LT1_GASOLINA_GRAND_SPORT_MANUAL_34756514044310568.png?s=fill&w=440&h=330&q=80&t=true',
  'https://www.webmotors.com.br/imagens/prod/347565/CHEVROLET_CORVETTE_6.2_V8_LT1_GASOLINA_GRAND_SPORT_MANUAL_34756514044601560.png?s=fill&w=440&h=330&q=80&t=true',
  'https://www.webmotors.com.br/imagens/prod/347565/CHEVROLET_CORVETTE_6.2_V8_LT1_GASOLINA_GRAND_SPORT_MANUAL_34756514044360595.png?s=fill&w=440&h=330&q=80&t=true',
];

interface SliderProps {
  photos?: String[];
  onPress?: () => void;
}

export function Slider({ photos = images, onPress = () => {} }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollView = useRef<ScrollView>(null);

  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const index = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('screen').width);
    setCurrentIndex(index);
  }

  return (
    <>
      <Container>
        <MainHeader>
          <HeaderWrapper>
            <IconButton onPress={onPress} />
            <BulletContainer>
              {photos.map((image, index) => (
                <BulletItem key={String(index)} isActive={currentIndex === index} />
              ))}
            </BulletContainer>
          </HeaderWrapper>
        </MainHeader>
        <SliderContainer>
          <ScrollView
            ref={scrollView}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
          >
            {photos.map((image, index) => (
              <ScrollContent key={String(index)}>
                <SliderImage
                  source={{
                    uri: String(image),
                  }}
                />
              </ScrollContent>
            ))}
          </ScrollView>
        </SliderContainer>
      </Container>
    </>
  );
}
