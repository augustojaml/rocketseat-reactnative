import { container } from 'tsyringe';
import { IStorageProvider } from './StorageProvider/IStorageProvider';
import { LocalStorageProvider } from './StorageProvider/LocalStorageProvider';

const diskStorage = {
  local: LocalStorageProvider,
};

container.registerSingleton<IStorageProvider>('IStorageProvider', diskStorage['local']);
