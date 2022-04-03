import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { theme } from '../../theme';
import { Icon, IconContainer } from './styled';

interface ComponentProps extends TouchableOpacityProps {
  isLoading?: boolean;
}

export function PowerButton({ isLoading = false, ...rest }: ComponentProps) {
  return (
    <>
      <IconContainer {...rest}>
        {isLoading ? (
          <ActivityIndicator size={RFValue(24)} color={theme.colors.text100} />
        ) : (
          <Icon name="power" />
        )}
      </IconContainer>
    </>
  );
}
