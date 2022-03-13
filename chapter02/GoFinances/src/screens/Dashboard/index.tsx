import { useFocusEffect } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { ActivityIndicator } from '../../global/components/ActivityIndicator';
import { CardInfo } from '../../global/components/CardInfo';
import { Header } from '../../global/components/Header';
import TransactionDetail from '../../global/components/TransactionDetail';
import { useAuth } from '../../hooks/useAuth';
import { useTransaction } from '../../hooks/useTransaction';
import {
  CardScrollView,
  Container,
  FlatListContainer,
  Greeting,
  Icon,
  IconBorderlessButton,
  ListTitle,
  ListTitleFeedBack,
  Name,
  ScrollViewContainer,
  TransactionDetailFlatList,
  User,
  UserImage,
  UserInfo,
  Wrapper,
} from './styled';

export function Dashboard() {
  const theme = useTheme();
  const { user, signOut } = useAuth();
  const { transactionsDetail, totals, isLoading, loadingTransactions } =
    useTransaction();

  useFocusEffect(
    useCallback(() => {
      const loadingData = async () => {
        await loadingTransactions();
      };
      loadingData();
    }, [])
  );

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header height={250} justifyContent="flex-start">
          <Wrapper>
            <User>
              <UserImage source={{ uri: user?.photo }} />
              <UserInfo>
                <Greeting>Ola</Greeting>
                <Name>{user?.name}</Name>
              </UserInfo>
            </User>
            <IconBorderlessButton onPress={signOut}>
              <Icon name="power" />
            </IconBorderlessButton>
          </Wrapper>
        </Header>
        <ScrollViewContainer>
          <CardScrollView>
            <CardInfo
              cardInfo={{
                id: 1,
                title: 'Entrada',
                type: 'up',
                icon: 'arrow-up-circle',
                amount: totals?.positive,
              }}
            />
            <CardInfo
              cardInfo={{
                id: 1,
                title: 'Saida',
                type: 'down',
                icon: 'arrow-down-circle',
                amount: totals?.negative,
              }}
            />
            <CardInfo
              cardInfo={{
                id: 1,
                title: 'Total',
                type: 'total',
                icon: 'dollar-sign',
                amount: totals?.total,
              }}
            />
          </CardScrollView>
        </ScrollViewContainer>

        <FlatListContainer>
          {isLoading ? (
            <ActivityIndicator color={theme.colors.text} />
          ) : (
            <>
              {transactionsDetail?.length ? (
                <ListTitle>Transações</ListTitle>
              ) : (
                <ListTitleFeedBack>
                  Nenhuma transação{'\n'} cadastrada
                </ListTitleFeedBack>
              )}
              <TransactionDetailFlatList
                data={transactionsDetail}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TransactionDetail transaction={item} />
                )}
              />
            </>
          )}
        </FlatListContainer>
      </Container>
    </>
  );
}
