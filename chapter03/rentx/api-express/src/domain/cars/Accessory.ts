import { Entity } from '@core/domain/Entity';

export type AccessoryTypes = {
  carId: string;
  name: string;
  type: string;
  createdAt?: Date | null;
};

export class Accessory extends Entity<AccessoryTypes> {
  private constructor(props: AccessoryTypes, id?: string) {
    super(props, id);
  }

  static create(props: AccessoryTypes, id?: string) {
    const data = new Accessory(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return data;
  }
}
