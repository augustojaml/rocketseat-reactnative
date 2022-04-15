import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { ScrollView } from 'react-native';
import { MainTextRegular, MainTitleBold } from '../../../../_shared/components/fonts';
import { MainForm, MainHeader, MainScrollView } from '../../../../_shared/components/views';

import { Container } from './styled';

export function RegisterUserStepOne() {
  const scrollView = useRef<ScrollView>(null);
  return (
    <>
      <Container>
        <StatusBar translucent style="dark" />
        <MainHeader />
        <MainScrollView ref={scrollView}>
          <MainTitleBold size={20} marginTop={30}>
            1. Dados
          </MainTitleBold>
          <MainForm marginTop={64}></MainForm>
        </MainScrollView>
      </Container>
    </>
  );
}
