import { AppError } from '@shared/infra/http/middlewares/AppError';
import { UsersInMemoryRepository } from '@test/repositories/UsersInMemoryRepository';
import { AuthUsersUseCase } from './AuthUsersUseCase';
import { CreateUsersUseCase } from './CreateUsersUseCase';
import { ShowLoggedUsersUseCase } from './ShowLoggedUsersUseCase';

let usersInMemory: UsersInMemoryRepository;
let createUsers: CreateUsersUseCase;
let authUsers: AuthUsersUseCase;
let showLoggedUsers: ShowLoggedUsersUseCase;

describe('ShowLoggedUsersUseCase', () => {
  beforeEach(() => {
    usersInMemory = new UsersInMemoryRepository();
    createUsers = new CreateUsersUseCase(usersInMemory);
    authUsers = new AuthUsersUseCase(usersInMemory);
    showLoggedUsers = new ShowLoggedUsersUseCase(usersInMemory);
  });

  it('should not be able to show info user with invalid credentials', async () => {
    await expect(showLoggedUsers.execute('fake-id')).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to show info logged user', async () => {
    await createUsers.execute({
      name: 'fake-name',
      email: 'fake-email@email.com',
      password: 'fake-password',
      driverLicense: 'fake-driverLicense',
    });

    const authUser = await authUsers.execute({
      email: 'fake-email@email.com',
      password: 'fake-password',
    });

    const response = await showLoggedUsers.execute(authUser.user.id);

    expect(response).toHaveProperty('id');
  });
});
