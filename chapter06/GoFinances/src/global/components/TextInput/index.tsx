import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Message, Icon, MessageText } from './styled';

interface Props extends TextInputProps {
  message?: string;
}

export function TextInput({ message, ...rest }: Props) {
  return (
    <>
      <Container {...rest} />
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
