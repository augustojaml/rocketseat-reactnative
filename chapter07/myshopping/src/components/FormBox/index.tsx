import React, { useState } from 'react';

import { Container } from './styles';
import { ButtonIcon } from '../ButtonIcon';
import { Input } from '../Input';
import { Alert } from 'react-native';
import { firestore } from '../../services/firestore';

export function FormBox() {
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(0);

  async function handleProductAdd() {
    /**
        // id customizado
        firestore()
          .collection('products')
          .doc(`product${new Date().getTime()}`)
          .set({ description, quantity, done: false })
          .then(() => {
            Alert.alert('Produto', 'Produto adicionando com sucesso');
          })
          .catch((error) => console.log(error.message));
     */

    firestore()
      .collection('products')
      .add({
        description,
        quantity,
        done: false,
        createdAt: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        Alert.alert('Produto', 'Produto adicionando com sucesso');
        // setDescription('');
        // setQuantity(0);
      })
      .catch((error) => console.log(error.message));
  }

  return (
    <Container>
      <Input
        placeholder="Nome do produto"
        size="medium"
        onChangeText={(value) => setDescription(value)}
      />

      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        style={{ marginHorizontal: 8 }}
        onChangeText={(value) => setQuantity(Number(value))}
      />

      <ButtonIcon size="large" icon="add-shopping-cart" onPress={handleProductAdd} />
    </Container>
  );
}
