import { UpdateUsersUseCase } from '@application/users/UpdateUsersUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class UpdateUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;

    const { name, email, driverLicense, password, newPassword } = request.body;
    const updateUser = container.resolve(UpdateUsersUseCase);

    const user = await updateUser.execute({
      id: userId,
      name,
      email,
      driverLicense,
      password,
      newPassword,
    });

    return response.status(201).json(user);
  }
}
