import React from 'react';
import { FlatList } from 'react-native';
import { LogoSvg } from '../../assets/images';
import { CarItem } from '../../components/CarItem';
import { useCar } from '../../hooks/useCar';

import { Container, Header, HeaderWrapper, CountCar, Content } from './styled';

export function Home() {
  const { cars } = useCar();

  return (
    <>
      <Container>
        <Header>
          <HeaderWrapper>
            <LogoSvg />
            <CountCar>Total de 12 carros</CountCar>
          </HeaderWrapper>
        </Header>
        <Content>
          <FlatList
            data={cars}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <CarItem item={item} />
              </>
            )}
          />
        </Content>
      </Container>
    </>
  );
}
