import { ButtonBack } from '@components/ButtonBack';
import { Photo } from '@components/Photo';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { Alert, Platform, ScrollView, View, TouchableOpacity } from 'react-native';

import {
  Container,
  DeleteLabel,
  Form,
  Header,
  InputGroup,
  InputGroupHeader,
  Label,
  MaxCharacters,
  PickerImageButton,
  Title,
  Upload,
} from './styled';
import { InputPrice } from '@components/InputPrice';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ProductNavigationProps } from 'src/routes';
import { ProductProps } from '@components/ProductCard';

type PizzaResponse = ProductProps & {
  photo_path: string;
  prices_sizes: {
    p: string;
    m: string;
    g: string;
  };
};

export function Product() {
  const routes = useRoute();
  const navigation = useNavigation();

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeP, setPriceSizeP] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeG, setPriceSizeG] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [photoPath, setPhotoPath] = useState('');

  const { id: paramsId } = routes.params as ProductNavigationProps;

  async function handlePickerImage() {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status === 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
      });

      if (!result.cancelled) {
        setImage(result.uri);
      }
    }
  }

  async function handleAddProduct() {
    if (!name.trim()) {
      return Alert.alert('Cadastro', 'Informe o nome');
    }

    if (!description.trim()) {
      return Alert.alert('Cadastro', 'Informe a descrição');
    }

    if (!image) {
      return Alert.alert('Cadastro', 'Selecione a imagem');
    }

    if (!priceSizeP || !priceSizeM || !priceSizeG) {
      return Alert.alert('Cadastro', 'Informe o preço de todos os tamanhos');
    }

    setIsLoading(true);

    const fileName = new Date().getTime();
    const reference = storage().ref(`/pizzas/${fileName}.png`);

    await reference.putFile(image);

    const photo_url = await reference.getDownloadURL();

    firestore()
      .collection('pizzas')
      .add({
        name,
        name_insensitive: name.toLowerCase().trim(),
        description,
        prices_sizes: {
          p: priceSizeP,
          m: priceSizeM,
          g: priceSizeG,
        },
        photo_url,
        photo_path: reference.fullPath,
      })
      .then(() => {
        navigation.navigate('home');
      })
      .catch(() => {
        Alert.alert('Cadastro', 'Não foi possível cadastrar a pizza');
      });

    setIsLoading(false);
  }

  function handleDelete() {
    firestore()
      .collection('pizzas')
      .doc(paramsId)
      .delete()
      .then(() => {
        storage()
          .ref(photoPath)
          .delete()
          .then(() => navigation.navigate('home'));
      });

    // console.log(123);
  }

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    if (paramsId) {
      firestore()
        .collection('pizzas')
        .doc(paramsId)
        .get()
        .then((response) => {
          const product = response.data() as PizzaResponse;
          setName(product.name);
          setImage(product.photo_url);
          setDescription(product.description);
          setPriceSizeP(product.prices_sizes.p);
          setPriceSizeM(product.prices_sizes.m);
          setPriceSizeG(product.prices_sizes.g);
          setPhotoPath(product.photo_path);
        });
    }
  }, [paramsId]);

  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header>
            <ButtonBack onPress={handleGoBack} />
            <Title>Cadastrar</Title>
            {paramsId ? (
              <TouchableOpacity onPress={handleDelete}>
                <DeleteLabel>Deletar</DeleteLabel>
              </TouchableOpacity>
            ) : (
              <View style={{ width: 20 }} />
            )}
          </Header>
          <Upload>
            <Photo uri={image} />

            {!paramsId && (
              <PickerImageButton title="carregar" type="secondary" onPress={handlePickerImage} />
            )}
          </Upload>

          <Form>
            <InputGroup>
              <Label>None</Label>
              <Input onChangeText={setName} value={name} />
            </InputGroup>

            <InputGroup>
              <InputGroupHeader>
                <Label>Descrição</Label>
                <MaxCharacters>0 de 60 caracteres</MaxCharacters>
              </InputGroupHeader>

              <Input
                multiline
                maxLength={60}
                style={{ height: 80 }}
                onChangeText={setDescription}
                value={description}
              />
            </InputGroup>

            <InputGroup>
              <Label>Tamanhos e preços</Label>
              <InputPrice size="P" onChangeText={setPriceSizeP} value={priceSizeP} />
              <InputPrice size="M" onChangeText={setPriceSizeM} value={priceSizeM} />
              <InputPrice size="G" onChangeText={setPriceSizeG} value={priceSizeG} />
            </InputGroup>
            {!paramsId && (
              <Button title="Cadastrar pizza" isLoading={isLoading} onPress={handleAddProduct} />
            )}
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}
