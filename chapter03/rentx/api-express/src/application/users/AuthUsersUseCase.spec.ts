import { AppError } from '@shared/infra/http/middlewares/AppError';
import { UsersInMemoryRepository } from '@test/repositories/UsersInMemoryRepository';
import { AuthUsersUseCase } from './AuthUsersUseCase';
import { CreateUsersUseCase } from './CreateUsersUseCase';

let usersInMemory: UsersInMemoryRepository;
let createUsers: CreateUsersUseCase;
let authUsers: AuthUsersUseCase;

describe('AuthUsersUseCase', () => {
  beforeEach(() => {
    usersInMemory = new UsersInMemoryRepository();
    createUsers = new CreateUsersUseCase(usersInMemory);
    authUsers = new AuthUsersUseCase(usersInMemory);
  });

  it('should not be able to authenticate user with invalid email', async () => {
    await createUsers.execute({
      name: 'fake-name',
      email: 'fake-email@email.com',
      password: 'fake-password',
      driverLicense: 'fake-driverLicense',
    });

    await expect(
      authUsers.execute({
        email: 'invalid-fake-email@email.com',
        password: 'fake-password',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to authenticate user with invalid password', async () => {
    await createUsers.execute({
      name: 'fake-name',
      email: 'fake-email@email.com',
      password: 'fake-password',
      driverLicense: 'fake-driverLicense',
    });

    await expect(
      authUsers.execute({
        email: 'fake-email@email.com',
        password: 'invalid-fake-password',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to authenticate user with valid password', async () => {
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

    expect(response).toHaveProperty('token');
  });
});
