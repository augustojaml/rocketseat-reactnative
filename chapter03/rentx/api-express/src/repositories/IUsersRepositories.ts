import { User } from '@domain/users/User';

export type ICreateUser = {
  name: string;
  email: string;
  driverLicense: string;
  password: string;
};

export type IUpdateUser = {
  id: string;
  name?: string;
  email?: string;
  driverLicense?: string;
  password?: string;
  newPassword?: string;
};

export interface IUsersRepository {
  create({ name, email, driverLicense, password }: ICreateUser): Promise<void>;
  findByEmail(email: string): Promise<User | null>;
  findById(userId: string): Promise<User | null>;
  update(user: IUpdateUser): Promise<User | null>;
  updateAvatar(userId: string, avatarFile: string): Promise<string | null>;
}
