import { UsersInMemoryRepository } from '@test/repositories/UsersInMemoryRepository';
import { AuthUsersUseCase } from './AuthUsersUseCase';
import { CreateUsersUseCase } from './CreateUsersUseCase';
import { UpdateUsersUseCase } from './UpdateUsersUseCase';

let usersInMemory: UsersInMemoryRepository;
let createUsers: CreateUsersUseCase;
let authUsers: AuthUsersUseCase;
let updateUsers: UpdateUsersUseCase;

describe('UpdateUsersUseCase', () => {
  beforeEach(() => {
    usersInMemory = new UsersInMemoryRepository();
    createUsers = new CreateUsersUseCase(usersInMemory);
    authUsers = new AuthUsersUseCase(usersInMemory);
    updateUsers = new UpdateUsersUseCase(usersInMemory);
  });

  it('should be able to update fields user', async () => {
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

    const updateFakeUser = {
      id: response.user.id,
      name: 'update-fake-name',
      email: 'update-fake-email@email.com',
      password: 'fake-password',
    };

    const updateUser = await updateUsers.execute(updateFakeUser);

    expect(updateUser).toEqual(
      expect.objectContaining({
        name: 'update-fake-name',
        email: 'update-fake-email@email.com',
      })
    );
  });
});
