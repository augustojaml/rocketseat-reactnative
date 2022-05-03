import { User } from '@domain/users/User';
import { IUsersRepository } from '@repositories/IUsersRepositories';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { AuthUsersSupport } from '@shared/supports/AuthUsersSupport';
import { PasswordSupport } from '@shared/supports/PasswordSupport';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

interface ICredentialsRequest {
  email: string;
  password: string;
}

export type IAuthUsersResponse = {
  user: {
    id: string;
    name: string;
    email: string;
    driverLicense: string;
    avatar: string | undefined | null;
  };
  token: string;
};

const authUsersResponse = (user: User, token: string) => {
  return {
    user: {
      id: user.id,
      name: user.props.name,
      email: user.props.email,
      driverLicense: user.props.driverLicense,
      avatar: user.props.avatar,
    },
    token: token,
  };
};

@injectable()
export class AuthUsersUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: ICredentialsRequest): Promise<IAuthUsersResponse> {
    const findUser = await this.usersRepository.findByEmail(email);

    if (!findUser) {
      throw new AppError('User or password invalid');
    }

    const comparePassword = await PasswordSupport.compareHash(password, findUser.props.password);

    if (!comparePassword) {
      throw new AppError('User or password invalid');
    }

    const token = sign({}, AuthUsersSupport.tokenHash, {
      subject: findUser.id,
      expiresIn: AuthUsersSupport.tokenExpireIn,
    });

    return authUsersResponse(findUser, token);
  }
}
