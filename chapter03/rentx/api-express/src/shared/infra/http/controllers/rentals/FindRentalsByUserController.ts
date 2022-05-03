import { FindRentalsByUserUseCase } from '@application/rentals/FindRentalsByUserUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class FindRentalsByUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const findRentalsByUser = container.resolve(FindRentalsByUserUseCase);

    const rentals = await findRentalsByUser.execute(userId);
    return response.json(rentals);
  }
}
