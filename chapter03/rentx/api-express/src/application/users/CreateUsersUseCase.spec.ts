import { AppError } from '@shared/infra/http/middlewares/AppError';
import { UsersInMemoryRepository } from '@test/repositories/UsersInMemoryRepository';
import { CreateUsersUseCase } from './CreateUsersUseCase';

let usersInMemory: UsersInMemoryRepository;
let createUsers: CreateUsersUseCase;

describe('CreateUsersUseCase', () => {
  beforeEach(() => {
    usersInMemory = new UsersInMemoryRepository();
    createUsers = new CreateUsersUseCase(usersInMemory);
  });

  it('should not be able to create user with existent user email', async () => {
    await createUsers.execute({
      name: 'fake-name',
      email: 'fake-email@email.com',
      password: 'fake-password',
      driverLicense: 'fake-driverLicense',
    });

    await expect(
      createUsers.execute({
        name: 'fake-name',
        email: 'fake-email@email.com',
        password: 'fake-password',
        driverLicense: 'fake-driverLicense',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create new user', async () => {
    expect(
      createUsers.execute({
        name: 'fake-name',
        email: 'fake-email@email.com',
        password: 'fake-password',
        driverLicense: 'fake-driverLicense',
      })
    ).not.toBeInstanceOf(AppError);
  });
});
