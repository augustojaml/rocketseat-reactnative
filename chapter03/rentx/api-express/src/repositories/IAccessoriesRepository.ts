import { Accessory } from '@domain/cars/Accessory';

export type ICreateAccessory = {
  carId: string;
  type: string;
  name: string;
  createdAt?: Date | null;
};

export interface IAccessoriesRepository {
  create(data: ICreateAccessory): Promise<void>;
  findByName(carId: string, name: string): Promise<Accessory | null>;
  findByType(carId: string, type: string): Promise<Accessory | null>;
  findAllAccessoriesByCar(carId: string): Promise<Accessory[]>;
}
