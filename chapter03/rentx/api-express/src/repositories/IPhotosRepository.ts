import { Photo } from '@domain/cars/Photo';

export type ICreatePhoto = {
  carId: string;
  photo: string;
};

export interface IPhotosRepository {
  create({ carId, photo }: ICreatePhoto): Promise<void>;
  findByCarId(carId: string): Promise<Photo[]>;
}
