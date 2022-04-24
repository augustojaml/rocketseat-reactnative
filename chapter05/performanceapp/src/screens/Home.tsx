import React, { useCallback, useState } from 'react';
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

interface FriendsListProps {
  id: string;
  name: string;
  likes: number;
  online: string;
}

export function Home() {
  const [name, setName] = useState('');
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleUnfollow = useCallback(() => {
    console.log('unfollow friend');
  }, []);

  async function handleSearchFriends() {
    setIsLoading(true);
    const fetchData = await fetch(`http://192.168.101.199:3333/friend?q=${name}`);
    const jsonData = await fetchData.json();
    const formattedData = jsonData.map((item: FriendsListProps) => {
      return {
        id: item.id,
        name: item.name,
        likes: item.likes,
        online: `${String(new Date().getHours()).padStart(2, '0')}:${String(
          new Date().getMinutes()
        ).padStart(2, '0')}`,
      };
    });
    setFriends(formattedData);
    setIsLoading(false);
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Friends</Text>
        <TextInput style={styles.input} placeholder="Nome do cliente" onChangeText={setName} />
        <Button title="Buscar" onPress={handleSearchFriends} />

        {isLoading ? (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Loading</Text>
          </View>
        ) : (
          <FriendsList data={friends} unfollow={handleUnfollow} />
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
