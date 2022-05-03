import React, { useRef, useState } from 'react';
import { Dimensions, NativeScrollEvent, NativeSyntheticEvent, ScrollView } from 'react-native';
import { ICarPhotos } from '../../hooks/useCar';
import { api } from '../../services/api';
import { IconButton } from '../IconButton';
import { BulletContainer, BulletItem, MainHeader } from '../views';

import { Container, HeaderWrapper, ScrollContent, SliderContainer, SliderImage } from './styled';

interface SliderProps {
  photos?: ICarPhotos[];
  onPress?: () => void;
}

export function Slider({ photos, onPress = () => {} }: SliderProps) {
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
              {photos &&
                photos.map((image, index) => (
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
            {photos &&
              photos.map((item) => (
                <ScrollContent key={String(item.id)}>
                  <SliderImage
                    source={{
                      uri: String(`${api.defaults.baseURL}/cars/${item.photo}`),
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
