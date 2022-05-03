import { CreateRentalsUseCase } from './CreateRentalsUseCase';
import { UsersInMemoryRepository } from '@test/repositories/UsersInMemoryRepository';
import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';
import { CreateCarsUseCase } from '@application/cars/CreateCarsUseCase';
import { CarsInMemoryRepository } from '@test/repositories/CarsInMemoryRepository';
import { CreateUsersUseCase } from '@application/users/CreateUsersUseCase';
import { RentalsInMemoryRepository } from '@test/repositories/RentalsInMemoryRepository';
import { AppError } from '@shared/infra/http/middlewares/AppError';

let usersInMemory: UsersInMemoryRepository;
let carsInMemory: CarsInMemoryRepository;
let fakeStorage: FakeStorageProvider;
let rentalsInMemory: RentalsInMemoryRepository;

let createUsers: CreateUsersUseCase;
let createCars: CreateCarsUseCase;
let createRentals: CreateRentalsUseCase;

describe('CreateRentalsUseCase', () => {
  beforeEach(() => {
    usersInMemory = new UsersInMemoryRepository();
    carsInMemory = new CarsInMemoryRepository();
    fakeStorage = new FakeStorageProvider();
    rentalsInMemory = new RentalsInMemoryRepository();

    createUsers = new CreateUsersUseCase(usersInMemory);
    createCars = new CreateCarsUseCase(carsInMemory, fakeStorage);
    createRentals = new CreateRentalsUseCase(usersInMemory, carsInMemory, rentalsInMemory);
  });

  it('should not be able create a new rental with invalid user', async () => {
    await expect(
      createRentals.execute({
        userId: 'no-existent-fake-id',
        carId: 'no-existent-car-id',
        dateFrom: new Date(),
        dateAt: new Date(),
        total: 500,
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able create a new rental with invalid car', async () => {
    await createUsers.execute({
      name: 'fake-name',
      email: 'fake-email@email.com',
      password: 'fake-password',
      driverLicense: 'fake-driverLicense',
    });

    const findUser = await usersInMemory.findByEmail('fake-email@email.com');

    await expect(
      createRentals.execute({
        userId: findUser!.id,
        carId: 'no-existent-car-id',
        dateFrom: new Date(),
        dateAt: new Date(),
        total: 500,
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to create a new rental with valid user and car', async () => {
    await createUsers.execute({
      name: 'fake-name',
      email: 'fake-email@email.com',
      password: 'fake-password',
      driverLicense: 'fake-driverLicense',
    });

    const findUser = await usersInMemory.findByEmail('fake-email@email.com');

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

    await createRentals.execute({
      userId: findUser!.id,
      carId: findCar!.id,
      dateFrom: new Date(),
      dateAt: new Date(),
      total: 500,
    });

    await createRentals.execute({
      userId: findUser!.id,
      carId: findCar!.id,
      dateFrom: new Date(),
      dateAt: new Date(),
      total: 500,
    });
  });
});
