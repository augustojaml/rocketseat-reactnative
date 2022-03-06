import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from 'react-native';

import * as YUP from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button } from '../../components/form/Button';
import { CategorySelectButton } from '../../components/form/CategorySelectButton';
import { CategorySelectModal } from '../../components/form/CategorySelectModal';
import { InputForm } from '../../components/form/InputForm';
import { TransactionTypeButton } from '../../components/form/TransactionTypeButton';

import {
  Container,
  Header,
  Title,
  Fields,
  Form,
  TransactionTypeContainer,
} from './styled';

interface FormData {
  name: string;
  amount: string;
}

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(
      YUP.object().shape({
        name: YUP.string().required('Informe o nome'),
        amount: YUP.number()
          .typeError('Informe um valor numérico')
          .positive('O valor não pode ser negativo')
          .required('Informe o valor'),
      })
    ),
  });

  function handleTransactionType(type: 'up' | 'down') {
    setTransactionType(type);
  }

  function handleCloseSelectCategoryModal() {
    setCategoryModalOpen(false);
  }

  function handleOpenSelectCategoryModal() {
    setCategoryModalOpen(true);
  }

  function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação');
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria');
    }

    const data = {
      name: form.name,
      amount: form.amount,
      category: category.key,
      transactionType,
    };

    console.log(data);
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Cadastro</Title>
          </Header>

          <Form>
            <Fields>
              <InputForm
                control={control}
                name="name"
                error={errors.name && errors.name.message}
                placeholder="Nome"
                autoCapitalize="sentences"
                autoCorrect={false}
              />
              <InputForm
                control={control}
                name="amount"
                error={errors.amount && errors.amount.message}
                placeholder="Preço"
                keyboardType="numeric"
              />
              <TransactionTypeContainer>
                <TransactionTypeButton
                  title="Entrada"
                  type="up"
                  onPress={() => handleTransactionType('up')}
                  isActive={transactionType === 'up'}
                />
                <TransactionTypeButton
                  title="Saida"
                  type="down"
                  onPress={() => handleTransactionType('down')}
                  isActive={transactionType === 'down'}
                />
              </TransactionTypeContainer>
              <CategorySelectButton
                title={category.name}
                onPress={handleOpenSelectCategoryModal}
              />
            </Fields>
            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
          </Form>
          <Modal visible={categoryModalOpen}>
            <CategorySelectModal
              category={category}
              setCategory={setCategory}
              closeSelectCategory={handleCloseSelectCategoryModal}
            />
          </Modal>
        </Container>
      </TouchableWithoutFeedback>
    </>
  );
}

/**
 category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
 */
