import { field } from '@nozbe/watermelondb/decorators';
import { Model } from '@nozbe/watermelondb';

export class User extends Model {
  static table = 'users';

  @field('userId')
  userId: string;

  @field('name')
  name: string;

  @field('email')
  email: string;

  @field('driverLicense')
  driverLicense: string;

  @field('avatar')
  avatar: string;

  @field('token')
  token: string;
}
