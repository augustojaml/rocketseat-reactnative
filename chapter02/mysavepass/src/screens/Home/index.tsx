import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useState } from 'react';
import { Keyboard } from 'react-native';
import { useTheme } from 'styled-components';
import { UserPng } from '../../assets/images';
import { CustomActivityIndicator } from '../../components/CustomActivityIndicator';
import { FeatherIconButton } from '../../components/FeatherIconButton';
import { PasswordItem } from '../../components/PasswordItem';
import { SearchInput } from '../../components/SearchInput';
import { useAuth } from '../../hooks/useAuth';
import { IPassword, usePass } from '../../hooks/usePass';
import {
  Container,
  Greeting,
  GreetingUser,
  Header,
  Info,
  ListTitle,
  ListTitleContainer,
  ListTotal,
  Name,
  NewPassButton,
  NewPassIcon,
  PasswordsList,
  PassWrapper,
  Profile,
  ProfileImage,
  ProfileWrapper,
} from './styled';

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { passData, loadStorage, isLoadingSavePass } = usePass();
  const { user, signOutGoogle, isLoadingLogin } = useAuth();
  const [filteredPass, setFilteredPass] = useState<IPassword[] | undefined>();
  const [searchText, setSearchText] = useState('');

  function handleGoToSavePass() {
    navigation.navigate('SavePass');
  }

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

  useFocusEffect(
    useCallback(() => {
      (async () => {
        await loadStorage();
        setSearchText('');
      })();
    }, [])
  );

  return (
    <>
      <StatusBar style="light" />
      <Container>
        <Header>
          <Profile>
            {user?.picture ? (
              <ProfileImage source={{ uri: user?.picture }} />
            ) : (
              <ProfileImage source={UserPng} />
            )}
            <ProfileWrapper>
              <GreetingUser>
                <Greeting>Ola,</Greeting>
                <Name>{user?.name}</Name>
              </GreetingUser>
              <Info>Sinta-se seguro aqui</Info>
            </ProfileWrapper>
          </Profile>
          <FeatherIconButton
            name="power"
            color={theme.colors.danger}
            onPress={signOutGoogle}
            isLoading={isLoadingLogin}
          />
        </Header>
        <PassWrapper>
          <SearchInput
            value={searchText}
            onChangeText={handleOnChangeInput}
            placeholder="Qual senha voce procura"
            onPress={handleFindPass}
            onSubmitEditing={handleFindPass}
            returnKeyType="search"
          />
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

          {isLoadingSavePass ? (
            <CustomActivityIndicator />
          ) : (
            <PasswordsList
              data={filteredPass ? filteredPass : passData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <>
                  <PasswordItem item={item} />
                </>
              )}
            />
          )}
        </PassWrapper>
        <NewPassButton onPress={handleGoToSavePass}>
          <NewPassIcon name="plus" />
        </NewPassButton>
      </Container>
    </>
  );
}
