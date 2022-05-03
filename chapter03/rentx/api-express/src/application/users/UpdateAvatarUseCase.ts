import { IUsersRepository } from '@repositories/IUsersRepositories';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { StorageFilesSupport } from '@shared/supports/StorageFilesSupport';
import { inject, injectable } from 'tsyringe';

type IUpdateAvatarRequest = {
  userId: string;
  avatarFile: string;
};

@injectable()
export class UpdateAvatarUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository,

    @inject('IStorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute({ userId, avatarFile }: IUpdateAvatarRequest): Promise<string> {
    const findUser = await this.usersRepository.findById(userId);

    if (!findUser) {
      throw new AppError('Operation not allowed');
    }

    if (findUser.props.avatar) {
      await this.storageProvider.delete(findUser.props.avatar, 'avatar');
    }

    await this.storageProvider.save(avatarFile, 'avatar');

    findUser.props.avatar = avatarFile;

    await this.usersRepository.updateAvatar(userId, avatarFile);

    return `${StorageFilesSupport.paths.url}/avatar/${findUser.props.avatar}`;
  }
}
