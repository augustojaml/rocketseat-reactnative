import { IUsersRepository } from '@repositories/IUsersRepositories';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { PasswordSupport } from '@shared/supports/PasswordSupport';
import { inject, injectable } from 'tsyringe';

export type CreateUserRequest = {
  name: string;
  email: string;
  driverLicense: string;
  password: string;
};

@injectable()
export class CreateUsersUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, driverLicense, password }: CreateUserRequest): Promise<void> {
    const findUser = await this.usersRepository.findByEmail(email);

    if (findUser) {
      throw new AppError('User already exists');
    }

    const hashPassword = await PasswordSupport.generateHash(password);

    await this.usersRepository.create({ name, email, driverLicense, password: hashPassword });
  }
}
