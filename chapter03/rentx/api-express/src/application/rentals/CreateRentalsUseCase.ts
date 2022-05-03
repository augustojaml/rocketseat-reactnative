import { inject, injectable } from 'tsyringe';
import { ICarsRepository } from '@repositories/ICarsRepository';
import { IRentalRepository } from '@repositories/IRentalRepository';
import { IUsersRepository } from '@repositories/IUsersRepositories';
import { AppError } from '@shared/infra/http/middlewares/AppError';

type ICreateRentalRequest = {
  userId: string;
  carId: string;
  dateFrom: Date;
  dateAt: Date;
  total: number;
};

@injectable()
export class CreateRentalsUseCase {
  constructor(
    @inject('IUsersRepository')
    private usersRepository: IUsersRepository,

    @inject('ICarsRepository')
    private carsRepository: ICarsRepository,

    @inject('IRentalRepository')
    private rentalsRepository: IRentalRepository
  ) {}

  async execute(data: ICreateRentalRequest): Promise<void> {
    const findUser = await this.usersRepository.findById(data.userId);

    if (!findUser) {
      throw new AppError('User not allowed e/ou not found');
    }

    const findCar = await this.carsRepository.findById(data.carId);

    if (!findCar) {
      throw new AppError('Car not allowed e/ou not found');
    }

    await this.rentalsRepository.create(data);
  }
}
