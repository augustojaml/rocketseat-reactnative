import { Entity } from '@core/domain/Entity';
import { Car } from '@domain/cars/Car';
import { User } from '@domain/users/User';

type RentalsProps = {
  userId: string;
  carId: string;
  dateFrom: Date;
  dateAt: Date;
  total: number;
  car?: Car | null;
  createdAt?: Date | null;
};

export class Rental extends Entity<RentalsProps> {
  private constructor(props: RentalsProps, id?: string) {
    super(props, id);
  }

  static create(props: RentalsProps, id?: string) {
    const data = new Rental(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      },
      id
    );

    return data;
  }
}
