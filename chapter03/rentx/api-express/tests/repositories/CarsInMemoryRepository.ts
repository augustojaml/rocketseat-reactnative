import { Car } from '@domain/cars/Car';
import { ICarsRepository, ICreateCar, IUpdateCars } from '@repositories/ICarsRepository';

export class CarsInMemoryRepository implements ICarsRepository {
  private repository: Car[] = [];

  async create(data: ICreateCar): Promise<void> {
    const newCar = Car.create(data);
    this.repository.push(newCar);
  }

  async findById(carId: string): Promise<Car | null> {
    const findCar = this.repository.find((car) => car.id === carId);
    if (!findCar) {
      return null;
    }

    return findCar;
  }

  async findByLicensePlate(licensePlate: string): Promise<Car | null> {
    const findCar = this.repository.find((car) => car.props.licensePlate === licensePlate);
    if (!findCar) {
      return null;
    }
    return findCar;
  }

  async findAllCars(): Promise<Car[]> {
    return this.repository;
  }

  async updateCar(data: IUpdateCars): Promise<Car | null> {
    const findCar = this.repository.find((car) => car.id === data.id);

    if (!findCar) {
      return null;
    }

    const updateUser = Car.create(
      {
        name: data.name ? data.name : findCar.props.name,
        brand: data.brand ? data.brand : findCar.props.brand,
        about: data.about ? data.about : findCar.props.about,
        period: data.period ? data.period : findCar.props.period,
        price: data.price ? data.price : findCar.props.price,
        fuelType: data.fuelType ? data.fuelType : findCar.props.fuelType,
        licensePlate: data.licensePlate ? data.licensePlate : findCar.props.licensePlate,
        thumbnail: data.thumbnail ? data.thumbnail : findCar.props.thumbnail,
      },
      data.id
    );

    return updateUser;

    throw new Error('Method not implemented.');
  }
}
