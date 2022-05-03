import { AppError } from '@shared/infra/http/middlewares/AppError';
import { FakeStorageProvider } from '@test/providers/StorageProviders/FakeStorageProvider';
import { CarsInMemoryRepository } from '@test/repositories/CarsInMemoryRepository';
import { PhotosInMemoryRepository } from '@test/repositories/PhotosInMemoryRepository';
import { CreateCarsUseCase } from './CreateCarsUseCase';
import { CreatePhotosUseCase } from './CreatePhotosUseCase';
import { FindPhotosByCarUseCase } from './FindPhotosByCarUseCase';

let carsInMemory: CarsInMemoryRepository;
let fakeStorage: FakeStorageProvider;
let createCars: CreateCarsUseCase;

let photosInMemory: PhotosInMemoryRepository;
let findPhotosByCar: FindPhotosByCarUseCase;
let createPhotos: CreatePhotosUseCase;

describe('FindPhotosByCarUseCase', () => {
  beforeEach(() => {
    carsInMemory = new CarsInMemoryRepository();
    fakeStorage = new FakeStorageProvider();
    createCars = new CreateCarsUseCase(carsInMemory, fakeStorage);
    photosInMemory = new PhotosInMemoryRepository();
    createPhotos = new CreatePhotosUseCase(carsInMemory, photosInMemory, fakeStorage);
    findPhotosByCar = new FindPhotosByCarUseCase(carsInMemory, photosInMemory);
  });

  it('should not able to list photos with non-registered car', async () => {
    await expect(findPhotosByCar.execute('no-existent-car-id')).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to list photos with registered car', async () => {
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

    const photos = await findPhotosByCar.execute(findCar!.id);

    expect(photos).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          photo: 'fake-photo-1',
        }),
        expect.objectContaining({
          photo: 'fake-photo-2',
        }),
        expect.objectContaining({
          photo: 'fake-photo-3',
        }),
        expect.objectContaining({
          photo: 'fake-photo-4',
        }),
      ])
    );
  });
});
