import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Control, Controller, useForm } from 'react-hook-form';
import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../global/components/Button';
import { CategorySelectButton } from '../../global/components/CategorySelectButton';
import { Header } from '../../global/components/Header';
import { TextInput } from '../../global/components/TextInput';
import { TransactionTypeButton } from '../../global/components/TransactionTypeButton';
import { categories, ICategory } from '../../global/utils/categories';
import {
  Container,
  ScreenTitle,
  FormContainer,
  FormInputText,
  FormFooter,
  TransactionTypeContainer,
  ModalTitle,
  CategoryFlatList,
  CategoryModalIcon,
  CategoryModalContainer,
  CategoryModalTitle,
  SeparatorModal,
  FooterModal,
} from './styled';

const schema = YUP.object().shape({
  name: YUP.string().required('Nome é obrigatório'),
  amount: YUP.number()
    .typeError('Informe um valor numérico')
    .positive('O valor não pode ser negativo')
    .required('Nome é obrigatório'),
});

interface IForm {
  [x: string]: any;
}

export function RegisterTransaction() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [transactionType, setTransactionType] = useState<'up' | 'down' | ''>(
    ''
  );

  const [category, setCategory] = useState<ICategory>({
    key: 'category',
    name: 'Categoria',
  });

  const [showModal, setShowModal] = useState(false);

  function handleTransactionType(type: 'up' | 'down' | '') {
    setTransactionType(type);
  }

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function handleSelectCategory(item: ICategory) {
    setCategory({
      key: item.key,
      name: item.name,
    });
  }

  function clearForm() {
    setCategory({
      key: 'category',
      name: 'Categoria',
    });
    setTransactionType('');
    reset();
  }

  function handleSaveTransaction(form: IForm) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione uma categoria');
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key,
    };

    console.log(data);
    clearForm();
  }

  return (
    <>
      <StatusBar style="light" />
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Header>
              <ScreenTitle>Cadastrar</ScreenTitle>
            </Header>
            <FormContainer>
              <FormInputText>
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      value={value}
                      placeholder="Nome"
                      autoCapitalize="sentences"
                      autoCorrect={false}
                      message={errors.name && errors.name.message}
                    />
                  )}
                />

                <Controller
                  control={control}
                  name="amount"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      onChangeText={onChange}
                      value={value}
                      placeholder="Preço"
                      keyboardType="numeric"
                      message={errors.amount && errors.amount.message}
                    />
                  )}
                />

                <TransactionTypeContainer>
                  <TransactionTypeButton
                    title="Entrada"
                    icon="arrow-up-circle"
                    type="up"
                    onPress={() => handleTransactionType('up')}
                    isActive={transactionType === 'up'}
                  />
                  <TransactionTypeButton
                    title="Saida"
                    icon="arrow-down-circle"
                    type="down"
                    onPress={() => handleTransactionType('down')}
                    isActive={transactionType === 'down'}
                  />
                </TransactionTypeContainer>

                <CategorySelectButton
                  title={category.name}
                  onPress={handleToggleModal}
                />
              </FormInputText>
              <FormFooter>
                <Button
                  title="Salvar"
                  onPress={handleSubmit(handleSaveTransaction)}
                />
              </FormFooter>
            </FormContainer>
          </Container>
        </TouchableWithoutFeedback>
        <Modal visible={showModal}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <Header
              height={80}
              flexDirection="row"
              justifyContent="center"
              alignItems="flex-end"
            >
              <ModalTitle>Selecione uma categoria</ModalTitle>
            </Header>
            <CategoryFlatList
              data={categories}
              keyExtractor={(item) => item.key}
              ItemSeparatorComponent={SeparatorModal}
              renderItem={({ item }) => (
                <>
                  <CategoryModalContainer
                    color={item.color}
                    onPress={() => handleSelectCategory(item)}
                    active={category.key === item.key}
                  >
                    <CategoryModalIcon
                      color={item.color}
                      name={item.icon}
                      active={category.key === item.key}
                    />
                    <CategoryModalTitle
                      color={item.color}
                      active={category.key === item.key}
                    >
                      {item.name}
                    </CategoryModalTitle>
                  </CategoryModalContainer>
                </>
              )}
            />
            <FooterModal>
              <Button title="Seleciona" onPress={handleToggleModal} />
            </FooterModal>
          </GestureHandlerRootView>
        </Modal>
      </KeyboardAvoidingView>
    </>
  );
}
