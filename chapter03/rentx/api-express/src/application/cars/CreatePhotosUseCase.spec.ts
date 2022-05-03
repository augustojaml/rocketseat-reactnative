import { AppError } from '@shared/infra/http/middlewares/AppError';
import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';
import { CarsInMemoryRepository } from '@test/repositories/CarsInMemoryRepository';
import { PhotosInMemoryRepository } from '@test/repositories/PhotosInMemoryRepository';
import { CreateCarsUseCase } from './CreateCarsUseCase';
import { CreatePhotosUseCase } from './CreatePhotosUseCase';

let carsInMemory: CarsInMemoryRepository;
let createCars: CreateCarsUseCase;

let fakeStorage: FakeStorageProvider;

let photosInMemory: PhotosInMemoryRepository;
let createPhotos: CreatePhotosUseCase;

describe('CreatePhotosUseCase', () => {
  beforeEach(() => {
    carsInMemory = new CarsInMemoryRepository();
    photosInMemory = new PhotosInMemoryRepository();
    fakeStorage = new FakeStorageProvider();
    createCars = new CreateCarsUseCase(carsInMemory, fakeStorage);
    createPhotos = new CreatePhotosUseCase(carsInMemory, photosInMemory, fakeStorage);
  });

  it('should not be able to create photos with no registered car', async () => {
    await expect(
      createPhotos.execute({
        carId: 'no-existent-fake-car-id',
        photos: ['fake-photo-1', 'fake-photo-2'],
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to crate photos with existent car', async () => {
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

    await createPhotos.execute({
      carId: findCar!.id,
      photos: ['fake-photo-1', 'fake-photo-2', 'fake-photo-3', 'fake-photo-4'],
    });

    expect.arrayContaining([
      expect.objectContaining({
        props: expect.objectContaining({
          photo: 'fake-photo-1',
        }),
      }),
      expect.objectContaining({
        props: expect.objectContaining({
          photo: 'fake-photo-2',
        }),
      }),
      expect.objectContaining({
        props: expect.objectContaining({
          photo: 'fake-photo-3',
        }),
      }),
      expect.objectContaining({
        props: expect.objectContaining({
          photo: 'fake-photo-4',
        }),
      }),
    ]);
  });
});
