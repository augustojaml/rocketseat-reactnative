import { prisma } from '@services/prisma';
import { Rental } from '@domain/rentals/Rental';
import { ICreateRental, IRentalRepository } from '@repositories/IRentalRepository';
import { Car } from '@domain/cars/Car';

export class RentalsPrismaRepository implements IRentalRepository {
  async create(data: ICreateRental): Promise<void> {
    const object = Rental.create(data);

    await prisma.rentals.create({
      data: {
        id: object.id,
        userId: object.props.userId,
        carId: object.props.carId,
        dateFrom: object.props.dateFrom,
        dateAt: object.props.dateAt,
        total: object.props.total,
      },
    });
  }

  async findRentalByUser(userId: string): Promise<Rental[]> {
    const findRentals = await prisma.rentals.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: true,
        car: true,
      },
    });

    const formattedRental = findRentals.map((rental) => {
      const { id, ...props } = rental;

      const car = Car.create({ ...rental.car, price: Number(rental.car.price) });

      return Rental.create({ ...props, total: Number(rental.total), car: car }, rental.id);
    });

    return formattedRental;
  }
}
