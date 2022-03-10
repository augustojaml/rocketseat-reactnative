import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../global/components/Header';

import { Container, Wrapper, User, UserImage, UserInfo, Greeting, Name, Icon, IconBorderlessButton } from './styled';

export function Dashboard() {
  return (
    <>
      <Container>
        <Header>
          <Wrapper>
            <User>
              <UserImage source={{ uri: 'https://github.com/augustojaml.png' }} />
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
      </Container>
    </>
  );
}
