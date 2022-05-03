import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';
import { CarsInMemoryRepository } from '@test/repositories/CarsInMemoryRepository';
import { RentalsInMemoryRepository } from '@test/repositories/RentalsInMemoryRepository';
import { UsersInMemoryRepository } from '@test/repositories/UsersInMemoryRepository';
import { CreateRentalsUseCase } from './CreateRentalsUseCase';
import { FindRentalsByUserUseCase } from './FindRentalsByUserUseCase';

let usersInMemory: UsersInMemoryRepository;
let carsInMemory: CarsInMemoryRepository;
let rentalsInMemory: RentalsInMemoryRepository;

let createRentals: CreateRentalsUseCase;
let findRentalsByUser: FindRentalsByUserUseCase;

describe('FindRentalsByUserUseCase', () => {
  beforeEach(() => {
    usersInMemory = new UsersInMemoryRepository();
    carsInMemory = new CarsInMemoryRepository();
    rentalsInMemory = new RentalsInMemoryRepository();
    createRentals = new CreateRentalsUseCase(usersInMemory, carsInMemory, rentalsInMemory);
    findRentalsByUser = new FindRentalsByUserUseCase(rentalsInMemory);
  });

  it('show be able to list rental with logged user', async () => {
    await usersInMemory.create({
      name: 'fake-name',
      email: 'fake-email@email.com',
      password: 'fake-password',
      driverLicense: 'fake-driverLicense',
    });
    const findUser = await usersInMemory.findByEmail('fake-email@email.com');

    await carsInMemory.create({
      name: 'fake-car-name-1',
      brand: 'fake-car-brand-1',
      about: 'fake-car-about-1',
      period: 'fake-car-period-1',
      price: 150,
      fuelType: 'electric',
      licensePlate: 'fake-license-plate-1',
    });

    const findCar1 = await carsInMemory.findByLicensePlate('fake-license-plate-1');

    await carsInMemory.create({
      name: 'fake-car-name-2',
      brand: 'fake-car-brand-2',
      about: 'fake-car-about-2',
      period: 'fake-car-period-2',
      price: 150,
      fuelType: 'electric',
      licensePlate: 'fake-license-plate-2',
    });

    const findCar2 = await carsInMemory.findByLicensePlate('fake-license-plate-2');

    await createRentals.execute({
      userId: findUser!.id,
      carId: findCar1!.id,
      dateFrom: new Date(),
      dateAt: new Date(),
      total: 1000,
    });

    await createRentals.execute({
      userId: findUser!.id,
      carId: findCar2!.id,
      dateFrom: new Date(),
      dateAt: new Date(),
      total: 1500,
    });

    expect(await findRentalsByUser.execute(findUser!.id)).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userId: findUser!.id,
          carId: findCar1!.id,
          total: 1000,
        }),
        expect.objectContaining({
          userId: findUser!.id,
          carId: findCar2!.id,
          total: 1500,
        }),
      ])
    );
  });
});
