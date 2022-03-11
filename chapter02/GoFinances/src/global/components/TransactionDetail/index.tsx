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

export interface ITransaction {
  id: string;
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
}

interface ITransactionDetailProps {
  transaction: ITransaction;
}

export default function TransactionDetail({
  transaction,
}: ITransactionDetailProps) {
  return (
    <Container>
      <TransactionTitle>{transaction.name}</TransactionTitle>
      <TransactionAmount type={transaction.type}>
        {transaction.type === 'negative' && '- '}
        {transaction.amount}
      </TransactionAmount>
      <Footer>
        <TransactionCategory>
          <Icon name="dollar-sign" />
          <Name>{transaction.category}</Name>
        </TransactionCategory>
        <TransactionDate>{transaction.date}</TransactionDate>
      </Footer>
    </Container>
  );
}
