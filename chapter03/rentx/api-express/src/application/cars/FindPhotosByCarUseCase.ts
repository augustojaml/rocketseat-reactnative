import { Photo } from '@domain/cars/Photo';
import { ICarsRepository } from '@repositories/ICarsRepository';
import { IPhotosRepository } from '@repositories/IPhotosRepository';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { inject, injectable } from 'tsyringe';

type FindPhotosByCarResponse = {
  id: string;
  carId: string;
  photo: string;
};

const findPhotosByCar = (photos: Photo[]) => {
  return photos.map((photo) => {
    return {
      id: photo.id,
      carId: photo.props.carId,
      photo: photo.props.photo,
    };
  });
};

@injectable()
export class FindPhotosByCarUseCase {
  constructor(
    @inject('ICarsRepository')
    private carsRepository: ICarsRepository,

    @inject('IPhotosRepository')
    private photosRepository: IPhotosRepository
  ) {}

  async execute(carId: string): Promise<FindPhotosByCarResponse[]> {
    const findCar = await this.carsRepository.findById(carId);

    if (!findCar) {
      throw new AppError('Car not registered');
    }

    const photos = await this.photosRepository.findByCarId(findCar.id);

    return findPhotosByCar(photos);
  }
}
