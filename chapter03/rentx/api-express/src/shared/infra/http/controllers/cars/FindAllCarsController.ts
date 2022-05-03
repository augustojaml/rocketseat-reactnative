import { container } from 'tsyringe';
import { Request, Response } from 'express';
import { FindAllCarsUseCase } from '@application/cars/FindAllCarsUseCase';

export class FindAllCarsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllCars = container.resolve(FindAllCarsUseCase);

    const cars = await findAllCars.execute();
    return response.json(cars);
  }
}
