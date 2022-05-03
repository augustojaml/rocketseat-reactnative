import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';

export class FakeStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    return 'fake-file-created';
  }

  async delete(file: string, folder: string): Promise<void> {
    console.log('file-deleted');
  }
}
