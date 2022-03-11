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
} from './styled';
import { CardInfo } from '../../global/components/CardInfo';
import { cardInfos } from '../../global/utils/cardInfos';
import TransactionDetail from '../../global/components/TransactionDetail';

export function Dashboard() {
  return (
    <>
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

          <TransactionDetail />
          <TransactionDetail />
          <TransactionDetail />
        </FlatListContainer>
      </Container>
    </>
  );
}
