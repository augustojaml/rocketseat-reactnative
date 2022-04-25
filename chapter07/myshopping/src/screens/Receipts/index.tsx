import React, { useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';

import { Container, PhotoInfo } from './styles';
import { Header } from '../../components/Header';
import { Photo } from '../../components/Photo';
import { File, FileProps } from '../../components/File';
import { storage } from '../../services/firestore';

export function Receipts() {
  const [photos, setPhotos] = useState<FileProps[]>([]);
  const [photoSelected, setPhotoSelected] = useState('');
  const [photoInfo, setPhotoInfo] = useState('');

  async function handleShowImage(path: string) {
    const urlImage = await storage().ref(path).getDownloadURL();
    const info = await storage().ref(path).getMetadata();
    setPhotoSelected(urlImage);
    setPhotoInfo(`Upload realizado em ${info.timeCreated}`);
  }

  async function handleDeleteImage(path: string) {
    storage()
      .ref(path)
      .delete()
      .then(async () => {
        Alert.alert('Delete', 'Image deletada com sucesso');
        await fetchUploadImages();
      })
      .catch((error) => {
        console.log(error.message);
        Alert.alert('Error', 'Houve um erro ao deletar imagem');
      });
  }

  async function fetchUploadImages() {
    storage()
      .ref('images')
      .list()
      .then((response) => {
        let files: FileProps[] = [];
        response.items.forEach((file) => {
          files.push({
            name: file.name,
            path: file.fullPath,
          });
        });
        setPhotos(files);
      });
  }

  useEffect(() => {
    (async () => {
      await fetchUploadImages();
    })();
  }, []);

  return (
    <Container>
      <Header title="Comprovantes" />

      <Photo uri={photoSelected} />

      <PhotoInfo>{photoInfo}</PhotoInfo>

      <FlatList
        data={photos}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <File
            data={item}
            onShow={() => handleShowImage(item.path)}
            onDelete={() => handleDeleteImage(item.path)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
        style={{ width: '100%', padding: 24 }}
      />
    </Container>
  );
}
