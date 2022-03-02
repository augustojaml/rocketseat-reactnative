import React from 'react';
import { Text } from 'react-native';
import { HighlightCard } from '../../components/HighlightCard';
import { ToggleTheme } from '../../components/ToggleTheme';

import {
  Container,
  Header,
  UserWrapper,
  UserActions,
  UserInfo,
  Photo,
  User,
  Greeting,
  Name,
  Icon,
  HighlightCardsScroll,
} from './styled';

export function Dashboard() {
  return (
    <>
      <Container>
        <Header>
          <ToggleTheme />
          <UserWrapper>
            <UserInfo>
              <Photo source={{ uri: 'https://github.com/augustojaml.png' }} />
              <User>
                <Greeting>Ola, </Greeting>
                <Name>Augusto Monteiro</Name>
              </User>
            </UserInfo>
            <Icon name="power" />
          </UserWrapper>
        </Header>
        <HighlightCardsScroll>
          <HighlightCard />
          <HighlightCard />
          <HighlightCard />
        </HighlightCardsScroll>
      </Container>
    </>
  );
}
