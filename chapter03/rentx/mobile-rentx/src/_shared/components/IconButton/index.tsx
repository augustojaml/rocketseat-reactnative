import React, { FC } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';
import { ChevronLeftSvg } from '../../utils/images';

import { Container, Title } from './styled';

interface IIconButtonProps extends TouchableOpacityProps {
  icon?: FC<SvgProps>;
  alignItems?: 'flex-start' | 'flex-end' | 'center';
  color?: string;
  height?: number;
  isLoading?: boolean;
}

export function IconButton({
  icon: Icon = ChevronLeftSvg,
  color,
  height = 24,
  alignItems = 'flex-start',
  isLoading = false,
  ...rest
}: IIconButtonProps) {
  const theme = useTheme();
  return (
    <>
      <Container alignItems={alignItems} {...rest}>
        {isLoading ? (
          <ActivityIndicator color={theme.colors.main900} size={RFValue(30)} />
        ) : (
          <Icon
            fill={color ? color : theme.colors.primary400}
            width={RFValue(24)}
            height={RFValue(height)}
          />
        )}
      </Container>
    </>
  );
}
