import { CreateRentalsUseCase } from '@application/rentals/CreateRentalsUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateRentalsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { carId, dateFrom, dateAt, total } = request.body;

    const createRentals = container.resolve(CreateRentalsUseCase);

    await createRentals.execute({
      userId: userId,
      carId: carId,
      dateFrom: dateFrom,
      dateAt: dateAt,
      total: Number(total),
    });

    return response.json({ message: 'rental created' });
  }
}
