import React from 'react';
import { View } from 'react-native';
import { Friend } from './Friend';

interface FriendsListProps {
  data: {
    id: number;
    name: string;
    likes: number;
  }[];
}

export function FriendsList({ data }: FriendsListProps) {
  return (
    <>
      <View>
        {data.map((friend) => (
          <Friend key={String(friend.id)} data={friend} />
        ))}
      </View>
    </>
  );
}
