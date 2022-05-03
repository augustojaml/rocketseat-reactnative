import { Photo } from '@domain/cars/Photo';
import { ICreatePhoto, IPhotosRepository } from '@repositories/IPhotosRepository';

export class PhotosInMemoryRepository implements IPhotosRepository {
  private repository: Photo[] = [];

  async create(data: ICreatePhoto): Promise<void> {
    this.repository.push(Photo.create(data));
  }

  async findByCarId(carId: string): Promise<Photo[]> {
    const findCar = this.repository.filter((photo) => photo.props.carId === carId);
    return findCar;
  }
}
