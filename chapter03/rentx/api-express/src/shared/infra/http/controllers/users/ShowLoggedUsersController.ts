import { ShowLoggedUsersUseCase } from '@application/users/ShowLoggedUsersUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class ShowLoggedUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const showLoggedUsers = container.resolve(ShowLoggedUsersUseCase);
    const user = await showLoggedUsers.execute(userId);
    return response.status(201).json(user);
  }
}
