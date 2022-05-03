import { CreateCarsUseCase } from './CreateCarsUseCase';
import { CarsInMemoryRepository } from '@test/repositories/CarsInMemoryRepository';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';

let carsInMemory: CarsInMemoryRepository;
let createCars: CreateCarsUseCase;
let fakeStorage: FakeStorageProvider;

describe('CreateCarsUseCase', () => {
  beforeEach(() => {
    carsInMemory = new CarsInMemoryRepository();
    createCars = new CreateCarsUseCase(carsInMemory, fakeStorage);
  });

  it('should be not able to create a new Car with license plate existent', async () => {
    await createCars.execute({
      name: 'fake-car-name',
      brand: 'fake-car-brand',
      about: 'fake-car-about',
      period: 'fake-car-period',
      price: 150,
      fuelType: 'electric',
      licensePlate: 'fake-license-plate',
    });

    await expect(
      createCars.execute({
        name: 'fake-car-name',
        brand: 'fake-car-brand',
        about: 'fake-car-about',
        period: 'fake-car-period',
        price: 150,
        fuelType: 'electric',
        licensePlate: 'fake-license-plate',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a new Car', async () => {
    expect(
      await createCars.execute({
        name: 'fake-car-name',
        brand: 'fake-car-brand',
        about: 'fake-car-about',
        period: 'fake-car-period',
        price: 150,
        fuelType: 'electric',
        licensePlate: 'fake-license-plate',
      })
    ).not.toBeInstanceOf(AppError);
  });
});
