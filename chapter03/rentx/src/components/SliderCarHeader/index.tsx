import React, { useState } from 'react';
import { Dimensions, Image, ScrollView } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import {
  BackIcon,
  BackIconButton,
  Bullet,
  BulletContainer,
  Container,
  Header,
  HeaderWrapper,
  ScrollContainer,
  ScrollImage,
  ScrollItem,
} from './styled';

interface SliderCarHeaderProps {
  images?: String[];
  onPress?: () => void;
}

export function SliderCarHeader({ images = [], onPress = () => {} }: SliderCarHeaderProps) {
  const [isBulletActive, setIsBulletActive] = useState(0);

  return (
    <>
      <Container>
        <Header>
          <HeaderWrapper>
            <BackIconButton onPress={onPress}>
              <BackIcon name="chevron-left" />
            </BackIconButton>
            <BulletContainer>
              {images.map((image, index) => (
                <Bullet key={index} isBulletActive={isBulletActive === index} />
              ))}
            </BulletContainer>
          </HeaderWrapper>
        </Header>
        <ScrollContainer>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            onMomentumScrollEnd={(event) => {
              const activeIndex = Math.round(
                event.nativeEvent.contentOffset.x / Dimensions.get('window').width
              );
              setIsBulletActive(activeIndex);
            }}
          >
            {images.map((image, index) => (
              <ScrollItem key={String(index)}>
                <ScrollImage
                  source={{
                    uri: String(image),
                  }}
                />
              </ScrollItem>
            ))}
          </ScrollView>
        </ScrollContainer>
      </Container>
    </>
  );
}
