import React from 'react';
import { ViewProps, ViewPropTypes } from 'react-native';
import { Container, InfoTextLabel, InfoTextValue } from './styled';

interface IInfoLabelProps extends ViewProps {
  label?: string;
  value?: string;
  valueColor?: string;
  valueSize?: number;
}

export function InfoLabel({
  label = 'Label',
  value = 'Value',
  valueColor,
  valueSize,
  ...rest
}: IInfoLabelProps) {
  return (
    <>
      <Container {...rest}>
        <InfoTextLabel>{label}</InfoTextLabel>
        <InfoTextValue valueColor={valueColor} valueSize={valueSize}>
          {value}
        </InfoTextValue>
      </Container>
    </>
  );
}
