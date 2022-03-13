import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native';
import { Header } from '../../global/components/Header';
import { categories } from '../../global/utils/categories';
import { useTransaction } from '../../hooks/useTransaction';
import {
  CategoryFlatList,
  CategoryItem,
  CategoryItemAmount,
  CategoryItemTitle,
  ChangeMonthContainer,
  Container,
  GraphicContainer,
  Icon,
  MonthSelectButton,
  MonthTitle,
  ScreenTitle,
  VictoryPieContainer,
} from './styled';

export function ResumeTransaction() {
  const theme = useTheme();
  const { transactions } = useTransaction();

  useEffect(() => {
    // console.log(transactions);
  });

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <ScreenTitle>Resumo por Categorias</ScreenTitle>
        </Header>
        <GraphicContainer>
          <ChangeMonthContainer>
            <MonthSelectButton>
              <Icon name="chevron-left" />
            </MonthSelectButton>
            <MonthTitle>Maio, 2022</MonthTitle>
            <MonthSelectButton>
              <Icon name="chevron-right" />
            </MonthSelectButton>
          </ChangeMonthContainer>

          <VictoryPieContainer>
            <VictoryPie
              data={[
                { x: '35%', y: 35 },
                { x: '40%', y: 40 },
                { x: '55%', y: 55 },
              ]}
              colorScale={['#5636D3', '#FF872C', '#26195C']}
              width={RFPercentage(100)}
              style={{
                labels: {
                  fontSize: RFValue(18),
                  fontWeight: 'bold',
                  fill: theme.colors.shape,
                },
              }}
              labelRadius={50}
            />
          </VictoryPieContainer>

          <CategoryFlatList
            data={categories}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <>
                <CategoryItem color={item.color}>
                  <CategoryItemTitle>{item.name}</CategoryItemTitle>
                  <CategoryItemAmount>R$ 1200.00</CategoryItemAmount>
                </CategoryItem>
              </>
            )}
          />
        </GraphicContainer>
      </Container>
    </>
  );
}
