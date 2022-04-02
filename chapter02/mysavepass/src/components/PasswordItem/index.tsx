import React, { useState } from 'react';
import { IPassword } from '../../hooks/usePass';
import {
  Container,
  Icon,
  IconButton,
  Name,
  PasswordContent,
  UserOrEmailPassword,
} from './styled';

interface PasswordItemProps {
  item: IPassword;
}

export function PasswordItem({ item }: PasswordItemProps) {
  const [showPassword, setShowPassword] = useState(false);

  function toggleShowPassword() {
    setShowPassword((state) => !state);
  }

  return (
    <>
      <Container>
        <IconButton onPress={toggleShowPassword}>
          <Icon name={showPassword ? 'eye-off' : 'eye'} />
        </IconButton>
        <PasswordContent>
          {showPassword ? (
            <>
              <Name>{item.userOrEmail}</Name>
              <UserOrEmailPassword>{item.password}</UserOrEmailPassword>
            </>
          ) : (
            <>
              <Name>{item.platform}</Name>
              <UserOrEmailPassword>{item.userOrEmail}</UserOrEmailPassword>
            </>
          )}
        </PasswordContent>
      </Container>
    </>
  );
}
