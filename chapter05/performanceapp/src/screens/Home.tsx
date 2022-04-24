import React, { useState } from 'react';
import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { FriendsList } from '../components/FriendsList';

export function Home() {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearchFriends() {
    setIsLoading(true);
    const fetchData = await fetch(`http://192.168.101.199:3333/friend?q=${name}`);
    const jsonData = await fetchData.json();
    setFriends(jsonData);
    setIsLoading(false);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Clientes</Text>
        <TextInput style={styles.input} placeholder="Nome do cliente" onChangeText={setName} />
        <Button title="Buscar" onPress={handleSearchFriends} />

        {isLoading ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Loading</Text>
          </View>
        ) : (
          <ScrollView style={styles.list}>
            <FriendsList data={friends} />
          </ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    padding: 25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    padding: 8,
    marginTop: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  list: {
    marginTop: 16,
  },
});
