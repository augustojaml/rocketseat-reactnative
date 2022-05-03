import { Rental } from '@domain/rentals/Rental';
import { ICreateRental, IRentalRepository } from '@repositories/IRentalRepository';

export class RentalsInMemoryRepository implements IRentalRepository {
  private repository: Rental[] = [];

  async create(data: ICreateRental): Promise<void> {
    this.repository.push(Rental.create(data));
  }

  async findRentalByUser(userId: string): Promise<Rental[]> {
    const rentals = this.repository.filter((rental) => rental.props.userId === userId);
    return rentals;
  }
}
