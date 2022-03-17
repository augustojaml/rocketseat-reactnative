import React from 'react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { Container, Image, Loading, Title } from './styled';

interface Props extends TouchableOpacityProps {
  image: ImageSourcePropType;
  title?: string;
  isLoading?: boolean;
}

export function SocialButton({ image, title = 'SignIn', isLoading = false, ...rest }: Props) {
  return (
    <>
      <Container {...rest} activeOpacity={0.5}>
        {isLoading ? (
          <Loading size={30} />
        ) : (
          <>
            <Image source={image} />
            <Title>{title}</Title>
          </>
        )}
      </Container>
    </>
  );
}
