import { CreateCarsUseCase } from '@application/cars/CreateCarsUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, brand, about, period, price, fuelType, licensePlate } = request.body;

    const thumbnail = request.file?.filename;

    const createCars = container.resolve(CreateCarsUseCase);

    await createCars.execute({
      name,
      brand,
      about,
      period,
      price,
      fuelType,
      licensePlate,
      thumbnail,
    });

    return response.status(201).json({ message: 'car created' });
  }
}
