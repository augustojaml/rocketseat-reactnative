import React from 'react';
import {
  Amount,
  Container,
  Content,
  Header,
  Icon,
  LastTransaction,
  Transaction,
} from './styled';

export interface ICardInfo {
  id?: number;
  title: string;
  type: 'up' | 'down' | 'total';
  icon: 'arrow-up-circle' | 'arrow-down-circle' | 'dollar-sign';
  amount?: string;
  lastTransaction?: string | null | undefined;
}

interface ComponentProps {
  cardInfo: ICardInfo;
}

export function CardInfo({ cardInfo }: ComponentProps) {
  return (
    <Container type={cardInfo.type}>
      <Header>
        <Transaction type={cardInfo.type}>{cardInfo.title}</Transaction>
        <Icon name={cardInfo.icon} type={cardInfo.type} />
      </Header>
      <Content>
        <Amount type={cardInfo.type}>{cardInfo.amount}</Amount>
        <LastTransaction type={cardInfo.type}>
          {cardInfo.lastTransaction}
        </LastTransaction>
      </Content>
    </Container>
  );
}
