import { AppError } from '@shared/infra/http/middlewares/AppError';
import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';
import { CarsInMemoryRepository } from '@test/repositories/CarsInMemoryRepository';
import { CreateCarsUseCase } from './CreateCarsUseCase';
import { UpdateCarsUseCase } from './UpdateCarsUseCase';

let carsInMemory: CarsInMemoryRepository;
let createCars: CreateCarsUseCase;
let fakeStorage: FakeStorageProvider;
let updateCars: UpdateCarsUseCase;

describe('UpdateCarsUseCase', () => {
  carsInMemory = new CarsInMemoryRepository();
  createCars = new CreateCarsUseCase(carsInMemory, fakeStorage);
  updateCars = new UpdateCarsUseCase(carsInMemory, fakeStorage);

  it('should be not able to update car with invalid id', async () => {
    await expect(
      updateCars.execute({
        id: 'update-fake-id',
        name: 'update-fake-car-name',
        brand: 'update-fake-car-brand',
        about: 'update-fake-car-about',
        period: 'update-fake-car-period',
        price: 200,
        fuelType: 'gasoline',
        licensePlate: 'update-fake-license-plate',
        thumbnail: 'update-fake-thumbnail',
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to update car', async () => {
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

    const updateCar = await updateCars.execute({
      id: findCar!.id,
      name: 'update-fake-car-name',
      brand: 'update-fake-car-brand',
      about: 'update-fake-car-about',
      period: 'update-fake-car-period',
      price: 200,
      fuelType: 'gasoline',
      licensePlate: 'update-fake-license-plate',
      thumbnail: 'update-fake-thumbnail',
    });

    expect(updateCar).toEqual(
      expect.objectContaining({
        name: 'update-fake-car-name',
        brand: 'update-fake-car-brand',
        about: 'update-fake-car-about',
        period: 'update-fake-car-period',
        price: 200,
        fuelType: 'gasoline',
        licensePlate: 'update-fake-license-plate',
        thumbnail: 'update-fake-thumbnail',
      })
    );
  });
});
