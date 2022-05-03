import { Accessory } from '@domain/cars/Accessory';
import { IAccessoriesRepository } from '@repositories/IAccessoriesRepository';
import { ICarsRepository } from '@repositories/ICarsRepository';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { inject, injectable } from 'tsyringe';

type IFindAllAccessoriesByCarResponse = {
  id: string;
  carId: string;
  type: string;
  name: string;
};

const findAllAccessoriesByCarResponse = (data: Accessory[]) => {
  return data.map((accessory) => {
    return {
      id: accessory.id,
      carId: accessory.props.carId,
      type: accessory.props.type,
      name: accessory.props.name,
    };
  });
};

@injectable()
export class FindAllAccessoriesByCarUseCase {
  constructor(
    @inject('ICarsRepository')
    private carsRepository: ICarsRepository,

    @inject('IAccessoriesRepository')
    private accessoriesRepository: IAccessoriesRepository
  ) {}

  async execute(carId: string): Promise<IFindAllAccessoriesByCarResponse[]> {
    const findCar = await this.carsRepository.findById(carId);

    if (!findCar) {
      throw new AppError('Car not registered');
    }

    const accessories = await this.accessoriesRepository.findAllAccessoriesByCar(findCar.id);

    return findAllAccessoriesByCarResponse(accessories);
  }
}
