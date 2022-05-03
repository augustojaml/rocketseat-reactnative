import { Photo } from './../../domain/cars/Photo';
import { Accessory } from '@domain/cars/Accessory';
import { Car } from '@domain/cars/Car';
import { ICarsRepository, ICreateCar, IUpdateCars } from '@repositories/ICarsRepository';
import { prisma } from '@services/prisma';

export class CarsPrismaRepository implements ICarsRepository {
  async create(data: ICreateCar): Promise<void> {
    const object = Car.create(data);

    await prisma.cars.create({
      data: {
        id: object.id,
        ...object.props,
      },
    });
  }

  async findById(carId: string): Promise<Car | null> {
    const findCar = await prisma.cars.findFirst({
      where: {
        id: carId,
      },
    });

    if (!findCar) {
      return null;
    }

    const { id, ...props } = findCar;

    const car = Car.create({ ...props, price: Number(findCar.price) }, findCar.id);

    return car;
  }

  async findByLicensePlate(licensePlate: string): Promise<Car | null> {
    const findCar = await prisma.cars.findFirst({
      where: {
        licensePlate,
      },
    });

    if (!findCar) {
      return null;
    }

    const { id, ...props } = findCar;

    const car = Car.create({ ...props, price: Number(findCar.price) }, findCar.id);

    return car;
  }

  async findAllCars(): Promise<Car[]> {
    const findCars = await prisma.cars.findMany({
      include: {
        accessories: true,
        photos: true,
      },
    });

    const formattedCar = findCars.map((car) => {
      const { id, ...props } = car;
      const formattedAccessories = car.accessories.map((accessory) => {
        return Accessory.create(accessory);
      });

      const formattedPhotos = car.photos.map((photo) => {
        return Photo.create(photo);
      });

      return Car.create(
        {
          ...props,
          price: Number(car.price),
          accessories: formattedAccessories,
          photos: formattedPhotos,
        },
        car.id
      );
    });
    return formattedCar;
  }

  async updateCar(data: IUpdateCars): Promise<Car | null> {
    const findCar = await this.findById(data.id);

    if (!findCar) {
      return null;
    }

    const updateCar = await prisma.cars.update({
      where: { id: data.id },
      data: {
        name: data.name ? data.name : findCar.props.name,
        brand: data.brand ? data.brand : findCar.props.brand,
        about: data.about ? data.about : findCar.props.about,
        period: data.period ? data.period : findCar.props.period,
        price: data.price ? data.price : findCar.props.price,
        fuelType: data.fuelType ? data.fuelType : findCar.props.fuelType,
        licensePlate: data.licensePlate ? data.licensePlate : findCar.props.licensePlate,
        thumbnail: data.thumbnail ? data.thumbnail : findCar.props.thumbnail,
        available:
          data.available === true || data.available === false
            ? data.available
            : findCar.props.available,
      },
    });

    const { id, ...props } = updateCar;

    return Car.create({ ...props, price: Number(data.price) }, updateCar.id);
  }
}
