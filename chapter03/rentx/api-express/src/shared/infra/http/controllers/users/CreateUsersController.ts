import { CreateUsersUseCase } from '@application/users/CreateUsersUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateUsersController {
  async handle(request: Request, response: Response) {
    const { name, email, password, driverLicense } = request.body;

    const createUsers = container.resolve(CreateUsersUseCase);
    await createUsers.execute({ name, email, password, driverLicense });
    return response.status(201).json({ message: 'User created' });
  }
}
