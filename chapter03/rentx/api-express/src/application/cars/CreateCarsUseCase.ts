import { FuelTypeProps } from '@domain/cars/Car';
import { ICarsRepository } from '@repositories/ICarsRepository';
import { IStorageProvider } from '@shared/container/providers/StorageProvider/IStorageProvider';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { inject, injectable } from 'tsyringe';

export type ICreateCarsRequest = {
  name: string;
  brand: string;
  about: string;
  period: string;
  price: number;
  fuelType: FuelTypeProps;
  licensePlate: string;
  thumbnail?: string;
};

@injectable()
export class CreateCarsUseCase {
  constructor(
    @inject('ICarsRepository')
    private carsRepository: ICarsRepository,

    @inject('IStorageProvider')
    private storageProvider: IStorageProvider
  ) {}

  async execute(data: ICreateCarsRequest): Promise<void> {
    const findCar = await this.carsRepository.findByLicensePlate(data.licensePlate);

    if (findCar) {
      throw new AppError(`Car with license plate ${data.licensePlate} already exists`);
    }

    if (data.thumbnail) {
      await this.storageProvider.save(data.thumbnail!, 'cars');
    }

    await this.carsRepository.create(data);
  }
}
