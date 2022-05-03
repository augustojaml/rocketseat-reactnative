import fs from 'fs';
import { resolve } from 'path';
import { StorageFilesSupport } from '@shared/supports/StorageFilesSupport';
import { IStorageProvider } from './IStorageProvider';

export class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    await fs.promises.rename(
      resolve(`${StorageFilesSupport.paths.storage}/${folder}`, file),
      resolve(`${StorageFilesSupport.paths.storage}/${folder}`, file)
    );
    return file;
  }

  async delete(file: string, folder: string): Promise<void> {
    const filename = resolve(`${StorageFilesSupport.paths.storage}/${folder}`, file);
    try {
      await fs.promises.stat(filename);
    } catch {
      return;
    }
    await fs.promises.unlink(filename);
  }
}
