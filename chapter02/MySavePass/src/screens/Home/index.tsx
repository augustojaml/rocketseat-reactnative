import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';
import { PasswordItem } from '../../components/PasswordItem';
import { IPassword, usePass } from '../../hooks/usePass';
import {
  CategoryFlatList,
  Container,
  Content,
  Greeting,
  GreetingUser,
  HomeLoading,
  Icon,
  Info,
  ListTitle,
  ListTitleContainer,
  ListTotal,
  PlusButton,
  Profile,
  ProfileImage,
  ProfileWrapper,
  Title,
} from './styled';

const data: IPassword[] = [
  {
    id: '1',
    platform: 'Rocketseat',
    userOrEmail: 'augustojaml',
    password: '12345',
  },
  {
    id: '2',
    platform: 'Gmail',
    userOrEmail: 'augustojaml@gmail.com',
    password: '12345',
  },
];

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { passData, loadStorage, isLoadingSavePass } = usePass();

  function handleGoToRegister() {
    navigation.navigate('RegisterPasswords');
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await loadStorage();
      })();
    }, [])
  );

  return (
    <>
      <Container>
        <StatusBar style="light" />
        <Header height={25} paddingTop={70} background={theme.colors.background_secondary}>
          <Profile>
            <ProfileImage source={{ uri: 'https://github.com/augustojaml.png' }} />
            <ProfileWrapper>
              <GreetingUser>
                <Greeting>Ola,</Greeting>
                <Title>Augusto Monteiro</Title>
              </GreetingUser>
              <Info>Sinta-se seguro aqui</Info>
            </ProfileWrapper>
          </Profile>
          <PlusButton onPress={handleGoToRegister}>
            <Icon name="plus" />
          </PlusButton>
        </Header>
        <Content>
          <InputSearch placeholder="Qual senha voce procura" />

          {isLoadingSavePass ? (
            <HomeLoading size={30} color={theme.colors.background_tertiary} />
          ) : (
            <>
              <ListTitleContainer>
                <ListTitle>Suas senhas</ListTitle>
                <ListTotal>
                  {passData &&
                    passData.length > 1 &&
                    `${String(passData.length).padStart(2, '0')} senhas salvas`}
                  {passData &&
                    passData.length === 1 &&
                    `${String(passData.length).padStart(2, '0')} senha salva`}
                </ListTotal>
              </ListTitleContainer>
              <CategoryFlatList
                data={passData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <>
                    <PasswordItem item={item} />
                  </>
                )}
              />
            </>
          )}
        </Content>
      </Container>
    </>
  );
}
