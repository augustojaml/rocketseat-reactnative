import React from 'react';
import { ImageSourcePropType, TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';
import { GooglePng } from '../../assets/images';
import { CustomActivityIndicator } from '../CustomActivityIndicator';
import { Container, Image, Title } from './styled';

interface Props extends TouchableOpacityProps {
  image?: ImageSourcePropType;
  title?: string;
  isLoading?: boolean;
}

export function SocialButton({
  image = GooglePng,
  title = 'SignIn',
  isLoading = false,
  ...rest
}: Props) {
  const theme = useTheme();

  return (
    <>
      <Container {...rest} activeOpacity={0.5}>
        {isLoading ? (
          <CustomActivityIndicator size={30} color={theme.colors.text_light} />
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
