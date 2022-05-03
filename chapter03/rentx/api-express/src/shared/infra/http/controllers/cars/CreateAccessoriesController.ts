import { CreateAccessoriesUseCase } from '@application/cars/CreateAccessoriesUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateAccessoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { carId, name, type } = request.body;

    const createAccessory = container.resolve(CreateAccessoriesUseCase);

    await createAccessory.execute({ carId, name, type });

    return response.status(201).json({ message: 'Accessory created' });
  }
}
