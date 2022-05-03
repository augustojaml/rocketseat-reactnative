import { Photo } from '@domain/cars/Photo';
import { ICreatePhoto, IPhotosRepository } from '@repositories/IPhotosRepository';
import { prisma } from '@services/prisma';

export class PhotosPrismaRepository implements IPhotosRepository {
  async create(data: ICreatePhoto): Promise<void> {
    const object = Photo.create(data);

    await prisma.photos.create({
      data: {
        id: object.id,
        ...object.props,
      },
    });
  }
  async findByCarId(carId: string): Promise<Photo[]> {
    const findPhotos = await prisma.photos.findMany({
      where: {
        carId: carId,
      },
    });

    const formattedAccessories = findPhotos.map((photo) => {
      const { id, ...props } = photo;
      return Photo.create(props, photo.id);
    });

    return formattedAccessories;
  }
}
