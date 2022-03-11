import React from 'react';

import {
  Container,
  Header,
  Transaction,
  Icon,
  Content,
  Amount,
  LastTransaction,
} from './styled';

export interface ICardInfo {
  id: number;
  title: string;
  type: 'up' | 'down' | 'total';
  icon: 'arrow-up-circle' | 'arrow-down-circle' | 'dollar-sign';
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
        <Amount type={cardInfo.type}>R$ 17.400,00</Amount>
        <LastTransaction type={cardInfo.type}>
          Última entrada dia 13 de abril
        </LastTransaction>
      </Content>
    </Container>
  );
}
