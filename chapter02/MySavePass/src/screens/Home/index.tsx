import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useTheme } from 'styled-components';
import { Header } from '../../components/Header';
import { InputSearch } from '../../components/InputSearch';
import { PasswordItem } from '../../components/PasswordItem';
import { useAuth } from '../../hooks/useAuth';
import { IPassword, usePass } from '../../hooks/usePass';
import {
  CategoryFlatList,
  Container,
  Content,
  Greeting,
  GreetingUser,
  HomeLoading,
  IconNew,
  Info,
  ListTitle,
  ListTitleContainer,
  ListTotal,
  NewRegister,
  PowerButton,
  PowerIcon,
  Profile,
  ProfileImage,
  ProfileWrapper,
  Title,
} from './styled';

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { passData, loadStorage, isLoadingSavePass } = usePass();
  const { user, signOut, isLoadingLogin } = useAuth();
  const [searchText, setSearchText] = useState('');
  const [filteredPass, setFilteredPass] = useState<IPassword[] | undefined>();

  function handleGoToRegister() {
    navigation.navigate('RegisterPasswords');
  }

  async function handleSignOut() {
    await signOut();
  }

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await loadStorage();
        setSearchText('');
      })();
    }, [])
  );

  function handleFindPass() {
    const filterData = passData?.filter((data) =>
      data.platform.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredPass(filterData);
    Keyboard.dismiss();
  }

  function handleOnChangeInput(input: string) {
    if (!input) {
      setFilteredPass(undefined);
      Keyboard.dismiss();
    }
    setSearchText(input);
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <StatusBar style="light" backgroundColor={theme.colors.background_secondary} />
          <Header height={25} paddingTop={70} background={theme.colors.background_secondary}>
            <Profile>
              <ProfileImage source={{ uri: user?.picture }} />
              <ProfileWrapper>
                <GreetingUser>
                  <Greeting>Ola,</Greeting>
                  <Title>{user?.name}</Title>
                </GreetingUser>
                <Info>Sinta-se seguro aqui</Info>
              </ProfileWrapper>
            </Profile>
            <PowerButton onPress={handleSignOut}>
              {isLoadingLogin ? (
                <HomeLoading color={theme.colors.danger} />
              ) : (
                <PowerIcon name="power" />
              )}
            </PowerButton>
          </Header>
          <Content>
            <InputSearch
              value={searchText}
              onChangeText={handleOnChangeInput}
              placeholder="Qual senha voce procura"
              onPress={handleFindPass}
              onSubmitEditing={handleFindPass}
              returnKeyType="search"
            />

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
                  data={filteredPass ? filteredPass : passData}
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
          <NewRegister onPress={handleGoToRegister}>
            <IconNew name="plus" />
          </NewRegister>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}
