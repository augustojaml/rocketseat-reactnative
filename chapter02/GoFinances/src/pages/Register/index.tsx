import React, { useState } from 'react';
import { Button } from '../../components/form/Button';
import { Input } from '../../components/form/Input';
import { TransactionTypeButton } from '../../components/form/TransactionTypeButton';

import { Container, Header, Title, Fields, Form, TransactionTypeContainer } from './styled';

export function Register() {
  const [transactionType, setTransactionType] = useState('');

  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  return (
    <>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <Input placeholder="Nome" />
            <Input placeholder="Preço" />
            <TransactionTypeContainer>
              <TransactionTypeButton
                title="Entrada"
                type="up"
                onPress={() => handleTransactionType('up')}
                isActive={transactionType === 'up'}
              />
              <TransactionTypeButton
                title="Saida"
                type="down"
                onPress={() => handleTransactionType('down')}
                isActive={transactionType === 'down'}
              />
            </TransactionTypeContainer>
          </Fields>
          <Button title="Enviar" />
        </Form>
      </Container>
    </>
  );
}
