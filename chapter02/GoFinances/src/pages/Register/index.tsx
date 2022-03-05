import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Button } from '../../components/form/Button';
import { CategorySelectButton } from '../../components/form/CategorySelectButton';
import { CategorySelectModal } from '../../components/form/CategorySelectModal';
import { Input } from '../../components/form/Input';
import { TransactionTypeButton } from '../../components/form/TransactionTypeButton';

import { Container, Header, Title, Fields, Form, TransactionTypeContainer } from './styled';

export function Register() {
  const [transactionType, setTransactionType] = useState('');
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
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

  return (
    <>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <Input placeholder="Nome" />
            <Input placeholder="Preço" />
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
            <CategorySelectButton title={category.name} onPress={handleOpenSelectCategoryModal} />
          </Fields>
          <Button title="Enviar" />
        </Form>
        <Modal visible={categoryModalOpen}>
          <CategorySelectModal
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleCloseSelectCategoryModal}
          />
        </Modal>
      </Container>
    </>
  );
}

/**
 category: string;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
 */
