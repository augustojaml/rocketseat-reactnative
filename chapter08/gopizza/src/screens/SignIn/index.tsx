import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { Button } from '@components/Button';
import { Input } from '@components/Input';

import {
  Brand,
  Container,
  Content,
  ForgotPasswordButton,
  ForgotPasswordLabel,
  Title,
} from './styled';

import brandImg from '@assets/brand.png';
import { useAuth } from '@hooks/useAuth';

export function SignIn() {
  const { signIn, forgotPassword, isAuthLoading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSign() {
    await signIn({ email, password });
  }

  async function handleForgotPassword() {
    await forgotPassword(email);
  }

  return (
    <>
      <Container>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <Content>
            <Brand source={brandImg} />

            <Title>Login</Title>

            <Input
              placeholder="Email"
              type="secondary"
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={setEmail}
            />
            <Input
              placeholder="Senha"
              type="secondary"
              secureTextEntry
              onChangeText={setPassword}
            />

            <ForgotPasswordButton onPress={handleForgotPassword}>
              <ForgotPasswordLabel>Esqueci minha senha</ForgotPasswordLabel>
            </ForgotPasswordButton>

            <Button
              title="SignIn"
              type="secondary"
              isLoading={isAuthLoading}
              onPress={handleSign}
            />
          </Content>
        </KeyboardAvoidingView>
      </Container>
    </>
  );
}
