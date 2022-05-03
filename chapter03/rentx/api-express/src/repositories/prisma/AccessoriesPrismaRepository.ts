import { Accessory } from '@domain/cars/Accessory';
import { IAccessoriesRepository, ICreateAccessory } from '@repositories/IAccessoriesRepository';
import { prisma } from '@services/prisma';

export class AccessoriesPrismaRepository implements IAccessoriesRepository {
  async create(data: ICreateAccessory): Promise<void> {
    const object = Accessory.create(data);

    await prisma.accessories.create({
      data: {
        id: object.id,
        ...object.props,
      },
    });
  }
  async findByName(carId: string, name: string): Promise<Accessory | null> {
    const findAccessory = await prisma.accessories.findFirst({
      where: {
        AND: [{ carId: carId }, { name: name }],
      },
    });

    if (!findAccessory) {
      return null;
    }

    const { id, ...props } = findAccessory;

    const accessory = Accessory.create(props, findAccessory.id);

    return accessory;
  }

  async findByType(carId: string, type: string): Promise<Accessory | null> {
    const findAccessory = await prisma.accessories.findFirst({
      where: {
        AND: [{ carId: carId }, { type: type }],
      },
    });

    if (!findAccessory) {
      return null;
    }

    const { id, ...props } = findAccessory;

    const accessory = Accessory.create(props, findAccessory.id);

    return accessory;
  }

  async findAllAccessoriesByCar(carId: string): Promise<Accessory[]> {
    const findAccessories = await prisma.accessories.findMany({
      where: {
        carId: carId,
      },
    });

    const formattedAccessories = findAccessories.map((accessory) => {
      const { id, ...props } = accessory;
      return Accessory.create(props, accessory.id);
    });

    return formattedAccessories;
  }
}
