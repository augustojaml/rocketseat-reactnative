import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';
import { VictoryPie } from 'victory-native';
import { ActivityIndicator } from '../../global/components/ActivityIndicator';
import { Header } from '../../global/components/Header';
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
  const {
    graphicsData,
    isLoading,
    previousDate,
    nextDate,
    currentCalendar,
    loadingGraphic,
  } = useTransaction();

  useFocusEffect(
    useCallback(() => {
      const loadingData = async () => {
        await loadingGraphic();
      };
      loadingData();
    }, [])
  );

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <ScreenTitle>Resumo por Categorias</ScreenTitle>
        </Header>

        <GraphicContainer>
          <ChangeMonthContainer>
            <MonthSelectButton onPress={previousDate}>
              <Icon name="chevron-left" />
            </MonthSelectButton>
            <MonthTitle>{currentCalendar}</MonthTitle>
            <MonthSelectButton onPress={nextDate}>
              <Icon name="chevron-right" />
            </MonthSelectButton>
          </ChangeMonthContainer>

          {isLoading ? (
            <ActivityIndicator color={theme.colors.text} />
          ) : (
            <>
              <VictoryPieContainer>
                <VictoryPie
                  data={graphicsData}
                  x="percent"
                  y="totalCategory"
                  // @ts-ignore: Object is possibly 'null'
                  colorScale={
                    graphicsData && graphicsData.map((item) => item.color)
                  }
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
                data={graphicsData}
                keyExtractor={(item) => item.category}
                renderItem={({ item }) => (
                  <>
                    <CategoryItem color={item.color}>
                      <CategoryItemTitle>{item.category}</CategoryItemTitle>
                      <CategoryItemAmount>
                        {item.totalCategoryFormatted}
                      </CategoryItemAmount>
                    </CategoryItem>
                  </>
                )}
              />
            </>
          )}
        </GraphicContainer>
      </Container>
    </>
  );
}
