import { ButtonBack } from '@components/ButtonBack';
import { Photo } from '@components/Photo';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

import { Alert, Platform, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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

export function Product() {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priceSizeP, setPriceSizeP] = useState('');
  const [priceSizeM, setPriceSizeM] = useState('');
  const [priceSizeG, setPriceSizeG] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
        Alert.alert('Cadastro', 'Pizza cadastrada com sucesso');
      })
      .catch(() => {
        Alert.alert('Cadastro', 'Não foi possível cadastrar a pizza');
      });

    setIsLoading(false);
  }

  return (
    <>
      <StatusBar translucent style="light" backgroundColor="transparent" />
      <Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header>
            <ButtonBack onPress={() => {}} />
            <Title>Cadastrar</Title>
            <TouchableOpacity>
              <DeleteLabel>Deletar</DeleteLabel>
            </TouchableOpacity>
          </Header>
          <Upload>
            <Photo uri={image} />
            <PickerImageButton title="carregar" type="secondary" onPress={handlePickerImage} />
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

            <Button title="Cadastrar pizza" isLoading={isLoading} onPress={handleAddProduct} />
          </Form>
        </ScrollView>
      </Container>
    </>
  );
}
