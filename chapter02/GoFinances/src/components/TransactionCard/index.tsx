import React from 'react';

import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from './styled';

interface Category {
  name: string;
  icon: string;
}

export interface Transaction {
  id: string;
  type: 'positive' | 'negative';
  title: string;
  amount: string;
  category: Category;
  date: string;
}

export interface TransactionProps {
  transaction: Transaction;
}

export function TransactionCard({ transaction }: TransactionProps) {
  return (
    <>
      <Container>
        <Title>{transaction.title}</Title>
        <Amount type={transaction.type}>
          {transaction.type === 'negative' && '- '}
          {transaction.amount}
        </Amount>
        <Footer>
          <Category>
            <Icon name={transaction.category.icon} />
            <CategoryName>{transaction.category.name}</CategoryName>
          </Category>
          <Date>{transaction.date}</Date>
        </Footer>
      </Container>
    </>
  );
}
