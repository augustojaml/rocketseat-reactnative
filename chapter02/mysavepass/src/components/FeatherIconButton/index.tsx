import { Feather } from '@expo/vector-icons';
import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { CustomActivityIndicator } from '../CustomActivityIndicator';
import { Container } from './styled';

interface ComponentProps extends TouchableOpacityProps {
  name?: React.ComponentProps<typeof Feather>['name'];
  color?: string;
  isLoading?: boolean;
}

export function FeatherIconButton({
  name = 'at-sign',
  color = '#fff',
  isLoading = false,
  ...rest
}: ComponentProps) {
  return (
    <>
      <Container {...rest} borderColor={color}>
        {isLoading ? (
          <CustomActivityIndicator color={color} size={25} />
        ) : (
          <Feather name={name} color={color} size={RFValue(20)} />
        )}
      </Container>
    </>
  );
}
