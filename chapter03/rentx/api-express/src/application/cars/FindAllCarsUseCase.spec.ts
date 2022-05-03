import { FindAllCarsUseCase } from './FindAllCarsUseCase';
import { CreateCarsUseCase } from './CreateCarsUseCase';
import { CarsInMemoryRepository } from '@test/repositories/CarsInMemoryRepository';
import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';

let carsInMemory: CarsInMemoryRepository;
let createCars: CreateCarsUseCase;
let findAllCarsUseCase: FindAllCarsUseCase;
let fakeStorage: FakeStorageProvider;

describe('CreateCarsUseCase', () => {
  beforeEach(() => {
    carsInMemory = new CarsInMemoryRepository();
    fakeStorage = new FakeStorageProvider();
    createCars = new CreateCarsUseCase(carsInMemory, fakeStorage);
    findAllCarsUseCase = new FindAllCarsUseCase(carsInMemory);
  });

  it('should be able to list all existent Car', async () => {
    await createCars.execute({
      name: 'fake-car-name-1',
      brand: 'fake-car-brand-1',
      about: 'fake-car-about-1',
      period: 'fake-car-period-1',
      price: 150,
      fuelType: 'electric',
      licensePlate: 'fake-license-plate-1',
    });

    await createCars.execute({
      name: 'fake-car-name-2',
      brand: 'fake-car-brand-2',
      about: 'fake-car-about-2',
      period: 'fake-car-period-2',
      price: 150,
      fuelType: 'gasoline',
      licensePlate: 'fake-license-plate-2',
    });

    await createCars.execute({
      name: 'fake-car-name-3',
      brand: 'fake-car-brand-3',
      about: 'fake-car-about-3',
      period: 'fake-car-period-3',
      price: 150,
      fuelType: 'gasoline',
      licensePlate: 'fake-license-plate-3',
    });

    const cars = await findAllCarsUseCase.execute();

    expect(cars).toHaveLength(3);
  });
});
