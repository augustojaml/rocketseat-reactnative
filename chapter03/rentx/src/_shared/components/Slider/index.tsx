import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import { Bullet, BulletContainer, ScrollContent, SliderContainer, SliderImage } from './styled';

import { Container } from './styled';

interface SliderProps {
  photos?: String[];
  colorBullet?: string;
}

const images = [
  'https://www.webmotors.com.br/imagens/prod/347565/CHEVROLET_CORVETTE_6.2_V8_LT1_GASOLINA_GRAND_SPORT_MANUAL_34756514044310568.png?s=fill&w=440&h=330&q=80&t=true',
  'https://www.webmotors.com.br/imagens/prod/347565/CHEVROLET_CORVETTE_6.2_V8_LT1_GASOLINA_GRAND_SPORT_MANUAL_34756514044601560.png?s=fill&w=440&h=330&q=80&t=true',
  'https://www.webmotors.com.br/imagens/prod/347565/CHEVROLET_CORVETTE_6.2_V8_LT1_GASOLINA_GRAND_SPORT_MANUAL_34756514044360595.png?s=fill&w=440&h=330&q=80&t=true',
];

export function Slider({ photos = images, colorBullet = '#011321' }: SliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollView = useRef<ScrollView>(null);

  function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const index = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
    setCurrentIndex(index);
  }

  return (
    <>
      <Container>
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
                  resizeMode="contain"
                />
              </ScrollContent>
            ))}
          </ScrollView>
        </SliderContainer>
        <BulletContainer>
          {photos.map((image, index) => (
            <Bullet key={index} isBulletActive={currentIndex === index} colorBullet={colorBullet} />
          ))}
        </BulletContainer>
      </Container>
    </>
  );
}
