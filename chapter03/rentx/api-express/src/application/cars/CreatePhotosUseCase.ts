import { ICarsRepository } from '@repositories/ICarsRepository';
import { IPhotosRepository } from '@repositories/IPhotosRepository';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { inject, injectable } from 'tsyringe';

export type ICreatePhotoRequest = {
  carId: string;
  photos: string[];
};

@injectable()
export class CreatePhotosUseCase {
  constructor(
    @inject('ICarsRepository')
    private carsRepository: ICarsRepository,

    @inject('IPhotosRepository')
    private photosRepository: IPhotosRepository,

    @inject('IStorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute(data: ICreatePhotoRequest): Promise<void> {
    const findCar = await this.carsRepository.findById(data.carId);

    if (!findCar) {
      throw new AppError('Car not registered');
    }

    data.photos &&
      data.photos.map(async (photo) => {
        await this.storageProvider.save(photo, 'cars');
        await this.photosRepository.create({ carId: data.carId, photo: photo });
      });
  }
}
