import React, { useMemo } from 'react';
import { FlatList, Text, View } from 'react-native';
import { Friend } from './Friend';

interface FriendsListProps {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  }[];
  unfollow: () => void;
}

export function FriendsList({ data, unfollow }: FriendsListProps) {
  /**
   * USERMEMO = MEMORIZA VALOR
   * USERCALLBACK = MEMORIZA A FUNÇÃO
   */

  const totalLikes = useMemo(() => {
    return data.reduce((likes, friend) => {
      return likes + friend.likes;
    }, 0);
  }, [data]);

  return (
    <>
      <View>
        <Text style={{ color: 'red', marginBottom: 16 }}>{`Total de links: ${totalLikes}`}</Text>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <Friend key={String(item.id)} data={item} unfollow={unfollow} />
          )}
        />
      </View>
    </>
  );
}
