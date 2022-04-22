import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Message, Icon, MessageText } from './styled';

interface Props extends TextInputProps {
  message?: string;
  active?: boolean;
}

export function TextInput({ message, active = false, ...rest }: Props) {
  return (
    <>
      <Container {...rest} active={active} />
      <Message>
        {message && (
          <>
            <Icon name="info" />
            <MessageText>{message}</MessageText>
          </>
        )}
      </Message>
    </>
  );
}
