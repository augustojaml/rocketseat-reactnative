import { IAccessoriesRepository } from './../../repositories/IAccessoriesRepository';
import { ICreateAccessory } from '@repositories/IAccessoriesRepository';
import { ICarsRepository } from '@repositories/ICarsRepository';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { inject, injectable } from 'tsyringe';

@injectable()
export class CreateAccessoriesUseCase {
  constructor(
    @inject('ICarsRepository')
    private carsRepository: ICarsRepository,

    @inject('IAccessoriesRepository')
    private accessoriesRepository: IAccessoriesRepository
  ) {}
  async execute(data: ICreateAccessory): Promise<void> {
    const findCar = await this.carsRepository.findById(data.carId);

    if (!findCar) {
      throw new AppError('Car not registered');
    }

    const findAccessoryByName = await this.accessoriesRepository.findByName(findCar.id, data.name);

    if (findAccessoryByName) {
      throw new AppError('This accessory name has already been registered for this car');
    }

    const findAccessoryByType = await this.accessoriesRepository.findByType(findCar.id, data.type);

    if (findAccessoryByType) {
      throw new AppError('This accessory type has already been registered for this car');
    }

    await this.accessoriesRepository.create({ ...data, carId: findCar.id });
  }
}
