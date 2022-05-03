import { Car, FuelTypeProps } from '@domain/cars/Car';
import { ICarsRepository } from '@repositories/ICarsRepository';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { inject, injectable } from 'tsyringe';

type IUpdateCarsRequest = {
  id: string;
  name?: string;
  brand?: string;
  about?: string;
  period?: string;
  price?: number;
  fuelType?: FuelTypeProps;
  licensePlate?: string;
  thumbnail?: string;
  available?: boolean;
};

type IUpdateCarsResponse = {
  id: string;
  name: string;
  brand: string;
  about: string;
  period: string;
  price: number;
  fuelType: string;
  licensePlate: string;
  thumbnail: string | null | undefined;
  available?: boolean;
};

const updateCarsResponse = (data: Car | null) => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    name: data.props.name,
    brand: data.props.brand,
    about: data.props.about,
    period: data.props.period,
    price: data.props.price,
    fuelType: data.props.fuelType,
    licensePlate: data.props.licensePlate,
    thumbnail: data.props.thumbnail,
    available: data.props.available,
  };
};

@injectable()
export class UpdateCarsUseCase {
  constructor(
    @inject('ICarsRepository')
    private carsRepository: ICarsRepository,

    @inject('IStorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute(data: IUpdateCarsRequest): Promise<IUpdateCarsResponse | null> {
    const findCar = await this.carsRepository.findById(data.id);

    if (!findCar) {
      throw new AppError('Invalid car or operation not allowed');
    }

    if (data.thumbnail && findCar.props.thumbnail) {
      await this.storageProvider.delete(findCar.props.thumbnail, 'cars');
      await this.storageProvider.save(data.thumbnail!, 'cars');
    }

    const updateCar = await this.carsRepository.updateCar(data);

    return updateCarsResponse(updateCar);
  }
}
