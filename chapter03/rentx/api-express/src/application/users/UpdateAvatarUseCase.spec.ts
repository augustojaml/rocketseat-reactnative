import { StorageFilesSupport } from '../../shared/supports/StorageFilesSupport';
import { UpdateAvatarUseCase } from './UpdateAvatarUseCase';
import { UsersInMemoryRepository } from '@test/repositories/UsersInMemoryRepository';
import { AuthUsersUseCase } from './AuthUsersUseCase';
import { CreateUsersUseCase } from './CreateUsersUseCase';
import { UpdateUsersUseCase } from './UpdateUsersUseCase';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';

let usersInMemory: UsersInMemoryRepository;
let createUsers: CreateUsersUseCase;
let authUsers: AuthUsersUseCase;
let updateAvatar: UpdateAvatarUseCase;
let fakeStorage: FakeStorageProvider;

describe('UpdateAvatarUseCase', () => {
  beforeEach(() => {
    usersInMemory = new UsersInMemoryRepository();
    fakeStorage = new FakeStorageProvider();
    createUsers = new CreateUsersUseCase(usersInMemory);
    authUsers = new AuthUsersUseCase(usersInMemory);
    updateAvatar = new UpdateAvatarUseCase(usersInMemory, fakeStorage);
  });
  it('should not be able to update avatar with invalid user', async () => {
    await expect(
      updateAvatar.execute({
        userId: 'fake-user-id',
        avatarFile: 'fake-avatar-file',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update avatar with valid user', async () => {
    await createUsers.execute({
      name: 'fake-name',
      email: 'fake-email@email.com',
      password: 'fake-password',
      driverLicense: 'fake-driverLicense',
    });

    const response = await authUsers.execute({
      email: 'fake-email@email.com',
      password: 'fake-password',
    });

    const update = await updateAvatar.execute({
      userId: response.user.id,
      avatarFile: 'fake-avatar-file',
    });

    expect(update).toEqual(`${StorageFilesSupport.paths.url}/avatar/fake-avatar-file`);
  });
});
