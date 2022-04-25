import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { styles } from './styles';
import { Product, ProductProps } from '../Product';
import { firestore } from '../../services/firestore';

export function ShoppingList() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  // BUSCANDO DOCUMENTOS NO-REALTIME
  // useEffect(() => {
  //   firestore()
  //     .collection('products')
  //     .get()
  //     .then((response) => {
  //       const data = response.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       }) as ProductProps[];

  //       setProducts(data);
  //     })
  //     .catch((error) => console.log(error.message));
  // }, []);

  // RECUPERANDO APENAS UM DOCUMENTO
  // useEffect(() => {
  //   firestore()
  //     .collection('products')
  //     .doc('product1650841982116')
  //     .get()
  //     .then((response) => {
  //       const data = {
  //         id: response.id,
  //         ...response.data(),
  //       };
  //       console.log(data);
  //     });
  // }, []);

  // // REALTIME (ATUALIZAÇÃO EM TEMPO REAL)
  // // REALIZAR CONSULTAS
  // useEffect(() => {
  //   const subscribe = firestore()
  //     .collection('products')
  //     .where('quantity', '!=', 3)
  //     .onSnapshot((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       }) as ProductProps[];
  //       setProducts(data);
  //     });

  //   return () => subscribe();
  // }, []);

  // REALTIME (ATUALIZAÇÃO EM TEMPO REAL)
  // LIMITAR CONSULTA
  // useEffect(() => {
  //   const subscribe = firestore()
  //     .collection('products')
  //     .limit(1)
  //     .onSnapshot((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       }) as ProductProps[];
  //       setProducts(data);
  //     });

  //   return () => subscribe();
  // }, []);

  // // REALTIME (ATUALIZAÇÃO EM TEMPO REAL)
  // // ORDENAR CONSULTA
  // useEffect(() => {
  //   const subscribe = firestore()
  //     .collection('products')
  //     .orderBy('quantity')
  //     .onSnapshot((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       }) as ProductProps[];
  //       setProducts(data);
  //     });

  //   return () => subscribe();
  // }, []);

  // // REALTIME (ATUALIZAÇÃO EM TEMPO REAL)
  // // FILTRO
  // useEffect(() => {
  //   const subscribe = firestore()
  //     .collection('products')
  //     .orderBy('quantity')
  //     .startAfter(2)
  //     .endAt(3)
  //     .onSnapshot((querySnapshot) => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data(),
  //         };
  //       }) as ProductProps[];
  //       setProducts(data);
  //     });

  //   return () => subscribe();
  // }, []);

  // REALTIME (ATUALIZAÇÃO EM TEMPO REAL)
  useEffect(() => {
    const subscribe = firestore()
      .collection('products')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        }) as ProductProps[];
        setProducts(data);
      });

    return () => subscribe();
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}
