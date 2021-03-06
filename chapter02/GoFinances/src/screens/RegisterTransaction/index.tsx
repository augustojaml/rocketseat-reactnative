import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';
import * as YUP from 'yup';
import { Button } from '../../global/components/Button';
import { CategorySelectButton } from '../../global/components/CategorySelectButton';
import { Header } from '../../global/components/Header';
import { TextInput } from '../../global/components/TextInput';
import { TransactionTypeButton } from '../../global/components/TransactionTypeButton';
import { categories, ICategory } from '../../global/utils/categories';
import { useTransaction } from '../../hooks/useTransaction';
import {
  CategoryFlatList,
  CategoryModalContainer,
  CategoryModalIcon,
  CategoryModalTitle,
  Container,
  FooterModal,
  FormContainer,
  FormFooter,
  FormInputText,
  ModalTitle,
  ScreenTitle,
  SeparatorModal,
  TransactionTypeContainer,
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
  const navigation = useNavigation();
  const { saveTransaction } = useTransaction();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [transactionType, setTransactionType] = useState<
    'positive' | 'negative'
  >();

  const [category, setCategory] = useState<ICategory>({
    key: 'category',
    name: 'Categoria',
  });

  const [showModal, setShowModal] = useState(false);

  function handleTransactionType(type: 'positive' | 'negative') {
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
    setTransactionType(undefined);
    reset();
  }

  async function handleSaveTransaction(form: IForm) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione uma categoria');
    }

    const data = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    await saveTransaction(data);
    clearForm();
    navigation.navigate('Dashboard');
  }

  return (
    <>
      <StatusBar style="light" />
      <KeyboardAvoidingView behavior="position" enabled>
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
                    onPress={() => handleTransactionType('positive')}
                    isActive={transactionType === 'positive'}
                  />
                  <TransactionTypeButton
                    title="Saida"
                    icon="arrow-down-circle"
                    type="down"
                    onPress={() => handleTransactionType('negative')}
                    isActive={transactionType === 'negative'}
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
      </KeyboardAvoidingView>

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
    </>
  );
}
