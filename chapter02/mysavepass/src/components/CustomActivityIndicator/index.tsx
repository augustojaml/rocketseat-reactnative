import React from 'react';
import { ActivityIndicator } from 'react-native';

interface ComponentProps {
  color?: string;
  size?: number;
}

export function CustomActivityIndicator({ color = '#fff', size = 20 }: ComponentProps) {
  return (
    <>
      <ActivityIndicator color={color} size={size} />
    </>
  );
}
