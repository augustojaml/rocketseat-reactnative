import { User } from '@domain/users/User';
import { ICreateUser, IUpdateUser, IUsersRepository } from '@repositories/IUsersRepositories';

export class UsersInMemoryRepository implements IUsersRepository {
  public repository: User[] = [];

  async create({ name, email, driverLicense, password }: ICreateUser): Promise<void> {
    const data = User.create({ name, email, driverLicense, password });
    this.repository.push(data);
  }

  async findByEmail(email: string): Promise<User | null> {
    const findUser = this.repository.find((user) => user.props.email === email);

    if (!findUser) {
      return null;
    }

    return findUser;
  }

  async findById(userId: string): Promise<User | null> {
    const findUser = this.repository.find((user) => user.id === userId);

    if (!findUser) {
      return null;
    }

    return findUser;
  }

  async update(user: IUpdateUser): Promise<User | null> {
    const findUser = this.repository.find((user) => user.id === user.id);

    if (!findUser) {
      return null;
    }

    const updateUser = User.create(
      {
        name: user.name ? user.name : findUser.props.name,
        email: user.email ? user.email : findUser.props.email,
        driverLicense: user.driverLicense ? user.driverLicense : findUser.props.driverLicense,
        password: user.password ? user.password : findUser.props.password,
      },
      user.id
    );

    return updateUser;
  }

  async updateAvatar(userId: string, avatarFile: string): Promise<string | null> {
    return 'http://fake-url-avatar/avatar.png';
  }
}
