import { User } from '@domain/users/User';
import { Rental } from '@domain/rentals/Rental';
import { Car } from '@domain/cars/Car';

export interface ICreateRental {
  userId: string;
  carId: string;
  dateFrom: Date;
  dateAt: Date;
  total: number;
}

export interface IRentalRepository {
  create(data: ICreateRental): Promise<void>;
  findRentalByUser(userId: string): Promise<Rental[]>;
}
