import { FindAllAccessoriesByCarUseCase } from './FindAllAccessoriesByCarUseCase';
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
let findAllAccessoriesByCar: FindAllAccessoriesByCarUseCase;

describe('CreateAccessoriesUseCase', () => {
  beforeEach(() => {
    carsInMemory = new CarsInMemoryRepository();
    createCars = new CreateCarsUseCase(carsInMemory, fakeStorage);
    accessoriesInMemory = new AccessoriesInMemoryRepository();
    createAccessories = new CreateAccessoriesUseCase(carsInMemory, accessoriesInMemory);
    findAllAccessoriesByCar = new FindAllAccessoriesByCarUseCase(carsInMemory, accessoriesInMemory);
  });

  it('should not be able to list all accessories with car already registered', async () => {
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
      type: 'fake-car-type-1',
    });

    await createAccessories.execute({
      carId: findCar.id,
      name: 'fake-accessory-name-2',
      type: 'fake-car-type-2',
    });

    expect(await findAllAccessoriesByCar.execute(findCar.id)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          carId: findCar.id,
          name: 'fake-accessory-name-1',
          type: 'fake-car-type-1',
        }),
        expect.objectContaining({
          carId: findCar.id,
          name: 'fake-accessory-name-2',
          type: 'fake-car-type-2',
        }),
      ])
    );
  });
});
