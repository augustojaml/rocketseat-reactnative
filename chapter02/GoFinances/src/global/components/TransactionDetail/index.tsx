import React from 'react';
import {
  Container,
  TransactionTitle,
  TransactionAmount,
  Footer,
  TransactionCategory,
  Icon,
  Name,
  TransactionDate,
} from './styled';

export default function TransactionDetail() {
  return (
    <Container>
      <TransactionTitle>Desenvolvimento de site</TransactionTitle>
      <TransactionAmount>R$ 12.000,00</TransactionAmount>
      <Footer>
        <TransactionCategory>
          <Icon name="dollar-sign" />
          <Name>Venda</Name>
        </TransactionCategory>
        <TransactionDate>10/04/2020</TransactionDate>
      </Footer>
    </Container>
  );
}
