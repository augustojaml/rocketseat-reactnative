import { Photo } from './Photo';
import { Entity } from '@core/domain/Entity';
import { Accessory } from './Accessory';

export type FuelTypeProps = 'electric' | 'gasoline' | 'hybrid';

export type CarProps = {
  name: string;
  brand: string;
  about: string;
  period: string;
  price: number;
  fuelType: string;
  licensePlate: string;
  available?: boolean;
  thumbnail?: string | null;
  accessories?: Accessory[];
  photos?: Photo[];
  createdAt?: Date | null;
};

export class Car extends Entity<CarProps> {
  private constructor(props: CarProps, id?: string) {
    super(props, id);
  }

  static create(props: CarProps, id?: string) {
    const data = new Car(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return data;
  }
}
