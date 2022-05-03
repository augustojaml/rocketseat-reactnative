import { AppError } from '@shared/infra/http/middlewares/AppError';
import { AccessoriesInMemoryRepository } from '@test/repositories/AccessoriesInMemoryRepository';
import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';
import { CarsInMemoryRepository } from '@test/repositories/CarsInMemoryRepository';
import { CreateAccessoriesUseCase } from './CreateAccessoriesUseCase';
import { CreateCarsUseCase } from './CreateCarsUseCase';

let carsInMemory: CarsInMemoryRepository;
let createCars: CreateCarsUseCase;
let fakeStorage: FakeStorageProvider;

let accessoriesInMemory: AccessoriesInMemoryRepository;
let createAccessories: CreateAccessoriesUseCase;

describe('CreateAccessoriesUseCase', () => {
  beforeEach(() => {
    carsInMemory = new CarsInMemoryRepository();
    createCars = new CreateCarsUseCase(carsInMemory, fakeStorage);
    accessoriesInMemory = new AccessoriesInMemoryRepository();
    createAccessories = new CreateAccessoriesUseCase(carsInMemory, accessoriesInMemory);
  });

  it('should not be able to register an accessory with an unregistered car', async () => {
    await expect(
      createAccessories.execute({
        carId: 'fake-car-id',
        name: 'fake-car-name',
        type: 'fake-car-type',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to register an accessory with accessory name already registered', async () => {
    await createCars.execute({
      name: 'fake-car-name',
      brand: 'fake-car-brand',
      about: 'fake-car-about',
      period: 'fake-car-period',
      price: 150,
      fuelType: 'electric',
      licensePlate: 'fake-license-plate',
    });

    const findCar = await carsInMemory.findByLicensePlate('fake-license-plate');

    if (!findCar) {
      return null;
    }

    await createAccessories.execute({
      carId: findCar.id,
      name: 'fake-accessory-name',
      type: 'fake-car-type',
    });

    await expect(
      createAccessories.execute({
        carId: findCar.id,
        name: 'fake-accessory-name',
        type: 'fake-car-type',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to register an accessory with accessory type already registered', async () => {
    await createCars.execute({
      name: 'fake-car-name',
      brand: 'fake-car-brand',
      about: 'fake-car-about',
      period: 'fake-car-period',
      price: 150,
      fuelType: 'electric',
      licensePlate: 'fake-license-plate',
    });

    const findCar = await carsInMemory.findByLicensePlate('fake-license-plate');

    if (!findCar) {
      return null;
    }

    await createAccessories.execute({
      carId: findCar.id,
      name: 'fake-accessory-name-1',
      type: 'fake-car-type',
    });

    await expect(
      createAccessories.execute({
        carId: findCar.id,
        name: 'fake-accessory-name-2',
        type: 'fake-car-type',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a new accessory for existent car', async () => {
    await createCars.execute({
      name: 'fake-car-name',
      brand: 'fake-car-brand',
      about: 'fake-car-about',
      period: 'fake-car-period',
      price: 150,
      fuelType: 'electric',
      licensePlate: 'fake-license-plate',
    });

    const findCar = await carsInMemory.findByLicensePlate('fake-license-plate');

    if (!findCar) {
      return null;
    }

    await createAccessories.execute({
      carId: findCar.id,
      name: 'fake-accessory-name',
      type: 'fake-accessory-type',
    });

    const accessory = await accessoriesInMemory.findByName(findCar.id, 'fake-accessory-name');

    expect(accessory).toEqual(
      expect.objectContaining({
        props: expect.objectContaining({
          carId: findCar.id,
          name: 'fake-accessory-name',
          type: 'fake-accessory-type',
        }),
      })
    );
  });
});
