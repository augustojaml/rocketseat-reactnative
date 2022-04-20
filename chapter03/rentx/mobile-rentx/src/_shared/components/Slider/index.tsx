import React, { useRef, useState } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  Text,
} from 'react-native';
import { IPhotos } from '../../hooks/useCar';
import { IconButton } from '../IconButton';
import { BulletContainer, BulletItem, MainHeader } from '../views';

import { Container, HeaderWrapper, ScrollContent, SliderContainer, SliderImage } from './styled';

const images = [
  {
    id: '68456b6e-af35-4e3e-b09c-07d1eb11847e',
    car_id: '49983f6c-a46a-4dfd-a86e-425b8c72e086',
    photo: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/9.png',
  },
  {
    id: '84cb7187-dccd-4fbb-850b-2422cb1cd777',
    car_id: '49983f6c-a46a-4dfd-a86e-425b8c72e086',
    photo: 'https://storage.googleapis.com/golden-wind/ignite/react-native/images/11.png',
  },
];

interface SliderProps {
  photos?: IPhotos[];
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
                <BulletItem key={image.id} isActive={currentIndex === index} />
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
              <ScrollContent key={image.id}>
                <SliderImage
                  source={{
                    uri: String(image.photo),
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
