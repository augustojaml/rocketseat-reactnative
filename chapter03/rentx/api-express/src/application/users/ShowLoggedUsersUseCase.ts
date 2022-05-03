import { User } from '@domain/users/User';
import { IUsersRepository } from '@repositories/IUsersRepositories';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { inject, injectable } from 'tsyringe';

type IUserResponse = {
  id: string;
  name: string;
  email: string;
  driverLicense: string;
  avatar?: string | null;
};

const showLoggedUsersResponse = (user: User) => {
  return {
    id: user.id,
    name: user.props.name,
    email: user.props.email,
    driverLicense: user.props.driverLicense,
    avatar: user.props.avatar,
  };
};

@injectable()
export class ShowLoggedUsersUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute(userId: string): Promise<IUserResponse> {
    const findUser = await this.usersRepository.findById(userId);

    if (!findUser) {
      throw new AppError('Operation not allowed.', 401);
    }

    return showLoggedUsersResponse(findUser);
  }
}
