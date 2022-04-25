import React from 'react';
import { firestore } from '../../services/firestore';

import { ButtonIcon } from '../ButtonIcon';
import { Container, Info, Title, Quantity, Options } from './styles';

export type ProductProps = {
  id: string;
  description: string;
  quantity: number;
  done: boolean;
};

type Props = {
  data: ProductProps;
};

export function Product({ data }: Props) {
  async function handleToggleCheck() {
    firestore().collection('products').doc(data.id).update({
      done: !data.done,
    });
  }

  async function handleDeleteProduct() {
    firestore().collection('products').doc(data.id).delete();
  }

  return (
    <Container>
      <Info>
        <Title done={data.done}>{data.description}</Title>

        <Quantity>Quantidade: {data.quantity}</Quantity>
      </Info>

      <Options>
        <ButtonIcon icon={data.done ? 'undo' : 'check'} onPress={handleToggleCheck} />

        <ButtonIcon icon="delete" color="alert" onPress={handleDeleteProduct} />
      </Options>
    </Container>
  );
}
