import { Button } from '@components/Button';
import { ButtonBack } from '@components/ButtonBack';
import { Input } from '@components/Input';
import { RadioButton } from '@components/RadioButton';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import firestore from '@react-native-firebase/firestore';

import {
  Container,
  ContentScroll,
  Form,
  FormRow,
  Header,
  InputGroup,
  Label,
  Photo,
  Price,
  Sizes,
  Title,
} from './styled';
import { ProductNavigationProps } from 'src/routes';
import { ProductProps } from '@components/ProductCard';
import { Alert } from 'react-native';
import { useAuth } from '@hooks/useAuth';

type PizzaResponse = ProductProps & {
  prices_sizes: {
    [key: string]: number;
  };
};

export function Order() {
  const navigation = useNavigation();
  const routes = useRoute();
  const { user } = useAuth();

  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [tableNumber, setTableNumber] = useState('');
  const [sendingOrder, setSendingOrder] = useState(false);
  const [pizza, setPizza] = useState<PizzaResponse>({} as PizzaResponse);

  const pizzaTypes = [
    { id: 'p', name: 'Pequena' },
    { id: 'm', name: 'Média' },
    { id: 'g', name: 'Grande' },
  ];

  const { id: paramsId } = routes.params as ProductNavigationProps;

  const amount = size ? pizza.prices_sizes[size] * quantity : '0,00';

  function handleGoBack() {
    navigation.goBack();
  }

  function handleOrder() {
    if (!size) {
      return Alert.alert('Pedido', 'Selecione o tamanho da pizza.');
    }
    if (!tableNumber) {
      return Alert.alert('Pedido', 'Informe o número da mesa.');
    }
    if (!quantity) {
      return Alert.alert('Pedido', 'Informe a quantidade.');
    }
    setSendingOrder(true);

    firestore()
      .collection('orders')
      .add({
        quantity,
        amount,
        pizza: pizza.name,
        size,
        table_number: tableNumber,
        status: 'Preparando',
        waiter_id: user?.id,
        image: pizza.photo_url,
      })
      .then(() => navigation.navigate('home'))
      .catch(() => {
        Alert.alert('Pedido', 'Não foi possível realizar o pedido.');
        setSendingOrder(false);
      });
  }

  useEffect(() => {
    if (paramsId) {
      firestore()
        .collection('pizzas')
        .doc(paramsId)
        .get()
        .then((response) => {
          setPizza(response.data() as PizzaResponse);
        })
        .catch(() => Alert.alert('Pedido', 'Não foi possível carregar o produto'));
    }
  }, [paramsId]);

  return (
    <>
      <Container>
        <ContentScroll>
          <Header>
            <ButtonBack onPress={handleGoBack} style={{ marginBottom: 108 }} />
          </Header>

          <Photo source={{ uri: pizza.photo_url }} />

          <Form>
            <Title>{pizza.name}</Title>
            <Label>Selecione um tamanho</Label>

            <Sizes>
              {pizzaTypes.map((item) => (
                <RadioButton
                  key={item.id}
                  title={item.name}
                  onPress={() => setSize(item.id)}
                  selected={size === item.id}
                />
              ))}
            </Sizes>

            <FormRow>
              <InputGroup>
                <Label>Número da mesa</Label>
                <Input keyboardType="numeric" onChangeText={setTableNumber} />
              </InputGroup>

              <InputGroup>
                <Label>Quantidade</Label>
                <Input
                  keyboardType="numeric"
                  onChangeText={(value) => setQuantity(Number(value))}
                />
              </InputGroup>
            </FormRow>

            <Price>Valor de R$ {amount}</Price>

            <Button title="Confirmar pedido" onPress={handleOrder} isLoading={sendingOrder} />
          </Form>
        </ContentScroll>
      </Container>
    </>
  );
}
