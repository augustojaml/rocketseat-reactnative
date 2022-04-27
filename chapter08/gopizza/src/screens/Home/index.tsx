import React, { useCallback, useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';

import {
  Container,
  Greeting,
  GreetingEmoji,
  GreetingText,
  Header,
  MenuHeader,
  MenuItemsNumber,
  NewProductButton,
  SignOutButton,
  Title,
} from './styled';

import { MaterialIcons } from '@expo/vector-icons';

import happyEmoji from '@assets/happy.png';
import { useTheme } from 'styled-components/native';
import { Search } from '@components/Search';
import { ProductCard, ProductProps } from '@components/ProductCard';
import { Alert, FlatList } from 'react-native';
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native';
import { useAuth } from '@hooks/useAuth';

export function Home() {
  const theme = useTheme();
  const navigation = useNavigation();
  const { signOut, user } = useAuth();

  const [pizzas, setPizzas] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState('');

  function fetchPizzas(value: string) {
    const formattedValue = value.toLocaleLowerCase().trim();

    firestore()
      .collection('pizzas')
      .orderBy('name_insensitive')
      .startAt(formattedValue)
      .endAt(`${formattedValue}\uf8ff`)
      .get()
      .then((response) => {
        const data = response.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];

        setPizzas(data);
      })
      .catch(() => Alert.alert('Consulta', 'Não foi possível realizar a consulta'));
  }

  function handleSearch() {
    fetchPizzas(search);
  }

  function handleSearchClear() {
    setSearch('');
    fetchPizzas('');
  }

  function handleOpen(id: string) {
    const screen = user?.isAdmin ? 'product' : 'order';
    navigation.navigate(screen, { id });
  }

  function handleAdd() {
    navigation.navigate('product', {});
  }

  useFocusEffect(
    useCallback(() => {
      fetchPizzas('');
    }, [])
  );

  return (
    <>
      <Container>
        <Header>
          <Greeting>
            <GreetingEmoji source={happyEmoji} />
            <GreetingText>Ola, {user?.name}</GreetingText>
          </Greeting>
          <SignOutButton onPress={signOut}>
            <MaterialIcons name="logout" color={theme.COLORS.TITLE} size={24} />
          </SignOutButton>
        </Header>

        <Search
          onChangeText={setSearch}
          value={search}
          onSearch={handleSearch}
          onClear={handleSearchClear}
        />

        <MenuHeader>
          <Title>Cardápio</Title>
          <MenuItemsNumber>{pizzas.length} pizzas</MenuItemsNumber>
        </MenuHeader>

        <FlatList
          data={pizzas}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ProductCard data={item} onPress={() => handleOpen(item.id)} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingTop: 20,
            paddingBottom: 125,
            marginHorizontal: 24,
          }}
        />

        {user?.isAdmin && (
          <NewProductButton title="Cadastrar Pizza" type="secondary" onPress={handleAdd} />
        )}
      </Container>
    </>
  );
}
