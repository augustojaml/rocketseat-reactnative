import React from 'react';
import { ITransactionDetail } from '../../../hooks/useTransaction';
import { categories } from '../../utils/categories';
import {
  Container,
  Footer,
  Icon,
  Name,
  TransactionAmount,
  TransactionCategory,
  TransactionDate,
  TransactionTitle,
} from './styled';

interface ITransactionDetailProps {
  transaction: ITransactionDetail;
}

export default function TransactionDetail({
  transaction,
}: ITransactionDetailProps) {
  const category = categories.filter(
    (item) => item.key === transaction.category
  )[0];

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
          <Name>{category.name}</Name>
        </TransactionCategory>
        <TransactionDate>{transaction.date}</TransactionDate>
      </Footer>
    </Container>
  );
}
