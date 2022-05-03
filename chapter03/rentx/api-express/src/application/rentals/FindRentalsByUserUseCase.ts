import { Rental } from '@domain/rentals/Rental';
import { IRentalRepository } from '@repositories/IRentalRepository';
import { AppError } from '@shared/infra/http/middlewares/AppError';
import { inject, injectable } from 'tsyringe';

const findRentalsByUserResponse = (rentals: Rental[]) => {
  return rentals.map((rental) => {
    return {
      id: rental.id,
      userId: rental.props.userId,
      carId: rental.props.carId,
      dateFrom: rental.props.dateFrom,
      dateAt: rental.props.dateAt,
      total: rental.props.total,
      car: {
        id: rental.props.carId,
        name: rental.props.car?.props.name,
        brand: rental.props.car?.props.brand,
        about: rental.props.car?.props.about,
        period: rental.props.car?.props.period,
        price: rental.props.car?.props.price,
        fuelType: rental.props.car?.props.fuelType,
        thumbnail: rental.props.car?.props.thumbnail,
      },
    };
  });
};

@injectable()
export class FindRentalsByUserUseCase {
  constructor(
    @inject('IRentalRepository')
    private rentalsRepository: IRentalRepository
  ) {}

  async execute(userId: string) {
    const rentals = await this.rentalsRepository.findRentalByUser(userId);

    if (!rentals) {
      throw new AppError('Rentals not found or operation not allowed');
    }

    return findRentalsByUserResponse(rentals);
  }
}
