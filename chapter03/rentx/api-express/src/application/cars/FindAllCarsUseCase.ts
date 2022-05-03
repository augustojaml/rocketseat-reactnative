import { Accessory } from '@domain/cars/Accessory';
import { Car } from '@domain/cars/Car';
import { ICarsRepository } from '@repositories/ICarsRepository';
import { inject, injectable } from 'tsyringe';

type IAccessoryResponse = {
  id: string;
  carId: string;
  name: string;
  type: string;
};

type IPhotosResponse = {
  id: string;
  carId: string;
  photo: string;
};

type IFindAllCarsResponse = {
  id: string;
  name: string;
  brand: string;
  about: string;
  period: string;
  price: number;
  fuelType: string;
  licensePlate: string;
  available?: boolean;
  thumbnail?: string | null;
  accessories?: IAccessoryResponse[] | undefined;
  photos?: IPhotosResponse[] | undefined;
};

const findAllCarsResponse = (data: Car[]) => {
  return data.map((car) => {
    return {
      id: car.id,
      name: car.props.name,
      brand: car.props.brand,
      about: car.props.about,
      period: car.props.period,
      price: car.props.price,
      fuelType: car.props.fuelType,
      licensePlate: car.props.licensePlate,
      available: car.props.available,
      thumbnail: car.props.thumbnail,
      accessories: car.props.accessories?.map((accessory) => {
        return {
          id: accessory.id,
          carId: accessory.props.carId,
          name: accessory.props.name,
          type: accessory.props.type,
        };
      }),
      photos: car.props.photos?.map((photo) => {
        return {
          id: photo.id,
          carId: photo.props.carId,
          photo: photo.props.photo,
        };
      }),
    };
  });
};

@injectable()
export class FindAllCarsUseCase {
  constructor(
    @inject('ICarsRepository')
    private carsRepository: ICarsRepository
  ) {}

  async execute(): Promise<IFindAllCarsResponse[]> {
    const cars = await this.carsRepository.findAllCars();

    return findAllCarsResponse(cars);
  }
}
