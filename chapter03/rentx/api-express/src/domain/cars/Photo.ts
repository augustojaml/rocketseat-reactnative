import { Entity } from '@core/domain/Entity';
import { Accessory } from './Accessory';

export type FuelTypeProps = 'electric' | 'gasoline' | 'hybrid';

export type CarProps = {
  carId: string;
  photo: string;
  createdAt?: Date | null;
};

export class Photo extends Entity<CarProps> {
  private constructor(props: CarProps, id?: string) {
    super(props, id);
  }

  static create(props: CarProps, id?: string) {
    const data = new Photo(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return data;
  }
}
