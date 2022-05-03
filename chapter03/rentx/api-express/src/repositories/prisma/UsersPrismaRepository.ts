import { User } from '@domain/users/User';
import { ICreateUser, IUpdateUser, IUsersRepository } from '@repositories/IUsersRepositories';
import { prisma } from '@services/prisma';
import { StorageFilesSupport } from '@shared/supports/StorageFilesSupport';

export class UsersPrismaRepository implements IUsersRepository {
  async create({ name, email, driverLicense, password }: ICreateUser): Promise<void> {
    const data = User.create({ name, email, driverLicense, password });

    await prisma.users.create({
      data: {
        id: data.id,
        ...data.props,
      },
    });
  }
  async findByEmail(email: string): Promise<User | null> {
    const findUser = await prisma.users.findFirst({
      where: {
        email,
      },
    });

    if (!findUser) {
      return null;
    }

    const { id, ...props } = findUser;

    const user = User.create(props, findUser.id);

    return user;
  }

  async findById(userId: string): Promise<User | null> {
    const findUser = await prisma.users.findFirst({
      where: {
        id: userId,
      },
    });

    if (!findUser) {
      return null;
    }

    const { id, ...props } = findUser;

    const user = User.create(props, findUser.id);

    return user;
  }

  async update(user: IUpdateUser): Promise<User | null> {
    const findUser = await this.findById(user.id);

    if (!findUser) {
      return null;
    }

    const updateUser = await prisma.users.update({
      where: { id: user.id },
      data: {
        name: user.name ? user.name : findUser.props.name,
        email: user.email ? user.email : findUser.props.email,
        driverLicense: user.driverLicense ? user.driverLicense : findUser.props.driverLicense,
        password: user.password ? user.password : findUser.props.password,
      },
    });

    const { id, ...props } = updateUser;

    const update = User.create(props, updateUser.id);

    return update;
  }

  async updateAvatar(userId: string, avatarFile: string): Promise<string | null> {
    const findUser = await this.findById(userId);

    if (!findUser) {
      return null;
    }

    await prisma.users.update({
      where: { id: userId },
      data: {
        avatar: avatarFile,
      },
    });

    return `${StorageFilesSupport.paths.url}/avatar/${avatarFile}`;
  }
}
