import { Accessory } from '@domain/cars/Accessory';
import { IAccessoriesRepository, ICreateAccessory } from '@repositories/IAccessoriesRepository';

export class AccessoriesInMemoryRepository implements IAccessoriesRepository {
  public repository: Accessory[] = [];

  async create(data: ICreateAccessory): Promise<void> {
    const accessory = Accessory.create(data);
    this.repository.push(accessory);
  }

  async findByName(carId: string, name: string): Promise<Accessory | null> {
    const accessory = this.repository.find(
      (accessory) => accessory.props.carId === carId && accessory.props.name === name
    );
    if (!accessory) {
      return null;
    }
    return accessory;
  }

  async findByType(carId: string, type: string): Promise<Accessory | null> {
    const accessory = this.repository.find(
      (accessory) => accessory.props.carId === carId && accessory.props.type === type
    );
    if (!accessory) {
      return null;
    }
    return accessory;
  }

  async findAllAccessoriesByCar(carId: string): Promise<Accessory[]> {
    const accessories = this.repository.filter((accessory) => accessory.props.carId === carId);
    return accessories;
  }
}
