import { AuthUsersUseCase } from '@application/users/AuthUsersUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class AuthUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authUsers = container.resolve(AuthUsersUseCase);

    const authResponse = await authUsers.execute({ email, password });

    return response.status(201).json(authResponse);
  }
}
