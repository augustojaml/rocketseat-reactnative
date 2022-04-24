import React, { memo } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import lodash from 'lodash';

interface ItemProps {
  data: {
    id: number;
    name: string;
    likes: number;
    online: string;
  };
  unfollow: () => void;
}

function FriendComponent({ data, unfollow }: ItemProps) {
  return (
    <>
      <Text>
        {data.name} | Likes: {data.likes}
      </Text>
      <TouchableOpacity style={{ marginBottom: 16 }} onPress={unfollow}>
        <Text style={{ color: 'blue', fontWeight: 'bold' }}>Deixar de Seguir</Text>
        <Text>{`Online em: ${data.online}`}</Text>
      </TouchableOpacity>
    </>
  );
}

export const Friend = memo(FriendComponent, (prev, next) => {
  return lodash.isEqual(prev.data, next.data);
});
