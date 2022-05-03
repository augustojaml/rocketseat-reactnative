import { User } from '@domain/users/User';
import { IUpdateUser, IUsersRepository } from '@repositories/IUsersRepositories';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { PasswordSupport } from '@shared/supports/PasswordSupport';
import { inject, injectable } from 'tsyringe';

export type IUpdateUserResponse = {
  id: string;
  name: string;
  email: string;
  driverLicense: string;
  avatar?: string | null;
};

const updateUsersResponse = (user: User) => {
  return {
    id: user.id,
    name: user.props.name,
    email: user.props.email,
    driverLicense: user.props.driverLicense,
    avatar: user.props.avatar,
  };
};

@injectable()
export class UpdateUsersUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(data: IUpdateUser): Promise<IUpdateUserResponse | null> {
    const findUser = await this.usersRepository.findById(data.id);

    if (!findUser) {
      throw new AppError('Invalid user or operation not allowed');
    }

    let comparePassword = true;

    if (data.password) {
      comparePassword = await PasswordSupport.compareHash(data.password!, findUser.props.password);
    }

    if (!comparePassword) {
      throw new AppError('Invalid user or operation not allowed');
    }

    if (data.newPassword) {
      data.newPassword = await PasswordSupport.generateHash(data.newPassword);
    }

    const updateUser = await this.usersRepository.update({
      id: data.id,
      name: data.name,
      email: data.email,
      driverLicense: data.driverLicense,
      password: data.newPassword ? data.newPassword : findUser.props.password,
    });

    if (!updateUser) {
      return null;
    }

    return updateUsersResponse(updateUser);
  }
}
