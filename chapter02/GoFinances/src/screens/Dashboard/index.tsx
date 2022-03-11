import React from 'react';

import { Header } from '../../global/components/Header';

import {
  Container,
  Wrapper,
  User,
  UserImage,
  UserInfo,
  Greeting,
  Name,
  Icon,
  IconBorderlessButton,
  ScrollViewContainer,
  CardScrollView,
  FlatListContainer,
  ListTitle,
  TransactionDetailFlatList,
} from './styled';
import { CardInfo } from '../../global/components/CardInfo';
import { cardInfos } from '../../global/utils/cardInfos';
import TransactionDetail, {
  ITransaction,
} from '../../global/components/TransactionDetail';
import { StatusBar } from 'expo-status-bar';

/**
  id: string;
  type: 'positive' | 'negative';
  name: string;
  amount: string;
  category: string;
  date: string;
 */

const tempTransactions: ITransaction[] = [
  {
    id: '01',
    type: 'positive',
    name: 'Desenvolvimento de site',
    amount: 'R$ 5000.00',
    category: 'work',
    date: '10/04/2021',
  },
  {
    id: '02',
    type: 'negative',
    name: 'Pizza',
    amount: 'R$ 50,00',
    category: 'food',
    date: '11/04/2022',
  },
  {
    id: '03',
    type: 'negative',
    name: 'Academia',
    amount: 'R$ 60,00',
    category: 'corpo e saúde',
    date: '11/04/2022',
  },
  {
    id: '04',
    type: 'negative',
    name: 'Academia',
    amount: 'R$ 60,00',
    category: 'corpo e saúde',
    date: '11/04/2022',
  },
];

export function Dashboard() {
  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header height={250} justifyContent="flex-start">
          <Wrapper>
            <User>
              <UserImage
                source={{ uri: 'https://github.com/augustojaml.png' }}
              />
              <UserInfo>
                <Greeting>Ola</Greeting>
                <Name>Augusto Monteiro</Name>
              </UserInfo>
            </User>
            <IconBorderlessButton onPress={() => console.log('Power')}>
              <Icon name="power" />
            </IconBorderlessButton>
          </Wrapper>
        </Header>
        <ScrollViewContainer>
          <CardScrollView>
            {cardInfos.map((cardInfo) => (
              <CardInfo key={cardInfo.id} cardInfo={cardInfo} />
            ))}
          </CardScrollView>
        </ScrollViewContainer>

        <FlatListContainer>
          <ListTitle>Transações</ListTitle>
          <TransactionDetailFlatList
            data={tempTransactions}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <TransactionDetail transaction={item} />}
          />
        </FlatListContainer>
      </Container>
    </>
  );
}
